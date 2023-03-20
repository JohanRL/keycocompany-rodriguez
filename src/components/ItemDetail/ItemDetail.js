import './style.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({detail}) => {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);
    const [ count, setCount ] = useState(detail.stock === 0 ? 0 : 1)

    return (
    <div className="itemDetail">
        <div>
        <h2>{detail.name}</h2>
        <img src={`/img/${detail.image}`} alt={detail.name} width='700px'/>
        </div>
        <div className='description'>
            <div className='descriptionText'>
                <span>{detail.description}</span>
                <h2>${detail.price}</h2>
            </div>
            <div className='counterStyle'>
                <ItemCount count={count} setCount={setCount}/>
                <button onClick={() => navigate('/')}>Keep Buying</button>
                <button disabled={count > detail.stock} onClick={() => addItem(detail ,count)}>Add to the Cart</button>
                <button onClick={() => navigate('/cart')}>Complete Purchase</button>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail