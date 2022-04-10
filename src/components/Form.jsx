import { getFirestore, collection, addDoc, Timestamp, writeBatch, query, documentId, getDocs, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import Loader from "./Loader";
import { useState } from "react";

function Form() {
    const { cartList, getTotalPrice, clearCart } = useCartContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [orderId, setOrderId] = useState();
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientEmailConfirmation, setClientEmailConfirmation] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [emailError, setEmailError] = useState(false);


    async function generateOrder(e) {
        e.preventDefault();
        if(clientEmail === clientEmailConfirmation) {
            setIsLoading(true);
            setEmailError(false);

            let order = {};
            const db = getFirestore();
            const batch = writeBatch(db);
            const queryCollectionOrders = collection(db, 'orders');
            const queryCollectionProducts = collection(db, 'products');

            order.buyer = {name: clientName, email: clientEmail, phone: clientPhone};

            order.items = cartList.map((item) => {
                const id = item.product.id;
                const title = item.product.title;
                const price = item.product.price;
                const quantity = item.quantity;

                return {id, title, price, quantity};
            });
            order.date = Timestamp.fromDate(new Date());
            order.total = getTotalPrice();

            await addDoc(queryCollectionOrders, order)
                .then(resp => setOrderId(resp.id));
            
            const queryUpdateStock = await query(queryCollectionProducts,
                where(documentId(),
                'in',
                order.items.map(item => item.id ))
            );
            await getDocs(queryUpdateStock)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref, {stock: res.data().stock - cartList.find(item => item.product.id === res.id).quantity})));

            batch.commit();
            clearCart();
            setIsLoading(false);
            setIsFinished(true);
        } else {
            setEmailError(true);
        }
    }

    function nameChange(e) {
        setClientName(e.target.value);
    }

    function emailChange(e) {
        setClientEmail(e.target.value);
    }

    function emailConfirmationChange(e) {
        setClientEmailConfirmation(e.target.value);
    }

    function phoneChange(e) {
        setClientPhone(e.target.value);
    }

    return (
        isLoading ?
            <div className="d-flex justify-content-center">
                <Loader /> 
            </div>
        :
            (isFinished ? 
                    <div className="d-flex flex-column pt-5 justify-content-center gap-5">
                        <h2 className="text-center">Has finalizado la compra</h2>
                        <h3 className="text-center">Id de la orden: {orderId}</h3>
                    </div>
                :
                    <div className="container mt-5 mb-5 w-50 d-flex flex-column gap-3">
                        <form onSubmit={generateOrder}>
                            <div className="mb-3">
                                <label className="form-label">Nombre*</label>
                                <input type="text" onChange={nameChange}className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email*</label>
                                <input type="email" className="form-control" onChange={emailChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirmar Email*</label>
                                <input type="email" className="form-control" onChange={emailConfirmationChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono*</label>
                                <input type="tel" className="form-control" onChange={phoneChange} required />
                            </div>
                            <div className={"mb-3 text-danger" + (emailError ? " d-block" : " d-none")}>
                                <p>Las direcciones de email ingresadas deben ser iguales.</p>
                            </div>
                            <div className="d-flex justify-content-center gap-3">
                                <Link to="/cart" className="d-inline-flex">
                                    <button className="btn btn-primary background-color-primary mt-5 p-3">Volver</button>
                                </Link>
                                <button className="btn btn-primary background-color-primary mt-5 p-3" type="submit">Generar orden</button>
                            </div>
                        </form>
                    </div>
                )
    );
}

export default Form;