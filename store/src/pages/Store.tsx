import { Row, Col } from 'react-bootstrap'

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h2>Product</h2>
        </Col>
        <Col align="center">
          <h2>Product</h2>
        </Col>
      </Row>
    </>
  )
}

export default Store
