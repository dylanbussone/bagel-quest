"use client";

export const Chart = ({
  userVotes = [],
  totalVotes,
  bagels,
}: {
  userVotes: { bagelId: number; score: number }[];
  totalVotes: { bagelId: number; score: number }[];
  bagels: { id: number; name: string }[];
}) => {
  const chartData = totalVotes.map((totalVote) => ({
    bagelId: totalVote.bagelId,
    name: bagels.find((bagel) => bagel.id === totalVote.bagelId)?.name,
    totalScore: totalVote.score,
    userScore: userVotes.find(
      (userVote) => userVote.bagelId === totalVote.bagelId,
    )?.score,
  }));

  const showTotalScore = true;

  return (
    <div className="w-full">
      {chartData.map((data) => (
        <div key={data.name} className="mb-4 border-b pb-4">
          <h4>
            Bagel #{data.bagelId}: {data.name}
          </h4>
          {data.userScore && (
            <div className="mb-2">
              <div className="text-sm text-gray-500">
                Your score: {data.userScore}/10
              </div>
              <div
                className="h-4 rounded-md border border-[#bb3c31] bg-[#C2655D]"
                style={{ width: (data.userScore / 10) * 100 + "%" }}
              ></div>
            </div>
          )}
          {showTotalScore && (
            <>
              <div className="text-sm text-gray-500">
                Total: {data.totalScore}/10
              </div>
              <div
                className="h-4 rounded-md border border-[#56ac2a] bg-[#87AE73]"
                style={{ width: (data.totalScore / 10) * 100 + "%" }}
              ></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
