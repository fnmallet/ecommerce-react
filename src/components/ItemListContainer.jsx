import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const products = [
    { id: 0, title: "product 1", price: 100, stock: 5, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" },
    { id: 1, title: "product 2", price: 200, stock: 4, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" },
    { id: 2, title: "product 2", price: 500, stock: 2, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" },
    { id: 3, title: "product 3", price: 300, stock: 1, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" }
]

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(products)
            resolve(products);
        else
            reject("error al obtener los productos");
    }, 2000);
});

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            promise.then((response) => {
                setProducts(response)
            }).catch(error => console.log(error));
        }
    );

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <ItemList items={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;