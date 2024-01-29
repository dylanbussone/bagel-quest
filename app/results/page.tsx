import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Chart } from "@/app/components/chart";
import { TastingNotes } from "@/app/components/tasting-notes";
import prisma from "@/lib/prisma";

export default async function ResultsPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const userVotes = await prisma.vote.findMany({
    where: {
      user: {
        email: user?.email || "",
      },
      event: {
        id: 1,
      },
    },
    select: {
      bagelId: true,
      score: true,
      comment: true,
    },
    orderBy: {
      bagelId: "asc",
    },
  });

  // Prisma doesn't allow aggregate queries selected on multiple filters,
  // which means running 13 queries to get the avg for each bagelId.
  // It's ridiculously slow.

  // For each bagelId, get average score
  // const totalVotesPromises = [];
  // for (let i = 1; i <= 13; i++) {
  //   totalVotesPromises.push(
  //     await prisma.vote.aggregate({
  //       where: {
  //         event: {
  //           id: 1,
  //         },
  //         bagelId: i,
  //       },
  //       _avg: {
  //         score: true,
  //       },
  //     }),
  //   );
  // }

  const allVotes = await prisma.vote.findMany({
    where: {
      event: {
        id: 1,
      },
    },
    select: {
      bagelId: true,
      score: true,
    },
  });

  const totalVotes = [];
  for (let i = 1; i <= 13; i++) {
    const totalVotesForBagel = allVotes.filter((vote) => vote.bagelId === i);
    const avgScore =
      totalVotesForBagel.reduce((acc, vote) => acc + vote.score, 0) /
      totalVotesForBagel.length;
    totalVotes.push({
      bagelId: i,
      score: avgScore,
    });
  }

  const bagels = await prisma.bagel.findMany({
    where: {
      event: {
        id: 1,
      },
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Results
      </h1>

      <Chart userVotes={userVotes} totalVotes={totalVotes} bagels={bagels} />

      {/* TODO: top 3 total scores (winners) */}

      {userVotes.length > 0 && (
        <div className="mt-10 w-full text-left">
          <TastingNotes userVotes={userVotes} bagels={bagels} />
        </div>
      )}
    </div>
  );
}
