import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from 'firebase/firestore'

function ItemListContainer({saludo}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { marca, subfamilia } = useParams()

useEffect(()=>{
    const querydb = getFirestore()
})

    /* useEffect(()=> {
        if (marca) {
            getFetch
            .then(resp => setProductos(resp.filter(item=>item.marca===marca)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else if(subfamilia) {
            getFetch
            .then(resp => setProductos(resp.filter(item=>item.subfamilia===subfamilia)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
        }, [marca, subfamilia]) */
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