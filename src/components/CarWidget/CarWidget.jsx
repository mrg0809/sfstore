import { useCartContext } from "../../context/CartContext";

function CarWidget() {

    const {itemQty} = useCartContext()
    return (
        <>
        <img src="https://w7.pngwing.com/pngs/462/263/png-transparent-shopping-cart-computer-icons-icon-design-shopping-cart.png" alt="carrito"></img>
        { itemQty() !== 0 && <span className="tag is-danger">{itemQty()}</span>}
        </>
)
}

export default CarWidget;