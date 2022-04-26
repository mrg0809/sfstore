import { useState } from "react";

const FillData = () => {

    const {formData, setFormData} = useState({
        name:'',
        lastname:'',
        email:''
    })

    const handleChange=(event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }
    return (
        <>
            <form>
                <input name="name" type="text" placeholder="Nombre" value={formData.name} onChange={handleChange}/>
                <input name="lastname" type="text" placeholder="Apellido" value={formData.lastname} onChange={handleChange}/>
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            </form>
        </>
)
}

const ButtonData = ({handleInter})=> {
    return <button
                className="button is-success is-large"
                onClick={handleInter}
            >Finalizar orden</button>
}

const CartForm = () => {
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
                    <FillData />
            }
        </div>
    )
}

export default CartForm;