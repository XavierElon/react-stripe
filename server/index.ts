import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const STRIPE_KEY: string = process.env.STRIPE_SECRET_KEY || ' '

const stripe = new Stripe('sk_test_51MHeHKJrkE18sY2VFfxBFOoouIRyD4RJOXidnVEzwBSaQO8zKLWhZef7JpJl1jf5HtxKCMGXWLBlvssHnovztosp00raUo89Ef', {
    apiVersion: '2022-11-15'
})

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.post('/checkout', async (req, res) => {
    console.log(req.body)
    const items = req.body.items
    let lineItems: any[] = []
    items.forEach((item: any) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, () => console.log('Listening on PORT 4000'))