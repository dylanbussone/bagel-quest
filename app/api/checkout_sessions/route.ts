import { headers } from "next/headers";
import { NextRequest } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const origin = headers().get("origin");
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          // TODO: create cart component to manage items, reference price ids, and quantities

          // Test ticket
          price: "price_1OR23RCQF0PDqGDIKg5rRgMQ",
          quantity: 1,
        },
        {
          // Test shmear
          price: "price_1OR23eCQF0PDqGDIQKhucdNk",
          quantity: 1,
        },
      ],
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
