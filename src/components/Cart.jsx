import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";

function Cart() {
    const { cartList, removeItem, getTotalPrice, clearCart, getSubtotalPrice } = useCartContext();

    return(
        <>
            {
                cartList.length > 0 ?
                    <div className="container mt-5 mb-5 w-50 d-flex flex-column gap-3">
                        <div className="row cartProductRowHeader">
                            <div className="col-2">
                            </div>
                            <div className="col d-flex align-items-center fw-bold">
                                Producto
                            </div>
                            <div className="col-1 d-flex align-items-center fw-bold justify-content-center">
                                Cantidad
                            </div>
                            <div className="col-2 d-flex align-items-center fw-bold justify-content-center">
                                Precio
                            </div>
                            <div className="col-1 d-flex align-items-center">
                            </div>
                        </div>
                        { cartList.map((item) => {
                            return <div className="row cartProductRow" key={item.product.id}>
                                <div className="col-2">
                                    <img className="img-fluid" src={item.product.pictureUrl} alt={item.product.title} />
                                </div>
                                <div className="col d-flex align-items-center fw-bold">
                                    {item.product.title}
                                </div>
                                <div className="col-1 d-flex align-items-center fw-bold justify-content-center">
                                    <ItemCount stock={item.product.stock} initial={item.quantity} hasAddToCartButton={ false } item={item}/>
                                </div>
                                <div className="col-2 d-flex align-items-center fw-bold justify-content-center">
                                    ${getSubtotalPrice(item)}
                                </div>
                                <div className="col-1 d-flex align-items-center">
                                    <button className="btn" onClick={() => {removeItem(item.product.id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            }
                        )}
                        <div className="row fs-4">
                            <div className="col-2">
                            </div>
                            <div className="col d-flex align-items-center fw-bold justify-content-end pe-5">
                                Total: 
                            </div>
                            <div className="col-2 d-flex align-items-center fw-bold justify-content-center">
                                ${getTotalPrice()}
                            </div>
                            <div className="col-1 d-flex align-items-center">
                            </div>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/cart" className="d-inline-flex btn btn-primary background-color-primary mt-5 p-3" onClick={clearCart} tabindex="1">
                                Vaciar carrito
                            </Link>
                            <Link to="/form" className="d-inline-flex btn btn-primary background-color-primary mt-5 p-3" tabindex="2">
                                Finalizar Compra
                            </Link>
                        </div>
                    </div> :
                    <div className="d-flex flex-column text-center">
                        <h2 className="fs-1 pt-5">No hay productos en el carrito</h2>
                        <Link to="/">
                            <button className="btn btn-primary background-color-primary mt-5 p-3">Ir a la tienda</button>
                        </Link>
                    </div>
            }
        </>
    );
};

export default Cart;