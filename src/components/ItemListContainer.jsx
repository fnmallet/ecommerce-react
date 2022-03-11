import ProductCard from "./ProductCard.jsx";

function ItemListContainer() {  
    const products = [
        { id: 0, name: "product 1", price: 100, stock: 5 },
        { id: 1, name: "product 2", price: 200, stock: 4 },
        { id: 2, name: "product 2", price: 500, stock: 2 },
        { id: 3, name: "product 3", price: 300, stock: 1 }
    ]

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <ProductCard id={ products[0].id } name={ products[0].name } price={ products[0].price } stock={ products[0].stock } />
                <ProductCard id={ products[1].id } name={ products[1].name } price={ products[1].price } stock={ products[1].stock } />
                <ProductCard id={ products[2].id } name={ products[2].name } price={ products[2].price } stock={ products[2].stock } />
                <ProductCard id={ products[3].id } name={ products[3].name } price={ products[3].price } stock={ products[3].stock } />
            </div>
        </div>
    );
};

export default ItemListContainer;