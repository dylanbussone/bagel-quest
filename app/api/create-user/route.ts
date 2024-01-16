import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import type { User } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, name }: User = data;

    if (!email) throw new Error("email is required");

    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error creating user", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
