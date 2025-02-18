"use client"

import CheckoutForm from "@/components/chekout/payment";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

function Payment() {
    const searchParams= useSearchParams()
    const amount= searchParams.get("amount")
    
  return (
    <>
    <Elements  stripe={stripePromise} options={{mode: "payment", currency: "usd", amount: Number(amount)
    
    }} >
      <CheckoutForm amount={Number(amount )} />
    </Elements>
    </>
  )
}

export default Payment