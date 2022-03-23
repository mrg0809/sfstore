import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import Item from "../Item/Item";

function ItemList({items}) {
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
        { loading ?
                <img src='https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif' />
            :
                <div class='columns is-multiline'>
                    {productos.map((producto)=> <Item 
                                                    modelo={producto.modelo}
                                                    precio={producto.precio}
                                                    descripcion={producto.descripcion}
                                                    foto={producto.foto}
                                                    id={producto.id}
                                                    marca={producto.marca}
                                                    />
                                                    )}
                </div>
         }
        </div>
        )
}


export default ItemList;
