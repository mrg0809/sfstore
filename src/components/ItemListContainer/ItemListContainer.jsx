import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({saludo}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { marca, subfamilia } = useParams()

useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
   

    if (marca) {
        getDocs(query(queryCollection, where('marca', '==', marca)))
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    } else if (subfamilia) {
        getDocs(query(queryCollection, where('subfamilia', '==', subfamilia)))
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    } else {
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
}, [marca, subfamilia])


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
            <article className="message is-danger">
                <div className="message-body">
                    <strong>{saludo}</strong>
                </div>
            </article>
            { loading ?
                <img src='https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif' />
            :
                <div className='columns is-multiline'>
                    <ItemList productos={productos} />
                </div>
            }
        </div>

)
}

export default ItemListContainer;   