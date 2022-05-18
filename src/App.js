import "./App.css";
import Navbar from "./components/NabBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
    let welcome = "Bienvenidx a mi tiendita <3";
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting={welcome} />            
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
