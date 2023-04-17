import { Row, Col } from 'react-bootstrap'
import { CSSProperties } from 'react'
import { productsArray } from '../productStore'
import ProductCard from '../components/ProductCard'

const Store = () => {
  return (
    <>
      <h1 className="p-3 text-center">Store</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

const headerStyle: CSSProperties = {
  textAlign: 'center',
}

export default Store
