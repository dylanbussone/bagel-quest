import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignIn } from "./sign-in";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const headerLinkStyle =
    "opacity-80 hover:opacity-100 transition duration-150 ease-in-out flex items-center";

  // TODO: check if user has voted
  const userHasVoted = false;

  // TODO: after 2/17, make results page public with just total votes
  const showPublicResultsPage = false;

  return (
    <header className="h-24 bg-amber-950 px-4 text-white">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-8">
          <Link href="/" className={headerLinkStyle}>
            <Image
              src="/bagel-icon-white.svg"
              width={50}
              height={50}
              alt="bagel"
            />
          </Link>
          <Link href="/lineup" className={headerLinkStyle}>
            Lineup
          </Link>
          <Link href="/order" className={headerLinkStyle}>
            Order
          </Link>
          {user && !userHasVoted ? (
            <Link href="/vote" className={headerLinkStyle}>
              Vote
            </Link>
          ) : showPublicResultsPage ? (
            <Link href="/results" className={headerLinkStyle}>
              Results
            </Link>
          ) : null}
        </div>
        {user ? (
          <>
            <div className="flex items-center">
              {user.image ? (
                <Link href="/user">
                  <Image
                    src={user.image}
                    width={50}
                    height={50}
                    className="rounded-full opacity-80 transition duration-150 ease-in-out hover:opacity-100"
                    alt={`profile photo of ${user.name}`}
                    priority
                  />
                </Link>
              ) : null}
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </header>
  );
}
