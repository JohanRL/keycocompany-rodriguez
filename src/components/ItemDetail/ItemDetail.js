import './style.css'
import Counter from '../Counter/Counter'
const ItemDetail = ({detail}) => {
    
    return (
    <div className="itemDetail">
        <img src={detail.image} alt={detail.name} width="400px"/>
        <h2>{detail.name}</h2>
        <h2>{detail.description}</h2>
        <h2>{detail.price}</h2>
        <div className='counterStyle'>
            <Counter />
        </div>
    </div>
    )
}

export default ItemDetail