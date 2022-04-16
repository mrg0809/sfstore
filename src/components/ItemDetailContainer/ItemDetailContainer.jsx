import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { modelo } = useParams()
    useEffect(()=> {
        const querydb = getFirestore()
        const queryProd = doc(querydb, 'productos', modelo)
        
        getDoc(queryProd)
        .then(resp => setProducto( { id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [modelo])

    return (
       <>
        <ItemDetail producto={producto}/>      
       </>
    )
}


export default ItemDetailContainer;
