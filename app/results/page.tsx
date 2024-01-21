import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Chart } from "@/app/components/chart";

export default async function ResultsPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // TODO: fetch user's votes and combined votes from db
  // for combined votes, can we do fancy sql query to get avg vote for each bagel shop?
  const userVotes = [
    {
      bagelId: 1,
      score: 9,
      comments: "blah blah blah",
    },
    {
      bagelId: 2,
      score: 2,
      comments: "blah blah blah",
    },
    {
      bagelId: 3,
      score: 6,
      comments: "blah blah blah",
    },
    {
      bagelId: 4,
      score: 8,
      comments: "blah blah blah",
    },
    {
      bagelId: 5,
      score: 7,
      comments: "blah blah blah",
    },
    {
      bagelId: 6,
      score: 10,
      comments: "blah blah blah",
    },
    {
      bagelId: 7,
      score: 6,
      comments: "blah blah blah",
    },
    {
      bagelId: 8,
      score: 2,
      comments: "blah blah blah",
    },
    {
      bagelId: 9,
      score: 3,
      comments: "blah blah blah",
    },
    {
      bagelId: 10,
      score: 4,
      comments: "blah blah blah",
    },
    {
      bagelId: 11,
      score: 8,
      comments: "blah blah blah",
    },
    {
      bagelId: 12,
      score: 5,
      comments: "blah blah blah",
    },
    {
      bagelId: 13,
      score: 8,
      comments: "blah blah blah",
    },
  ];

  const totalVotes = [
    {
      bagelId: 1,
      score: 8.4,
      comments: "blah blah blah",
    },
    {
      bagelId: 2,
      score: 3.5,
      comments: "blah blah blah",
    },
    {
      bagelId: 3,
      score: 6.25,
      comments: "blah blah blah",
    },
    {
      bagelId: 4,
      score: 7,
      comments: "blah blah blah",
    },
    {
      bagelId: 5,
      score: 6.9,
      comments: "blah blah blah",
    },
    {
      bagelId: 6,
      score: 8.0,
      comments: "blah blah blah",
    },
    {
      bagelId: 7,
      score: 6.25,
      comments: "blah blah blah",
    },
    {
      bagelId: 8,
      score: 3.75,
      comments: "blah blah blah",
    },
    {
      bagelId: 9,
      score: 8.6,
      comments: "blah blah blah",
    },
    {
      bagelId: 10,
      score: 5.5,
      comments: "blah blah blah",
    },
    {
      bagelId: 11,
      score: 8.0,
      comments: "blah blah blah",
    },
    {
      bagelId: 12,
      score: 6.2,
      comments: "blah blah blah",
    },
    {
      bagelId: 13,
      score: 9.0,
      comments: "blah blah blah",
    },
  ];

  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Results
      </h1>

      <Chart userVotes={userVotes} totalVotes={totalVotes} />

      <div className="mt-10 w-full text-left">
        <h2 className="mb-6 text-3xl font-semibold">Your tasting notes</h2>
        {userVotes.map(({ bagelId, comments, score }) => (
          <div key={bagelId} className="my-12">
            <h3 className="text-xl font-semibold">Bagel #{bagelId} - Eltana</h3>
            <p className="text-sm">Your score: {score}</p>
            <p className="text-lg">{comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
