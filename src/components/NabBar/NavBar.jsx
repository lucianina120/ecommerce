import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <div className="brand">TiendaRopa</div>
            </Link>
            <div className="collapse-menu">
                <ul className="navbar-menu">
                    <NavLink to="/">
                        <li className="item">{"inicio"}</li>
                    </NavLink>
                    <NavLink to="/category/blusas">
                        <li className="item">{"Blusas"}</li>
                    </NavLink>
                    <NavLink to="/category/abrigos">
                        <li className="item">{"abrigos"}</li>
                    </NavLink>
                    <NavLink to="/category/pantalones">
                        <li className="item">{"pantalones"}</li>
                    </NavLink>
                </ul>
            </div>
            <CartWidget />
        </header>
    );
}

export default Navbar;
