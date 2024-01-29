"use client";

import { ChangeEvent, useState } from "react";

export const AtCapacityInline = () => {
  const [email, setEmail] = useState("");
  const [emailReceived, setEmailReceived] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const saveEmail = async () => {
    await fetch("/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setEmailReceived(true);
  };

  const isEmailValid = (email: string) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase(),
    );
  };

  return (
    <p className="my-4">
      <h4 className="py-4 font-semibold">Oh, bagels!</h4>
      We're sorry, but Bagel Quest 2024 is at capacity.
      <br />
      Want to be the first to know next time we're planning something like this?
      Join our mailing list.
      <span className="mt-2 flex gap-2">
        {emailReceived ? (
          <span className="mb-8 block">Received!</span>
        ) : (
          <>
            <input
              value={email}
              onChange={handleInput}
              placeholder="Email"
              className="p-2"
            />
            <button
              className="w-full items-center justify-center whitespace-nowrap rounded bg-green-800 px-8 py-2 text-sm font-medium leading-snug text-white opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-90 disabled:shadow-md disabled:hover:opacity-90 disabled:hover:shadow-md disabled:focus:opacity-90 disabled:focus:shadow-md disabled:focus:ring-0 disabled:active:opacity-90 disabled:active:shadow-md disabled:active:ring-0 sm:w-auto"
              disabled={!isEmailValid(email)}
              onClick={saveEmail}
            >
              Join
            </button>
          </>
        )}
      </span>
    </p>
  );
};
