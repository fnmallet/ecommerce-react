import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-xl navbar-light background-color-primary pt-3 pb-3">
            <div className="collapse navbar-collapse justify-content-center" >
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                    <li className="nav-item"><a className="nav-link text-white" href="/index.html">Almacenamiento</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="/index.html">Fuentes</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="/index.html">Gabinetes</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="/index.html">Memorias</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="/index.html">Placas de Video</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="/index.html">Procesadores</a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>);
};

export default NavBar;