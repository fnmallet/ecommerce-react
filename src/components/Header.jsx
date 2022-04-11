import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container-fluid text-center pt-4 pb-4">
                <Link to="/" tabIndex="-1">
                    <img src="/assets/logos/logo.png" alt="logo" className="d-inline-block align-text-top" />
                </Link>
            </div>
        </header>);
};

export default Header;