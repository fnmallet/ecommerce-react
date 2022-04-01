import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    function addItem(product, quantity) {
        if(isInCart(product.id)) {
            const items = cartList.slice();
            for(const item of items) { 
                if(item.product.id === product.id){
                    item.quantity += quantity;
                    break;
                }
            };
            setCartList(items);
        } else {
            setCartList([...cartList, {product: product, quantity: quantity}]);
        }
    };

    function removeItem(productId) {
        let newCartList = cartList.slice()
        newCartList.splice(cartList.findIndex((item) => item.product.id === productId), 1 );
        setCartList(newCartList);
    }

    function clear() {
        setCartList([]);
    }

    function isInCart(productId) {
        return cartList.find(item => item.product.id === productId) ? true : false;
    }

    return (
        <CartContext.Provider value={{addItem, cartList, removeItem}}>{children}</CartContext.Provider>
    );
};