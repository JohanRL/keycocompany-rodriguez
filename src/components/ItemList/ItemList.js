import './style.css';
import Item from "../Item/Item"
import { Link } from 'react-router-dom';

const ItemList = ({productList}) => {

    return (
        <div className='itemList'>
            {productList.map((product) => (
                <div className='cards' key={product.id}>
                    <Link to={`/item/${product.id}`}>
                        <Item product={product}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ItemList;