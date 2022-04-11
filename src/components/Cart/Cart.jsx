import { useCartContext } from "../../context/cartContext";

function Cart() {

    const {cartList} = useCartContext()
    return (
        <div>
            {cartList.map(prod => <li key={prod.id} > nombre: {prod.modelo} cantidad: {prod.cantidad}</li>)}
        </div>
      );
    };


export default Cart;