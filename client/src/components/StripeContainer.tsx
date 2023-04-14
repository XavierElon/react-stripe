import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY: string =
  'pk_test_51MHeHKJrkE18sY2VuaebQHXeGq40ilkf6BIXhXyVnPoufvuwLYUQnlBNLkkX05iFuU3cRT7W8NZHvP2tFaMBHCU2001EJNE4BV'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  )
}

export default StripeContainer
