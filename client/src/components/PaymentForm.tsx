import { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

interface Props {
  error: any
  paymentMethod: any
}

const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // const { error, paymentMethod } = await stripe?.createPaymentMethod({
    //   type: 'card',
    //   card: elements?.getElement(CardElement)!,
    // })

    // if (!error) {
    //     try {
    //         const { id } = paymentMethod
    //     }
    // }
    console.log('here')
    await stripe
      ?.createPaymentMethod({
        type: 'card',
        card: {
          number: '4242424242424242',
          exp_month: 12,
          exp_year: 2023,
          cvc: '123',
        },
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      })
  }
  return (
    <div>
      <button onClick={handleSubmit}>Achilles</button>
    </div>
  )
}

export default PaymentForm
