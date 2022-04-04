import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
    const { id } = useParams();
    const [isProductLoaded, setIsProductLoaded] = useState(false);
    const [product, setProduct] = useState();

    useEffect(() => {
        setIsProductLoaded(false);
        const db = getFirestore();
        const productDoc = doc(db, 'products', id);
        getFromDatabase(productDoc, setProduct, setIsProductLoaded);
    }, [id]);

    function getFromDatabase(doc, setItems, setLoaded) {
        getDoc(doc)
            .then(response => setItems({id: response.id, ...response.data()}))
            .catch(error => console.log(error))
            .finally(()=> setLoaded(true));
    }

    return (
        <>
            { 
                isProductLoaded ?
                        <div className="container mt-5 mb-5 w-75">
                            <ItemDetail item={ product } />
                        </div>
                    :
                        <div className="d-flex justify-content-center">
                            <Loader /> 
                        </div>
            }
        </>
    );
};

export default ItemDetailContainer;