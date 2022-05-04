import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartForm from "../CartForm/CartForm";
import CartTable from "../CartTable/CartTable";

function Cart() {
    const {cartList} = useCartContext()

    return (
        <div>
            {
                cartList.length === 0 ?
                    <div>
                    <h1 className="title is-1 has-text-info">Tu carrito esta vacio</h1>
                    <hr />
                    <Link to="/">
                    <button className="button is-danger is-large">Ir a Comprar</button>
                    </Link>
                    </div>
                :   
                    <div> 
                        <CartTable />
                        <CartForm />
                    </div>
            }
        </div>

      );
    };


export default Cart;