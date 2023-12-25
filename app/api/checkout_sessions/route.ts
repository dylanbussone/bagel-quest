import { headers } from "next/headers";
import { NextRequest } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const origin = headers().get("origin");
    const data = await req.json();
    const {
      testShmearQuantity,
      plainShmearQuantity,
      novaShmearQuantity,
      novaLoxQuantity,
    } = data;

    const line_items = [
      // {
      //   // Test ticket
      //   price: "price_1OR23RCQF0PDqGDIKg5rRgMQ",
      //   quantity: 1,
      // },
      // {
      //   // Test shmear
      //   price: "price_1OR23eCQF0PDqGDIQKhucdNk",
      //   quantity: testShmearQuantity,
      // },
      {
        // Bagel Quest ticket
        price: "price_1OR0NpCQF0PDqGDIrU1xR4dy",
        quantity: 1,
      },
      {
        // Plain schmear
        price: "price_1OR0OqCQF0PDqGDIWCvY3pkz",
        quantity: plainShmearQuantity,
      },
      {
        // Nova shmear
        price: "price_1OR0PtCQF0PDqGDIOlHhmy5K",
        quantity: novaShmearQuantity,
      },
      {
        // Nova lox
        price: "price_1OR0R1CQF0PDqGDIjoO9Tkcb",
        quantity: novaLoxQuantity,
      },
    ].filter((item) => item.quantity > 0);

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items,
      mode: "payment",
      return_url: `${origin}/order/return?session_id={CHECKOUT_SESSION_ID}`,
      automatic_tax: { enabled: true },
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (err: any) {
    return Response.json(
      { error: "message" in err ? err.message : err },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session) {
    return Response.json({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  } else {
    return Response.json({ error: "Invalid session" }, { status: 400 });
  }
}
