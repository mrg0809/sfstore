function Item({id, modelo, marca, descripcion, precio, foto }) {
    return (
        <div key={id} class='column is-four is-one-quarter'>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-square">
                        <img src="https://images.vans.com/is/image/VansEU/VN000EE3BKA-HERO" alt={modelo} />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{modelo}</p>
                        </div>
                    </div>

                        <div class="content">
                            {descripcion}
                        <hr />
                            <button class="button is-info is-light is-outlined is-fullwidth">Detalle</button>
                        </div>
                </div>
            </div>
        </div>
      );
    };


export default Item;