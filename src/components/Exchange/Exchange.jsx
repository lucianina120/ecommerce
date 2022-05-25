import ItemCount from '../ItemCount/ItemCount';
import InputCount from '../InputCount/InputCount';
import { useState } from 'react';

function Exchance(product) {
    let products = product.children;
    const [count, setCount] = useState(true);
    
    function countModified() {
        setCount(false)
    }

    return(
        <>  
            {
                count === true ?
                    <ItemCount products={products} countModified={countModified}/>
                :
                    <InputCount />
            }
        </>
    )
}

export default Exchance