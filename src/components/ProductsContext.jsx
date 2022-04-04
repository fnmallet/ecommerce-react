import { createContext, useState, useContext, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export function ProductsContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
    const [isProductsLoaded, setIsProductsLoaded] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const queryCollectionProducts = collection(db, 'products');
        const queryCollectionCategories = collection(db, 'categories');

        getDocs(queryCollectionProducts)
            .then(response => setProducts( response.docs.map(product => ( {id: product.id, ...product.data()}))))
            .catch(error => console.log(error))
            .finally(()=> setIsProductsLoaded(true));

        getDocs(queryCollectionCategories)
            .then(response => setCategories( response.docs.map(category => ( {id: category.id, ...category.data()}))))
            .catch(error => console.log(error))
            .finally(()=> setIsCategoriesLoaded(true));
    }, []);

    return (
        <ProductsContext.Provider value={{ products, isProductsLoaded, categories, isCategoriesLoaded }}>{children}</ProductsContext.Provider>
    );
};