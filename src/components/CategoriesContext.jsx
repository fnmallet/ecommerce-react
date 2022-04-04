import { createContext, useState, useContext, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

export function CategoriesContextProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const queryCollectionCategories = collection(db, 'categories');
        getFromDatabase(queryCollectionCategories, setCategories, setIsCategoriesLoaded);
    }, []);

    function getFromDatabase(query, setItems, setLoaded) {
        getDocs(query)
            .then(response => setItems( response.docs.map(item => ( {id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(()=> setLoaded(true));
    }

    return (
        <CategoriesContext.Provider value={{ categories, isCategoriesLoaded }}>{children}</CategoriesContext.Provider>
    );
};