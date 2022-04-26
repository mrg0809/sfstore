import { Link } from "react-router-dom";

function Item({producto}) {
    return (
        <div className='column is-four is-one-quarter'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-square">
                        <img src={producto.foto} alt={producto.modelo} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{producto.modelo}</p>
                        </div>
                    </div>

                        <div className="content">
                            {producto.descripcion}
                        <hr />
                            <Link to={`/detalle/${producto.id}`}>
                                <button className="button is-info is-light is-outlined is-fullwidth">Detalle</button>
                            </Link>    
                        </div>
                </div>
            </div>
        </div>
      );
    };


export default Item;