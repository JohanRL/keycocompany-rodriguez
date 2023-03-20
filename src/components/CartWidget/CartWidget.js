import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget () {
    const {cart} = useContext(CartContext)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
    }, [cart])
    return (
        <Link to={'/cart'}>
            <div>
            <img src="/img/cart_icon.png" alt="cart_icon" width='30px'/>
            {total}
            </div>
        </Link>
        
    )
}