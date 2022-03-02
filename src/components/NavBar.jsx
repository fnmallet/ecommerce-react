import CartWidget from './CartWidget'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid">
                    <div className="col-2">
                        <a className="navbar-brand" href="#">
                                <img src="/assets/logos/logo.png" alt="logo" width="200" height="40" className="d-inline-block align-text-top" />
                        </a>
                    </div>
                    <div className="col-8">
                        <div className="collapse navbar-collapse justify-content-center" >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="#">Almacenamiento</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Fuentes</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Gabinetes</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Memorias</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Placas de Video</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Procesadores</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end gap-2">
                        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>);
}

export default NavBar;