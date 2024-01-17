import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import type { OrderItem } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      userEmail,
      userName,
      orderItems,
    }: { userEmail: string; userName: string; orderItems: OrderItem[] } = data;

    if (!userEmail) throw new Error("userEmail is required");
    if (!orderItems || orderItems.length === 0)
      throw new Error("orderItems are required");

    // Create Order
    const order = await prisma.order.create({
      data: {
        event: {
          connect: {
            title: "bq2024",
          },
        },
        userEmail,
        userName,
        orderItems: {
          create: orderItems
            .filter((orderItem) => orderItem.quantity > 0)
            .map((orderItem) => orderItem),
        },
      },
    });

    // Also add to User table
    await prisma.user.create({
      data: {
        email: userEmail,
        name: userName,
      },
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error creating order", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
