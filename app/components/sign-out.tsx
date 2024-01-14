"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <a
      className="mt-4 flex items-center justify-center rounded px-6 py-3 text-sm font-medium leading-snug shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: "#e5e5e5" }}
      onClick={() => signOut()}
      role="button"
    >
      Sign out
    </a>
  );
}
