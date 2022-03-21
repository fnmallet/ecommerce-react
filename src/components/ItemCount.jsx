import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [amount, setAmount] = useState(parseInt(initial));

    function add() {
        if(amount < stock) {
            setAmount(amount + 1);
        };
    };

    function subtract() {
        if(amount > 1) {
            setAmount(amount - 1);
        };
    };

    function addToCart() {
        onAdd(amount);
    }

    return (
        <div>
            <div className="d-flex">
                <button type="button" className="btn text-color-primary bg-light p-0 m-2" onClick={ subtract }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
                <div className="text-center fs-6 d-flex align-items-center">{ amount }</div>
                <button type="button" className="btn text-color-primary bg-light p-0 m-2" onClick={ add }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                <button type="button" className="btn btn-outline-primary w-100" onClick={ addToCart }>Agregar al carrito</button>
            </div>  
        </div>
    );
}

export default ItemCount;