import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import dotenv from 'dotenv'

dotenv.config()

const PUBLIC_KEY: string = process.env.STRIPE_PUBLISHABLE_KEY || ''

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return <Elements stripe={stripeTestPromise}></Elements>
}

export default StripeContainer
