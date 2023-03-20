import logo from '../../components/Assets/Logo/logo_keycoco.png';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';


export default function NavBar () {
    
    return (
        <div>
            <div>
                <nav className="navBar">
                    <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/'><img src= {logo} alt="logo_keyco"></img></NavLink>
                    <ul className="navLinks">
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/keyboards'>Keyboards</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/keycaps'>Keycaps</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/accessories'>Accessories</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/cart'><CartWidget /></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}