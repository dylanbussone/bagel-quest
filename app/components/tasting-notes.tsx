"use client";

import { useState } from "react";

export const TastingNotes = ({
  userVotes,
  bagels,
}: {
  userVotes: { bagelId: number; score: number; comment?: string | null }[];
  bagels: { id: number; name: string }[];
}) => {
  const [viewNotes, setViewNotes] = useState(false);

  const getBagelById = (id: number) => {
    return bagels.find((bagel) => bagel.id === id);
  };

  return (
    <>
      <button
        className="mb-8 flex w-full items-center justify-center whitespace-nowrap rounded bg-gray-200 px-8 py-2 text-sm font-medium leading-snug text-black opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg sm:w-auto"
        onClick={() => setViewNotes(!viewNotes)}
      >
        View your tasting notes
      </button>
      {viewNotes &&
        userVotes.map(({ bagelId, comment, score }) => (
          <div key={bagelId} className="my-5 border-t border-gray-300 pt-5">
            <h3 className="text-xl">
              Bagel #{bagelId} - {getBagelById(bagelId)?.name}
            </h3>
            <p className="text-sm">Your score: {score}/10</p>
            <p className="text-md mt-2">{comment}</p>
          </div>
        ))}
    </>
  );
};
