import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
        ])
    }

    const removeCart = () => {
        setCartList([])
    }

    const itemQty = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad, 0)
    }

    const totalCart = cartList.reduce((a, b) => a+b, 0)

    const removeItem = (modelo)=> {
        setCartList(cartList.filter(prod => prod.modelo !== modelo))
    }
    

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            totalCart,
            removeItem,
            itemQty
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider