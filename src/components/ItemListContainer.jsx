import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

const productsUrl = "/assets/json/products.json";

const getItems = () => {
    return fetch(productsUrl);
};

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isItemsLoaded, setIsItemsLoaded] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
            getItems()
                .then((response) => { return response.json() })
                .then((data) => {
                    setTimeout(() => { setItems(data); setIsItemsLoaded(true); }, 2000);
            }).catch(error => console.log(error));
        }, []);

    return (
        <>
            { 
                isItemsLoaded ?
                    <div className="container mt-5 mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <ItemList items={ categoryId ? items.filter(item => item.category === categoryId ) : items } key={categoryId} />
                        </div>
                    </div> :
                    <div className="d-flex justify-content-center">
                        <Loader /> 
                    </div>
            }
        </>
    );
};

export default ItemListContainer;