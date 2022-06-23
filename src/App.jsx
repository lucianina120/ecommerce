import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/NabBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import CartContextProvider from "./context/CartContext";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
        <CartContextProvider>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<ItemListContainer/>}
                    />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
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
