import React, { useContext,useEffect, useState } from 'react'
import {useParams} from 'react-router'
import {pedirDatos} from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {


    const [item, setItem] = useState() 
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    console.log(itemId)
    console.log(typeof itemId)

    
    useEffect(()=>{

        setLoading(true)

        pedirDatos()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
        })
            .finally(()=>{
                setLoading(false)
        })
    }, [])




    return (
        <div className="conatiner my-5">
            {
            loading
            ? <h2>Cargando...</h2>
            : <ItemDetail {...item}/>
            }
        </div>
        
    )
}
        