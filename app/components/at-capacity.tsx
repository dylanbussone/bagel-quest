"use client";

import { ChangeEvent, useState } from "react";

export const AtCapacity = () => {
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
    <div className="m-auto flex w-full flex-col items-center justify-center  sm:w-1/2">
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Oh, bagels!
      </h1>
      <p className="mb-10">
        We're sorry, but <b>Bagel Quest 2024 is at capacity</b>.
      </p>
      <p className="mb-8">
        Want to be the first to know next time we're planning something like
        this?
      </p>
      <h3 className="mb-8">Join our mailing list!</h3>

      <div className="flex gap-2">
        {emailReceived ? (
          <p className="mb-8">Thanks for joining our mailing list!</p>
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
      </div>
    </div>
  );
};
