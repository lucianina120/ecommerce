//estilo
import "./App.css";

//librerias importadas
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//componentes importados
import Navbar from "./components/NabBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

//contextos
import CartContextProvider from "./context/CartContext";

function App() {
    let welcome = "Bienvenidx a mi tiendita <3";

    return (
        <BrowserRouter>
        <CartContextProvider>
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
            </CartContextProvider>
        </BrowserRouter>
    );
}
export default App;
