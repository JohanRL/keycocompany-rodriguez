import logo from '../../components/Assets/Logo/logo_keycoco_footer.png';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <section className="footer">
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo_foot"/>
                </Link>
                <div className="footerText">
                    <h4>Contacto</h4>
                    <p><strong>Dirección:</strong> Calle 55 #78-73</p>
                    <p><strong>Teléfono:</strong> +57 316 366 7303 / +57 601 257 2429</p>
                    <p><strong>Horas:</strong> 10:00 AM - 6:00 PM, Lunes - Sábado</p>
                </div>
            </div>
            <div>
            
            </div>
        </section>
    )
}