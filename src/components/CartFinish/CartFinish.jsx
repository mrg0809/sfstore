import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

function CartFinish() {

    const {cartList, totalCart} = useCartContext()

    const generateOrder = async (e) => {
        e.preventDefault();
        console.log("Orden generada")

        let order = {}

        order.buyer = formData
        order.total = totalCart()
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.cantidad

            return(id, name, price)
        })

    }

    const {formData, setFormData} = useState({
        name: '',
        lastname: '',
        email: ''
    })

    const handleChange=(event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form
                onSubmit={generateOrder}
            >
                <input name='name' type="text" placeholder="Nombre" onChange={handleChange} value={formData.name} />
                <input name='lastname' type="text" placeholder="Apellido" onChange={handleChange} value={formData.lastname} />
                <input name='email' type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                <button className="button is-danger is-large">Finalizar</button>
            </form>
        </div>
)
}

export default CartFinish