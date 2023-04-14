import { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const PUBLIC_KEY: string = process.env.STRIPE_PUBLISHABLE_KEY || ''

const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: 'card',
      card: elements?.getElement(CardElement)!,
    })
    // await stripe?.createPaymentMethod({
    //     type: 'card',
    //     card: elements?.getElement(CardElement)!
    // })
  }
  return <div></div>
}

export default PaymentForm
