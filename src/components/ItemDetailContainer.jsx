import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const productsUrl = "/assets/json/products.json";

const getItems = () => {
    return fetch(productsUrl);
};

function ItemDetailContainer() {
    const [items, setItems] = useState({});
    const [isItemLoaded, setIsItemsLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getItems()
            .then((response) => { return response.json() })
            .then((data) => {
                setTimeout(() => { setItems(data); setIsItemsLoaded(true); }, 500);
        }).catch(error => console.log(error));
    }, []);

    return (
        <>
                { 
                isItemLoaded ?
                    <div className="container mt-5 mb-5 w-75">
                        <ItemDetail item={items.find(item => item.id === parseInt(id))} />
                    </div> :
                    <div className="d-flex justify-content-center">
                        <Loader /> 
                    </div>
            }
        </>
    );
};

export default ItemDetailContainer;