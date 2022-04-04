import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useProductsContext } from "./ProductsContext";

function ItemDetailContainer() {
    const { id } = useParams();
    const { products, isProductsLoaded } = useProductsContext();

    return (
        <>
            { 
                isProductsLoaded ?
                        <div className="container mt-5 mb-5 w-75">
                            <ItemDetail item={products.find(item => item.id === id)} />
                        </div>
                    :
                        <div className="d-flex justify-content-center">
                            <Loader /> 
                        </div>
            }
        </>
    );
};

export default ItemDetailContainer;