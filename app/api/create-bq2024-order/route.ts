import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import type { OrderItem } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    const data = await request.json();
    const { orderItems }: { orderItems: OrderItem[] } = data;

    if (!user?.email) throw new Error("user is required");
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
        userEmail: user.email,
        userName: user.name,
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
        email: user.email,
        name: user.name,
      },
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error creating order", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
