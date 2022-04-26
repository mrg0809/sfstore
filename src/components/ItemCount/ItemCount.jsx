import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1);
    
    const addItem = ()=> {
        setCount(count + 1);
    }

    const removeItem = ()=> {
        setCount(count - 1);
    }

    const agregar = () => {
        onAdd(count)
    }

    return (
        <div className="has-addons is-centered">
            <div className="buttons has-addons is-centered">
                <button className="button" onClick={()=>removeItem()} disabled={count<2 ? true:false}>-</button>
                <button className="button is-info is-selected">{count}</button>
                <button className="button" onClick={()=>addItem()} disabled={count===stock ? true:false}>+</button>
            </div>
            
            <button className="button is-success" onClick={agregar}>Agregar</button>
        </div>
        
       

)
}

export default ItemCount;