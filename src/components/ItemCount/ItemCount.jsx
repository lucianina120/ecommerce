import "./ItemCount.css"
import { useState } from "react"

function ItemCount({ stock, initial, onAdd }){
  console.log(initial)
    const [count, setCount]  = useState(initial)

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

    function addToCart(){
      onAdd(count)
    }


    return(
          <div className="card-count">
            <div className="count">
              <button className="btn-count"  onClick={contadorResta}>-</button>
              <span>{count}</span> 
              <button className="btn-count" onClick={contadorSuma}>+</button>
            </div>
            <button className="btn-add fluid mt-1" onClick={addToCart}>Agregar al carrito</button>
          </div>
        
    )
}

export default ItemCount;