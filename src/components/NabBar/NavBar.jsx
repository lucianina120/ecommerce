import Item from "./Components/Item";
import "./Components/Item";
import "./NavBar.css";

export default function Navbar() {
    return (
        <header>
            <div className="logo">ComidaRapida</div>
            <div className="collapse-menu"> {/*Usar a futuro*/}
                <ul className="navbar-menu">
                    <Item name={"inicio"} />
                    <Item name={"promociones"} />
                    <Item name={"menu"} />
                    <Item name={"postres"} />
                    <Item name={"bebidas"} />
                    <Item name={"contacto"} />
                    <Item name={"inicio"} />
                </ul>
            </div>
            <div className="login"><i class="bi bi-person-fill"></i></div>
        </header>
    );
}
