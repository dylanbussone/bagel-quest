"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export const Stripe = (schmearQuantities: {
  testShmearQuantity: number;
  plainShmearQuantity: number;
  novaShmearQuantity: number;
  novaLoxQuantity: number;
}) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify(schmearQuantities),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
