"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <a
      className="p-2 max-w-28 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
      style={{ backgroundColor: "#e5e5e5" }}
      onClick={() => signOut()}
      role="button"
    >
      Sign out
    </a>
  );
}
