import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);
    const [totalProductsInCart, setTotalProductsInCart] = useState(0);

    function addItem(product, quantity) {
        if(isInCart(product.id)) {
            const items = cartList.slice();
            for(const item of items) { 
                if(item.product.id === product.id){
                    item.quantity += quantity;
                    setTotalProductsInCart(totalProductsInCart + 1);
                    break;
                }
            };
            setCartList(items);
        } else {
            setCartList([...cartList, {product: product, quantity: quantity}]);
            setTotalProductsInCart(totalProductsInCart + quantity);
        }
    };

    function removeItem(productId) {
        let newCartList = cartList.slice()
        newCartList.splice(cartList.findIndex((item) => item.product.id === productId), 1 );
        setTotalProductsInCart(totalProductsInCart - cartList.find(item => item.product.id === productId).quantity);
        setCartList(newCartList);
    }

    function clearCart() {
        setCartList([]);
        setTotalProductsInCart(0);
    }

    function isInCart(productId) {
        return cartList.some(item => item.product.id === productId);
    }

    function getTotalPrice() {
        return cartList.reduce((acc, current) => { return acc + current.quantity * current.product.price }, 0);
    }

    function setItemQuantity(item, quantity) {
        cartList.find(cartItem => cartItem.product.id === item.product.id).quantity = quantity;
    }

    function getSubtotalPrice(item) {
        return item.product.price * item.quantity;
    }

    function addNewProductToCart() {
        setTotalProductsInCart(totalProductsInCart + 1);
    }

    function removeProductFromCart() {
        setTotalProductsInCart(totalProductsInCart - 1);
    }

    return (
        <CartContext.Provider value={{addItem, cartList, removeItem, getTotalPrice, clearCart, totalProductsInCart, setItemQuantity, getSubtotalPrice, addNewProductToCart, removeProductFromCart}}>{children}</CartContext.Provider>
    );
};