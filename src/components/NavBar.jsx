import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { useProductsContext } from './ProductsContext';

function NavBar() {
    const { categories, isCategoriesLoaded } = useProductsContext();

    return (
        <nav className="navbar navbar-expand-xl navbar-light background-color-primary pt-3 pb-3">
            <div className="collapse navbar-collapse justify-content-center" >
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                    { !isCategoriesLoaded ? 
                            <></>
                        :
                            categories.map((category) =>
                                <li className="nav-item" key={ category.id }>
                                    <Link to={`category/${category.category}`} className="nav-link text-white text-capitalize">
                                        {category.category}
                                    </Link>
                                </li>)
                    }
                </ul>
            </div>
            <Link to="/cart" className='cartWidgetLink'>
                <CartWidget />
            </Link>
        </nav>);
};

export default NavBar;