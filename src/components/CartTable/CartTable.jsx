import { useCartContext } from "../../context/cartContext";


function CartTable() {

    const {cartList, removeCart, totalCart, removeItem, itemQty} = useCartContext()
    return (
        <table className="table is-hoverable is-fullwidht mx-auto">
            <thead>
                <tr>
                    <th></th>
                    <th>MODELO</th>
                    <th>PRECIO</th>
                    <th>TALLAS/CANT</th>
                    <th>PIEZAS</th>
                    <th>$</th>
                </tr>
            </thead>
            <tfoot>
                <th>Articulos:</th>
                <th>{cartList.length}</th>
                <th>Total Piezas:</th>
                <th>{itemQty()}</th>
                <th>Gran Total: </th>
                <th>${totalCart()}</th>
                <th></th>
                <th><button className="button is-danger" onClick={()=>removeCart()}>Eliminar carro</button></th>
            </tfoot>
            

                {cartList.map(prod => (
                <tbody key={prod.id}>
                    <tr>
                        <td> <figure className="image is-64x64"><img src={prod.foto} alt={prod.modelo}/></figure> </td>
                        <td> {prod.modelo} </td>
                        <td> ${prod.precio} </td>
                        <td> <table className="table is-striped is-bordered">
                                <thead><th>{prod.talla}</th></thead>
                                <tbody><td>{prod.cantidad}</td></tbody>
                            </table>
                        </td>
                        <td>{prod.cantidad}</td>
                        <td>${prod.precio*prod.cantidad}</td>
                        <td><button className="button is-info">Modificar</button></td>
                        <td><button className="button is-danger" onClick={()=>removeItem(prod.modelo)}>Eliminar</button></td>
                    </tr> 
                </tbody>
            ))}
        </table>
      );
    };


export default CartTable;