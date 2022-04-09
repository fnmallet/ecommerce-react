import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

function NavBar() {
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        let queryCollectionCategories = collection(db, 'categories');
        queryCollectionCategories = query(queryCollectionCategories, orderBy('category'));
        getFromDatabase(queryCollectionCategories, setCategories, setIsCategoriesLoaded);
        
    }, []);

    function getFromDatabase(query, setItems, setLoaded) {
        getDocs(query)
            .then(response => setItems( response.docs.map(item => ( {id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(()=> {
                setLoaded(true);
            });
    }


    return (
        <nav className="navbar navbar-expand-xl navbar-light background-color-primary pt-3 pb-3">
            <div className="collapse navbar-collapse justify-content-center" >
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                    { !isCategoriesLoaded ? 
                            <></>
                        :
                            categories.map((categoryItem) =>
                                <li className="nav-item" key={ categoryItem.id }>
                                    <NavLink to={`category/${categoryItem.category}`} className={"nav-link text-white text-capitalize"} activeClassName="active">
                                        {
                                            categoryItem.categoryCorrection ?   
                                                categoryItem.categoryCorrection
                                                :
                                                categoryItem.category
                                        }
                                    </NavLink>
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