import React, { useContext,useEffect, useState } from 'react'
import { useParams  } from 'react-router'
import { pedirDatos } from '../..helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'

export const  ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])


    const { catId } = useParams () 
    
    console.log(catId)

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
               if (!catId) {
                   setProductos(resp)
               }
               else {
                   setProductos( resp.filter( prod => prod.category === catId) )
               }
            })
            .catch( (errror) => {
                console.log(errror)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [catId])

    return (
        <>
        {
            loading
            ? <Loader/>
            : <ItemList productos={productos}/>
        }
        </>
    )
}

