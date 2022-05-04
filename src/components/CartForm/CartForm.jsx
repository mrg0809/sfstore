import { useState } from "react";
import CartFinish from "../CartFinish/CartFinish";


function CartForm()  {
    const [inputType, setInputType] = useState('button')

    
    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
            {
                inputType === 'button' ?
                    <ButtonData handleInter={handleInter} />
                :
                    <CartFinish />
            }
        </div>
    )
}

const ButtonData = ({handleInter})=> {
    return <button
                className="button is-success is-large"
                onClick={handleInter}
            >Finalizar orden</button>
}







export default CartForm;