import logo from '../../components/Assets/Logo/logo_keycoco.png';
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar () {
    return (
        <section>
            <div>
                <nav className="navBar">
                    <a href="index.html"><img src= {logo} alt="logo_keyco"></img></a>
                    <ul className="navLinks">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="keyboards.html">Keyboards</a></li>
                        <li><a href="keycaps.html">Keycaps</a></li>
                        <li><a href="accessories.html">Accessories</a></li>
                        <li><CartWidget /></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}