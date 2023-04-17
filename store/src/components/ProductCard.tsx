import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

interface Props {
  product: any
}

const ProductCard = (props: Props) => {
  const product = props.product

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
