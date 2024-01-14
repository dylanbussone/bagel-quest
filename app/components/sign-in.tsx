"use client";

import { signIn } from "next-auth/react";

export const SignIn = ({ renderAsButton = true }) => {
  return renderAsButton ? (
    <a
      className="flex items-center justify-center rounded bg-gray-200 px-5 py-2 text-sm font-medium leading-snug text-black opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      onClick={() => signIn("google")}
      role="button"
    >
      Sign in
    </a>
  ) : (
    <a className="text-blue-800" onClick={() => signIn("google")} role="button">
      <b>Sign in</b>
    </a>
  );
};
