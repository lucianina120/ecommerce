import { Link } from "react-router-dom";
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
                    <Item name={"inicio"} />
                    <Item name={"remeras"} />
                    <Item name={"blusas"} />
                </ul>
            </div>
            <CartWidget />
        </header>
    );
}

export default Navbar;
