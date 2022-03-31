import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { modelo } = useParams()
    useEffect(()=> {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.modelo === modelo)))
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
