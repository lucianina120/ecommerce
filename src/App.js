import "./App.css";
import Navbar from "./components/NabBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
    let welcome = "Bienvenidx a mi tiendita <3";
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting={welcome} />            
        </div>
    );
}

export default App;
