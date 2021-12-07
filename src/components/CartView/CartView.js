import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex'
import { BsFillTrashFill } from 'react-icons/bs'


export const CartView = () => {
    const {carrito, vaciarCarrito, removerDelCarrito} = useContext(CartContext)
    return (
        <div className="conatainer m-5">
            <h2>Cart View</h2>
            <hr/>

            <section>
            {
                carrito.map((prod) =>(
                    <div>
                        <h3>{prod.name}</h3>
                        <p>precio:{prod.price}</p>
                        <p>cantidad:{prod.cantidad}</p>
                        <button 
                            className="btn btn-danger" 
                            onClick={() =>{ removerDelCarrito(prod.id)}}
                            >
                                <BsFillTrashFill/>
                                </button>
                    </div>    
                ))
            }
            </section>

            <hr/>
            <div>
                <button className="btn btn-danger" onClick={vaciarCarrito}></button>
                <button className="btn btn-success mx-2">Termine mi compra</button>
            </div>
        </div>
    )
}