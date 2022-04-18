import { useCartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({producto}) {

    const {addToCart, cartList} = useCartContext()
    console.log(producto)

    function onAdd(cant) {
        console.log(cant)
        addToCart( { ...producto, cantidad:cant})
    }

    return (
        
        <div class="columns is-vcentered">
                   
            <div class="column is-two-fifths mx-5">
                <img src={producto.foto} />
                
            </div>
            
            
            <div class="column mx-5 px-6">

                    <article class="message is-large is-dark mx-5">
                        <div class="message-header">
                            <p>{producto.modelo}</p>
                            <p class="success" aria-label="delete">${producto.precio}</p>
                        </div>
                        
                        <div class="message-body has-text-left">
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