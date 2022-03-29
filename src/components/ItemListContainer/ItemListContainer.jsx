import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({saludo}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log(productos)
    }, [])
    return (
        <div>
            <article class="message is-danger">
                <div class="message-body">
                    <strong>{saludo}</strong>
                </div>
            </article>
            { loading ?
                <img src='https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif' />
            :
                <div class='columns is-multiline'>
                    <ItemList productos={productos} />
                </div>
            }
        </div>

)
}

export default ItemListContainer;