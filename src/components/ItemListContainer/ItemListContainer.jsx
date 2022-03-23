import ItemList from "../ItemList/ItemList";

function ItemListContainer({saludo}) {
    return (
        <div>
            <article class="message is-danger">
                <div class="message-body">
                    <strong>{saludo}</strong>
                </div>
            </article>
            <ItemList />
        </div>
        

)
}

export default ItemListContainer;