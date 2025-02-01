import { useContext, useState } from 'react'; // Importamos useState para manejar el estado del menú
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/User/userContext';

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del menú

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/product"><img src="/Logo_Surbytech.png" alt="Logo" className="navbar__logo-image" /></Link>
            </div>
            <div className={`navbar__items ${isOpen ? 'navbar__items--open' : ''}`}>
                <ul className="navbar__list">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    <li><Link to="/product">Productos</Link></li>
                    <li><Link to="/cart">Carrito</Link></li>
                    {!user ? (
                        <li><Link to="/login">Cuenta</Link></li>
                    ) : (
                        <div>
                            <li><Link to="/cart">{user.email}</Link></li>
                            <button className='logout-button' onClick={logout}>Logout</button>
                        </div>
                    )}
                </ul>
            </div>
            <button className="navbar__toggle" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};
