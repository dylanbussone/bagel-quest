"use client";

import { signIn } from "next-auth/react";

export const SignIn = ({ callbackUrl = "/order", renderAsButton = true }) => {
  return renderAsButton ? (
    <a
      className="py-2 px-5 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center"
      style={{ backgroundColor: "#e5e5e5" }}
      onClick={() => signIn("google", { callbackUrl })}
      role="button"
    >
      Sign in
    </a>
  ) : (
    <a
      className="hover:underline text-blue-800"
      onClick={() => signIn("google", { callbackUrl })}
      role="button"
    >
      <b>Sign in</b>
    </a>
  );
};
