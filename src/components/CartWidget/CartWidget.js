import React, { useContext } from 'react' 
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../context/CartContex'
import './CartWidget.scss'


export const CartWidget = () => {
    const {totalCantidad, carrito} = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'hidden widget' : 'widget'}>
            <Link to="/cart">
            <FaCartPlus classname="cartwidget"/>
            <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}