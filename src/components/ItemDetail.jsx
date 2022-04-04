import ItemCount from "./ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

function ItemDetail({ item }) {
    const [isReadyToBuy, setIsReadyToBuy] = useState(false);
    const { addItem } = useCartContext();

    function onAdd(quantity) {
        setIsReadyToBuy(true);
        addItem(item, quantity);
    }

    return (
        <>
            <div className="container-fluid d-flex gap-5">
                <div className="text-end shadow">
                    <img src={item.pictureUrl} alt={item.title} />
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <p align="justify">{item.description}</p>

                    <div className="row pt-3">
                        <div className="col-4">
                            <p className="text-white fs-4"><span className="background-color-primary p-2 rounded-3">${item.price}</span></p>
                        </div>
                        <div className="col-8 d-flex flex-column gap-2">
                            { isReadyToBuy ?
                                <Link to="/cart">
                                    <button className="btn btn-primary background-color-primary w-100">Terminar compra</button>
                                </Link> 
                            :
                                <ItemCount stock={item.stock} initial="1" onAdd={ onAdd } hasAddToCartButton={ true }/> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;