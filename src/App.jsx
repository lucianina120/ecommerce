import "./App.css";

//librerias importadas
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//componentes importados
import Navbar from "./components/NabBar/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
    let welcome = "Bienvenidx a mi tiendita <3";

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<ItemListContainer greeting={welcome} />}
                    />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer greeting={welcome} />}
                    />
                    <Route
                        path="/detail/:detailId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
