import Item from "./Components/Item";
import "./Components/Item";
import "./NavBar.css";
import CartWidget from "./Components/CartWidget";

function Navbar() {
    return (
        <header>
            <div className="logo">ComidaRapida</div>
            <div className="collapse-menu">{/*Usar a futuro*/}
                <ul className="navbar-menu">
                    <Item name={"inicio"} />
                    <Item name={"promociones"} />
                    <Item name={"menu"} />
                    <Item name={"postres"} />
                    <Item name={"bebidas"} />
                    <Item name={"contacto"} />
                </ul>
            </div>
            <CartWidget />
        </header>
    );
}

export default Navbar;