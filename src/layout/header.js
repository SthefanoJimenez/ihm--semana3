import { Link } from "react-router-dom";

const Header = () => {
    return <header>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">TecnoCel</Link>
                <img src="https://i.imgur.com/1NFiGlf.jpg" alt="Logo" width="90" height="80" className="d-inline-block" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>;
}

export default Header;