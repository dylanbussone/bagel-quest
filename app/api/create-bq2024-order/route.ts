import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import type { OrderItem } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      user_email,
      user_name,
      orderItems,
    }: { user_email: string; user_name: string; orderItems: OrderItem[] } =
      data;

    if (!user_email) throw new Error("user_email is required");
    if (!user_name) throw new Error("user_name is required");
    if (!orderItems || orderItems.length === 0)
      throw new Error("orderItems are required");

    const order = await prisma.order.create({
      data: {
        event: {
          connect: {
            title: "bq2024",
          },
        },
        user_email,
        user_name,
        orderItems: {
          create: orderItems
            .filter((orderItem) => orderItem.quantity > 0)
            .map((orderItem) => orderItem),
        },
      },
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error creating order", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
