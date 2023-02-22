import { useState } from "react"

const Counter = () => {
    
        const [counter, setCounter] = useState(0)

        const onAdd = () => {
            setCounter(counter + 1)
        }

        const substract = () => {
            if(counter!==0) {
                setCounter(counter - 1)
            }
        }

        return (
            <div>
                <h2>{counter}</h2>
                <div>
                    <button onClick={onAdd}>+</button>
                    <button onClick={substract}>-</button>
                </div>
            </div>
            )
    
}

export default Counter