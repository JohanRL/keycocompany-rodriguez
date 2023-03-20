import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../../components/ItemCount/ItemCount';
import './style.css';

const ItemCart = ({ product }) => {
    const { updateItem, removeItem } = useContext(CartContext);

    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {
    updateItem(product.id, quantity);
    }, [quantity]);
    return (
        <div className='columnCart'>
            <h2>{product.name}</h2>
            <img src={`/img/${product.image}`} alt={product.name} width='200px'/>
            <h2>${product.price}</h2>
            <ItemCount count={quantity} setCount={setQuantity} />
            <button onClick={() => removeItem(product.id)}>X</button>
        </div>
    );
};

export default ItemCart;