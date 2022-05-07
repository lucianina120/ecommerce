import "./ItemCount.css"
import { useState } from "react"

function ItemCount({stock}){

    const [count, setCount]  = useState(1)

    function contadorSuma() {
      if(count < stock){
        setCount(count + 1)
      }
    }

    function contadorResta() {
      if (count > 1){
        setCount(count - 1)
      }
    }

    return(
        <div className="count">
            <button className="btn-count"  onClick={contadorResta}>-</button>
            <span>{count}</span> 
            <button className="btn-count" onClick={contadorSuma}>+</button>
        </div>
    )
}

export default ItemCount;