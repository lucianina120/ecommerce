import { Link } from 'react-router-dom';

function InputCount() {
    return (
        <>
            <Link to="/">
                <button className='btn'>Continuar comprando</button>
            </Link>

            <Link to="/cart">
                <button className='btn'>Ir a carrito</button>
            </Link>
        </>
    )
}
export default InputCount;