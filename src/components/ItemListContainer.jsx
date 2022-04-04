import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useProductsContext } from "./ProductsContext";

function ItemListContainer() {
    const { category } = useParams();
    const { products, isProductsLoaded, isCategoriesLoaded } = useProductsContext();

    return (
        <>
            { 
                (isProductsLoaded && isCategoriesLoaded) ?
                    <div className="container mt-5 mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <ItemList items={ category ? products.filter(product => product.category === category ) : products } key={category} />
                        </div>
                    </div> :
                    <div className="d-flex justify-content-center">
                        <Loader /> 
                    </div>
            }
        </>
    );
};

export default ItemListContainer;