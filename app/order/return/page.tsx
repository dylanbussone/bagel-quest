"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Return() {
  const [status, setStatus] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const sessionId = useSearchParams().get("session_id");

  useEffect(() => {
    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  if (status === "open") {
    return redirect("/");
  }

  let body = null;

  if (status === "complete") {
    body = (
      <div className="text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold">You're booked!</h2>
        <br />
        <div className="flex gap-4">
          <Image
            src="/bagel-icon-dark.svg"
            width={200}
            height={200}
            alt="bagel"
            className="my-4"
          />
          <Image
            src="/bagel-icon-dark.svg"
            width={200}
            height={200}
            alt="bagel"
            className="my-4 hidden sm:block"
          />
          <Image
            src="/bagel-icon-dark.svg"
            width={200}
            height={200}
            alt="bagel"
            className="my-4 hidden sm:block"
          />
        </div>
        <br />A confirmation email will be sent to {customerEmail}.<br />
        If you have any questions, please email{" "}
        <a href="mailto:srleviton@gmail.com" className="text-blue-800">
          srleviton@gmail.com
        </a>
        .
      </div>
    );
  } else if (status === "error") {
    body = (
      <p>
        There was an error processing your payment. Please{" "}
        <Link href="/order" className="text-blue-800">
          try again
        </Link>{" "}
        or email{" "}
        <a href="mailto:srleviton@gmail.com" className="text-blue-800">
          srleviton@gmail.com
        </a>
        .
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-24">
      {body}
    </div>
  );
}
