import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(product, quantity) {
        if(isInCart(product.id)) {
            removeItem(product.id);  
        };
        setItems([...items, {product: product, quantity: quantity}]);
    };

    function removeItem(productId) {
        items.splice(items.indexOf((item) => item.product.id === productId), 1)
    }

    function clear() {
        setItems([]);
    }

    function isInCart(productId) {
        return items.find(item => item.product.id === productId) ? true : false;
    }

    useEffect(() => {
        console.log(items)
    })

    return (
        <CartContext.Provider value={{addItem}}>{children}</CartContext.Provider>
    );
};