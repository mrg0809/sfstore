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
        <div class="has-addons is-centered">
            <div class="buttons has-addons is-centered">
                <button class="button" onClick={()=>removeItem()} disabled={count<2 ? true:false}>-</button>
                <button class="button is-info is-selected">{count}</button>
                <button class="button" onClick={()=>addItem()} disabled={count===stock ? true:false}>+</button>
            </div>
            
            <button class="button is-success" onClick={agregar}>Agregar</button>
        </div>
        
       

)
}

export default ItemCount;