import React, { useState } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'

const NavBarComponent = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow} className="bg-blue-500">
            Cart 0 Items
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className="text-center">Body</h1>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBarComponent
