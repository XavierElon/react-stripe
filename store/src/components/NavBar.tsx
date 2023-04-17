import React, { useContext, useState } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { CartStateContext } from '../context/CartContext'
import CartProduct from './CartProduct'

const NavBarComponent = () => {
  const [show, setShow] = useState(false)
  const cart = useContext(CartStateContext)

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  const productsCount = cart.items.reduce(
    (sum: any, product: { quantity: any }) => sum + product.quantity,
    0
  )
  console.log(productsCount)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow} className="bg-blue-500">
            Cart {productsCount} Items
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart: </p>
              {cart.items.map(
                (
                  currentProduct: { id: number; quantity: number },
                  idx: any
                ) => (
                  <CartProduct
                    key={idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                  />
                )
              )}
            </>
          ) : (
            <>
              <h1>No products in your cart</h1>
            </>
          )}
          <h1 className="text-center">
            Total: {cart.getTotalCost().toFixed(2)}
          </h1>
          <div className="flex flex-col items-center justify-center py-3">
            <Button variant="success" className="bg-green-600">
              Purchase items!
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBarComponent
