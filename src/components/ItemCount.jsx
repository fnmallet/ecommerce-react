import { useState, useEffect } from "react";

function ItemCount({ id, stock, initial, onAdd }) {
    const [amount, setAmount] = useState(initial);

    function add() {
        if(!(amount === stock)) {
            setAmount(amount + 1);
        };
    };

    function remove() {
        if(!(amount === 1)) {
            console.log(amount) // si amount vale n muestra que amount vale n
            setAmount(amount - 1);
            console.log("B: " + amount) // a pesar de que antes se llamó a setAmount, en vez de mostrar que amount vale n-1, muestra que vale n !!!
        };
    };

    useEffect(() => {
        document.getElementById("inputAmount-" + id).value = amount;
    })


    return (
        <div>
            <div className="d-flex">
                <button type="button" className="btn text-color-primary bg-light p-0 m-2" onClick={ remove }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
                <input id={ "inputAmount-" + id } type="text" className="text-center fs-6" defaultValue={ amount } />
                <button type="button" className="btn text-color-primary bg-light p-0 m-2" onClick={ (e) => add(e) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </div>
            <div className="text-center pt-2">
                <button type="button" className="btn btn-outline-primary w-100" onClick={ onAdd }>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;