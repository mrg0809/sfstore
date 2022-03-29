function ItemDetail({producto}) {
    return (
        
        <div class="container product-detail box" style="margin:3%;">
            <br />
            <div class="columns">
                <div class="column is-hidden-desktop is-1-tablet is-hidden-mobile"></div>

                <div class="column is-5-desktop is-5-tablet is-12-mobile">
                    <img src="http://www.thebluediamondgallery.com/wooden-tile/images/product.jpg" alt="image" style="max-height: 500px" />
                </div>

                <div class="column is-7-desktop is-5-tablet is-12-mobile content-detail">
                    <dt style="font-size:1.7em; text-transform:uppercase">{producto.name}</dt>
                    <dt style="font-size:1.2em; text-transform:uppercase">{producto.marca}</dt>
                    <hr />
                    <div class="price">
                        <label for="price">Rp. </label>
                        <span>{producto.precio}</span>
                        <br /><br />
                    </div>

                    <p style="font-size:1.2em;">{producto.descripcion}</p>
                    <hr />
                    <button class="button is-full is-warning">Add to Cart</button>
                    <button class="button is-full is-primary">Buy Now</button>
                    <div class="column is-hidden-desktop is-1-tablet is-hidden-mobile"></div>
                </div>
            </div>
        </div>
        
    )
}
export default ItemDetail