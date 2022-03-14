import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const item = { id: 0, title: "product 1", price: 100, description:"Descripción del producto", stock: 5, pictureUrl:"http://placehold.jp/0466c8/ffffff/300x300.png" }

const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (item)
                resolve(item);
            else
                reject("error al obtener el producto");
        }, 2000);
    });
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem().then((response) => {
            setItem(response);
        }).catch(error => console.log(error));
    });

    return (
        <>
            <ItemDetail title={item.title} price={item.price} description={item.description} pictureUrl={item.pictureUrl} />
        </>
    );
};

export default ItemDetailContainer;