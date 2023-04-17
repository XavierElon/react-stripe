import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { CartStateContext } from '../context/CartContext'
import { getProductData } from '../productStore'

const CartProduct = (props) => {
  const cart = useContext(CartStateContext)
  const { id, quantity } = props
  const productData = getProductData(id)
}

export default CartProduct
