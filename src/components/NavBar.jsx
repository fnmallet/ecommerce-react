import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const categoriesUrl = "/assets/json/categories.json"

const getCategories = () => {
    return fetch(categoriesUrl);
}

function NavBar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
            getCategories()
                .then((response) => { return response.json() })
                .then((data) => { setTimeout(() => setCategories(data), 100) })
                .catch(error => console.log(error));
        }, []);

    return (
        <nav className="navbar navbar-expand-xl navbar-light background-color-primary pt-3 pb-3">
            <div className="collapse navbar-collapse justify-content-center" >
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                    { categories.map((category) =>
                        <li className="nav-item" key={ category.categoryId }>
                            <Link to={`category/${category.categoryId}`} className="nav-link text-white text-capitalize">
                                {category.categoryId}
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