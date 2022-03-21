import ItemCount from "./ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
    const [isReadyToBuy, setIsReadyToBuy] = useState(false);
    const [quantity, setQuantity] = useState(false);

    function onAdd(quantityToAdd) {
        setQuantity(quantity);
        setIsReadyToBuy(true);
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
                            { isReadyToBuy ? <Link to="/cart"><button className="btn btn-primary w-100">Terminar compra</button></Link> : <ItemCount stock={item.stock} initial="1" onAdd={ onAdd }/> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;