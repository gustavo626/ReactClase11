import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../../Item/Item'

export const ItemList = ({Productos}) => {
    return (
        <Container className="my-5">
            <h2>Productos</h2>
            <hr/>
            <Row>
                {Productos.map((prod) => <Item prod = {prod}/>)}
            </Row>
        </Container>
    )
}