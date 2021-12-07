import { CartWidget } from '../components/CartWidget'
import './navBar.scss'


export const NavBar = () => {

    return (
        <header className="header">
        <Link to="/"><h1>Logo</h1></Link>

        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="cart">Cart</Link></li>
                <li><Link to="productos/zapatillas">Zapatillas</Link></li>
                <li><Link to="productos/Remera">Remera</Link></li>
                <li><Link to="productos/Buzos">Buzos</Link></li>

            </ul>    
        </nav>

        
        
    <CartWidget/>
    </header>
    )
}

// export default NavBar