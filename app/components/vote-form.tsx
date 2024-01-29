"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  getLocalStorageComments,
  getLocalStorageScores,
  setLocalStorageComments,
  setLocalStorageScores,
} from "@/utils/local-storage";

// Bagel id -> score
export interface BagelScores {
  [bagelId: string]: number;
}

// Bagel id -> comment
export interface BagelComments {
  [bagelId: string]: string;
}

export const VoteForm = ({ bagelIds }: { bagelIds: { id: number }[] }) => {
  const [scoreState, setScoreState] = useState<BagelScores>({});
  const [commentState, setCommentState] = useState<BagelComments>({});
  const [showSpinner, setShowSpinner] = useState(false);

  // Update score/comment state with local storage values
  useEffect(() => {
    const localStorageScores = getLocalStorageScores();
    const localStorageComments = getLocalStorageComments();
    if (localStorageScores) {
      setScoreState(localStorageScores);
    }
    if (localStorageComments) {
      setCommentState(localStorageComments);
    }
  }, []);

  const isSubmitDisabled = Object.keys(scoreState).length < bagelIds.length;

  const submitVotes = async () => {
    setShowSpinner(true);
    const votes: { bagelId: number; score: number; comment: string }[] = [];
    for (const bagelId in scoreState) {
      votes.push({
        bagelId: parseInt(bagelId),
        score: scoreState[bagelId],
        comment: commentState[bagelId],
      });
    }

    await fetch("/api/create-vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ votes }),
    });

    window.location.reload();
  };

  return (
    <>
      {bagelIds.map(({ id: bagelId }) => (
        <div key={bagelId} className="mb-2 flex w-full flex-col gap-4 sm:w-1/2">
          <h2>Bagel #{bagelId}</h2>
          <div className="flex justify-between gap-4">
            <input
              className="w-full"
              value={scoreState[bagelId.toString()] || 0}
              type="range"
              min="1"
              max="10"
              step="1"
              onChange={(e) => {
                const newScores = {
                  ...scoreState,
                  [bagelId]: parseInt(e.target.value),
                };
                setScoreState(newScores);
                setLocalStorageScores(newScores);
              }}
            />
            <span>{scoreState[bagelId]}/10</span>
          </div>
          <textarea
            value={commentState[bagelId] || ""}
            placeholder="Tasting notes..."
            className="h-24 w-full resize-none rounded-md border border-gray-300 p-2"
            onChange={(e) => {
              const newComments = {
                ...commentState,
                [bagelId]: e.target.value,
              };
              setCommentState(newComments);
              setLocalStorageComments(newComments);
            }}
          />
          <hr className="mb-4 mt-2" />
        </div>
      ))}

      <div className="flex flex-col items-center">
        {isSubmitDisabled && (
          <>
            <p className="text-md text-gray-500">
              Place a vote for each bagel to submit.
            </p>
            <p className="text-sm text-gray-500">
              (tasting notes are optional)
            </p>
          </>
        )}
        <button
          className="my-8 flex w-full items-center justify-center rounded bg-green-800 px-12 py-2 text-sm font-medium leading-snug text-white opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg disabled:cursor-not-allowed
          disabled:bg-gray-400 disabled:opacity-90 disabled:shadow-md disabled:hover:opacity-90 disabled:hover:shadow-md disabled:focus:opacity-90 disabled:focus:shadow-md disabled:focus:ring-0 disabled:active:opacity-90 disabled:active:shadow-md disabled:active:ring-0 sm:w-auto"
          disabled={isSubmitDisabled || showSpinner}
          onClick={submitVotes}
        >
          Submit votes
        </button>
      </div>
      {showSpinner && (
        <Image
          src="/bagel-icon-black.svg"
          width={50}
          height={50}
          alt="bagel"
          className="z-10 my-6 animate-spin"
        />
      )}
    </>
  );
};
