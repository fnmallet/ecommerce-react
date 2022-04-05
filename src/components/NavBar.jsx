import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function NavBar() {
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const queryCollectionCategories = collection(db, 'categories');
        getFromDatabase(queryCollectionCategories, setCategories, setIsCategoriesLoaded);
    }, []);

    function getFromDatabase(query, setItems, setLoaded) {
        getDocs(query)
            .then(response => setItems( response.docs.map(item => ( {id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(()=> setLoaded(true));
    }

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