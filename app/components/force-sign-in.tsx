"use client";

import type { DefaultSession } from "next-auth";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function ForceSignIn({
  user,
}: {
  user?: DefaultSession["user"];
}) {
  useEffect(() => {
    if (!user?.email) {
      signIn("google");
    }
  }, []);

  return "";
}
