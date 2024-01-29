import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

import { VoteForm } from "@/components/vote-form";

export default async function VotePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const userId = (
    await prisma.user.findUnique({
      where: {
        email: user?.email || "",
      },
      select: {
        id: true,
      },
    })
  )?.id;

  const userHasVoted =
    userId !== undefined &&
    (await prisma.vote.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
    }));

  if (!user || userHasVoted) redirect("/results");

  const bagels = await prisma.bagel.findMany({
    orderBy: { id: "asc" },
    where: {
      event: {
        title: "bq2024",
      },
    },
    select: { id: true },
  });

  // Remove on 2/17
  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Cast your votes
      </h1>

      <p>Voting opens 2/17</p>
    </div>
  );

  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Cast your votes
      </h1>

      <VoteForm bagelIds={bagels || []} />
    </div>
  );
}
