import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"
import ItemCart from "./ItemCart"
import './style.css';

const Cart = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: '',
    })
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();
    

    const createOrder = (event) => {
        event.preventDefault();

        
        const db = getFirestore();

        const querySnapshot = collection(db, 'orders');

        addDoc(querySnapshot, {
            buyer: {
                email: formValue.email,
                name: formValue.name,
                phone: formValue.phone,
            },
            products: cart.map((product) => {
                return {
                    title: product.name,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity,
                }
            }),
            total: total,
        })
        .then((response) => {
            alert(`Order with id:${response.id} has been created`);
            updateStocks(db);
            clear()
        })
        .catch((error) => console.log(error))
    };

    const updateStocks = (db) => {
        cart.forEach((product) => {
            const querySnapshot = doc( db, 'products', product.id );

            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity,
            })
            .then(() => {
                console.log('The stock has been updated')
            })
            .catch((error) => console.log(error))
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValue.email === formValue.emailConfirm) {
            setIsValid(true)
        } else {
            setIsValid(false)
            alert("Emails do not match, please try again")
        }
    }

    const handleInput = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <div className="fullCart">
                <div>
                {cart.map ((product) => (
                    <div key={product.name}>
                        <ItemCart product={product}/>
                    </div>
                    ))}
                    {cart.length > 0 && (
                        <div>
                            <button onClick={clear}>Empty Cart</button>
                            <h2>Total is: ${total}</h2>
                            <div>
                                <form onSubmit={handleSubmit} className="formStyle">
                                    <input
                                        name='name'
                                        type='text'
                                        placeholder='Name'
                                        value={formValue.name}
                                        onChange={handleInput}
                                    />
                                    <input
                                        name='phone'
                                        type='text'
                                        placeholder='Phone'
                                        value={formValue.phone}
                                        onChange={handleInput}
                                    />
                                    <input
                                        name='email'
                                        type='email'
                                        placeholder='e-mail'
                                        value={formValue.email}
                                        onChange={handleInput}
                                    />
                                    <input
                                        name='emailConfirm'
                                        type='email'
                                        placeholder='Confirm e-mail'
                                        value={formValue.emailConfirm}
                                        onChange={handleInput}
                                    />
                                    <button type="submit" onClick={createOrder}>Buy</button>
                                </form>
                                {isValid && <p>Email is valid</p>}
                            </div>
                        </div>
                )}
                </div>
                <div>
                    {cart.length === 0 && (
                    <div className="emptyCart">
                        <div>
                            <h2>There are no products in the cart</h2>
                        </div>
                        <div>
                            <button onClick={() => navigate('/')}>Keep Buying</button>
                        </div>
                    </div>)}
                </div>
                
            </div>
        </div>
    );
};
export default Cart