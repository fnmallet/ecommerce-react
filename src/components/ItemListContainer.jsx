import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import Loader from "./Loader";

const items = [
    { id: 0, title: "product 1", price: 100, description:"Descripción del producto", stock: 5, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" },
    { id: 1, title: "product 2", price: 200, description:"Descripción del producto", stock: 4, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" },
    { id: 2, title: "product 2", price: 500, description:"Descripción del producto", stock: 2, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" },
    { id: 3, title: "product 3", price: 300, description:"Descripción del producto", stock: 1, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" }
]

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(items)
                resolve(items);
            else
                reject("error al obtener los productos");
        }, 2000);
    });
}

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isItemsLoaded, setIsItemsLoaded] = useState(false);

    useEffect(() => {
            getItems().then((response) => {
                setItems(response);
                setIsItemsLoaded(true);
            }).catch(error => console.log(error));
        }
    );

    return (
        <>
            { 
                !isItemsLoaded && 
                    <div className="d-flex justify-content-center">
                        <Loader /> 
                    </div>
            }
            {
                isItemsLoaded &&
                    <div className="container mt-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <ItemList items={items} />
                        </div>
                        <ItemDetailContainer />
                    </div>
            }
        </>
    );
};

export default ItemListContainer;