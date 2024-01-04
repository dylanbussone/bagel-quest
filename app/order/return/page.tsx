"use client";

import Image from "next/image";
import Link from "next/link";

export default function Return() {
  const status = "complete";
  const customerEmail = "foo@foo.com";
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
