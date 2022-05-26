import ItemCount from '../ItemCount/ItemCount';
import InputCount from '../InputCount/InputCount';
import { useState } from 'react';

const Exchance = ({item}) => {

    const [count, setCount] = useState(true);
    
    function countModified() {
        setCount(false)
    }

    return(
        <>  
            {
                count === true ?
                    <ItemCount product={item} countModified={countModified}/>
                :
                    <InputCount />
            }
        </>
    )
}

export default Exchance