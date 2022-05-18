import Item from "./Components/Item";
import "./Components/Item";
import "./NavBar.css";
import CartWidget from "./Components/CartWidget";

function Navbar() {
    return (
        <header>
            <div className="brand">TiendaRopa</div>
            <div className="collapse-menu">{/*Usar a futuro*/}
                <ul className="navbar-menu">
                    <Item name={"inicio"} />
                    <Item name={"promociones"} />
                    <Item name={"blusas"} />
                    <Item name={"buzos"} />
                    <Item name={"pantalones"} />
                    <Item name={"accesorios"} />
                </ul>
            </div>
            <CartWidget />
        </header>
    );
}

export default Navbar;