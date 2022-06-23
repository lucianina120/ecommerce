import { useState } from "react";

import { useCartContext } from "../../context/CartContext";

import "./FormCart.css";

function FormCart() {
    const [data, setData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const { createOrder } = useCartContext();

    function handleInputChange(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(!data.name);
        setPhoneError(!data.phone);
        setEmailError(!data.email);
        if (data.name && data.phone && data.email) {
            createOrder(data);
        }
    };

    return (
        <div id="form-container">
            <h1>Datos del comprador</h1>
            <div className="underline"></div>
            <form action="#" id="contact_form">
                <div className="name">
                    {nameError && (
                        <span className="form-error">
                            Debe ingresar un nombre
                        </span>
                    )}
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        placeholder="Mi nombre es"
                        name="name"
                        id="name_input"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="email">
                    {phoneError && (
                        <span className="form-error">
                            Debe ingresar un teléfono
                        </span>
                    )}
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        placeholder="Mi e-mail es"
                        name="email"
                        id="email_input"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="phone">
                    {emailError && (
                        <span className="form-error">
                            Debe ingresar un correo electrónico
                        </span>
                    )}
                    <label htmlFor="phone"></label>
                    <input
                        type="text"
                        placeholder="Mi telefono es"
                        name="phone"
                        id="phone_input"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="submit">
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        value="Realizar compra"
                        id="form_button"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormCart;
