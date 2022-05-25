import { Link } from 'react-router-dom';

function InputCount() {
    return (
        <>
            <Link to="/">
                <button>Continuar comprando</button>
            </Link>

            <Link to="/cart">
                <button>Ir a carrito</button>
            </Link>
        </>
    )
}
export default InputCount;