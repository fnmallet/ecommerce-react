import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [isProductsLoaded, setIsProductsLoaded] = useState(false);

    useEffect(() => {
        setIsProductsLoaded(false);
        const db = getFirestore();
        let queryCollectionProducts = collection(db, 'products');
        queryCollectionProducts = query(queryCollectionProducts, where("stock", ">", 0));
        if(category)
            queryCollectionProducts = query(queryCollectionProducts, where("category", "==", category));
        getFromDatabase(queryCollectionProducts, setProducts, setIsProductsLoaded);
    }, [category]);

    function getFromDatabase(query, setItems, setLoaded) {
        getDocs(query)
            .then(response => setItems( response.docs.map(item => ( {id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(()=> setLoaded(true));
    }

    return (
        <>
            { 
                (isProductsLoaded) ?
                    <div className="container mt-5 mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <ItemList items={ products } />
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