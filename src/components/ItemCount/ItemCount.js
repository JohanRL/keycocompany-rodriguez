import './style.css';

const ItemCount = ({count, setCount}) => {

        const onAdd = () => {
            setCount(count + 1)
        }

        const substract = () => {
            if(count!==1) {
                setCount(count - 1)
            }
        }

        return (
            <div>
                <div className='counter'>
                    <button disabled={count === 0} onClick={onAdd}>+</button>
                    <h3>{count}</h3>
                    <button disabled={count === 0} onClick={substract}>-</button>
                </div>
            </div>
            )
    
}

export default ItemCount