import ItemCount from "./ItemCount";

function ProductCard({ id, name, price, stock }) {
    const initialAmount = 1;

    function addToCart(e) {
        alert("se agregó al carrito!");
    };

    return (
        <div className="col">
            <div className="card h-100 mx-auto">
                <img src="http://placehold.jp/0466c8/ffffff/300x300.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{ name }</h5>
                    <h5 className="card-title text-center">{ "$ " + price }</h5>
                    <h5 className="card-title text-center">{ "Stock: " + stock }</h5>
                    <ItemCount id={ id } stock={ stock } initial= { initialAmount } onAdd={ addToCart } />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
