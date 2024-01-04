import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");
//   const email = searchParams.get("email");

//   try {
//     if (!name || !email) throw new Error("Name and email required");
//     await sql`INSERT INTO Orders (Name, Email) VALUES (${name}, ${email});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const orders = await sql`SELECT * FROM Orders;`;
//   return NextResponse.json({ orders }, { status: 200 });
// }

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email } = data;

    if (!name || !email) throw new Error("Name and email required");
    await sql`INSERT INTO Orders (Name, Email) VALUES (${name}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const orders = await sql`SELECT * FROM Orders;`;
  return NextResponse.json({ orders }, { status: 200 });
}
