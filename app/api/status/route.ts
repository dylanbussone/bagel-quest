import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (user?.email === "dylanbussone@gmail.com") {
    const paidOrderCount = await prisma.order.count({
      where: {
        event: {
          title: "bq2024",
        },
        OR: [
          { exempt: true },
          {
            paid: {
              gt: 1,
            },
          },
        ],
      },
    });

    const unpaidOrderCount = await prisma.order.count({
      where: {
        event: {
          title: "bq2024",
        },
        AND: [
          { exempt: false },
          {
            paid: 0,
          },
        ],
      },
    });

    const unpaidUsers = await prisma.order.findMany({
      select: {
        userEmail: true,
        userName: true,
      },
      where: {
        event: {
          title: "bq2024",
        },
        AND: [
          { exempt: false },
          {
            paid: 0,
          },
        ],
      },
    });

    return NextResponse.json(
      {
        paidOrderCount,
        unpaidOrderCount,
        capacity: 200,
        unpaidUsers,
      },
      { status: 200 },
    );
  }

  return NextResponse.json({});
}
