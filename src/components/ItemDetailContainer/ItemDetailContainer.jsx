import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === '1')))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log(producto)
    }, [])

    return (
       <>
        <ItemDetail producto={producto}/>      
       </>
    )
}


export default ItemDetailContainer;
