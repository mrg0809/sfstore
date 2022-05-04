import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({producto}) {

    const {addToCart, cartList} = useCartContext()


    function onAdd(cant) {
        addToCart( { ...producto, cantidad:cant})
    }

    return (
        
        <div className="columns is-vcentered">
                   
            <div className="column is-two-fifths mx-5">
                <img src={producto.foto} alt={producto.name} />
                
            </div>         
            
            <div className="column mx-5 px-6">

                    <article className="message is-large is-dark mx-5">
                        <div className="message-header">
                            <p>{producto.modelo}</p>
                            <p className="success" aria-label="delete">${producto.precio}</p>
                        </div>
                        
                        <div className="message-body has-text-left">
                            <p>Nombre: {producto.descripcion}</p>
                            <p>Marca: {producto.marca}</p>
                            <p>Familia: {producto.familia}</p>
                            <p>Subfamilia: {producto.subfamilia}</p>
                            <p>Categoría: {producto.categoria}</p>
                            <p>Subcategoria: {producto.subcategoria}</p>
                        </div>
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    </article>      
            </div>
            
        </div>
    )
}
export default ItemDetail