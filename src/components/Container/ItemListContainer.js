export default function ItemListContainer ({greeting, emptyCart}) {
    return (
        <section>
            <div className="banner">
                <h1>{greeting}</h1>
                <h4>#shopping</h4>
            </div>
        </section>
    )
}