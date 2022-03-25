import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(product, quantity) {
        let itemsAfterRemove = items.slice();

        function removeItem(productId) {
            itemsAfterRemove.splice(items.findIndex((item) => item.product.id === productId), 1);
        }

        if(isInCart(product.id)) {
            removeItem(product.id);
        };
        setItems([...itemsAfterRemove, {product: product, quantity: quantity}]);
    };

    function clear() {
        setItems([]);
    }

    function isInCart(productId) {
        return items.find(item => item.product.id === productId) ? true : false;
    }

    console.log(items)
    return (
        <CartContext.Provider value={{addItem}}>{children}</CartContext.Provider>
    );
};