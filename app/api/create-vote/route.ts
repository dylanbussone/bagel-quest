import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    const data = await request.json();
    const votes: { bagelId: number; score: number; comment: string }[] =
      data?.votes;

    if (!votes || votes.length === 0) throw new Error("votes are required");

    if (!user?.email) throw new Error("user email is required");

    const userId = (
      await prisma.user.findUnique({
        where: {
          email: user.email,
        },
        select: {
          id: true,
        },
      })
    )?.id;

    if (!userId) throw new Error("cannot find user id");

    // If user has already voted, throw
    const hasVotedPromise = prisma.vote.findFirst({
      where: {
        eventId: 1,
        userId: userId,
      },
    });

    // If user has not paid, throw
    const hasNotPaidPromise = prisma.order.findFirst({
      where: {
        userEmail: user.email,
        AND: {
          exempt: false,
          paid: 0,
        },
      },
    });

    const [hasVoted, hasNotPaid] = await Promise.all([
      hasVotedPromise,
      hasNotPaidPromise,
    ]);

    if (hasVoted) throw new Error("user has already voted: " + userId);
    if (hasNotPaid) throw new Error("user has not paid: " + userId);

    const createVotes = await prisma.vote.createMany({
      data: votes.map((vote) => ({
        ...vote,
        eventId: 1,
        userId: userId,
      })),
    });

    return NextResponse.json({ votes: createVotes }, { status: 200 });
  } catch (error) {
    console.error("Error creating votes", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
