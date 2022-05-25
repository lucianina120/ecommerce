import { Link, NavLink } from "react-router-dom";
import Item from "./Components/Item";
import CartWidget from "./Components/CartWidget";
import "./NavBar.css";

function Navbar() {
    return (
        <header>
            <Link to="/">
                <div className="brand">TiendaRopa</div>
            </Link>
            <div className="collapse-menu">
                <ul className="navbar-menu">
                    <NavLink to="/">
                        <Item name={"inicio"} />
                    </NavLink>
                    <NavLink to="/category/remeras">
                        <Item name={"remeras"} />
                    </NavLink>
                    <NavLink to="/category/blusas">
                        <Item name={"blusas"} />
                    </NavLink>
                </ul>
            </div>
            <CartWidget />
        </header>
    );
}

export default Navbar;
