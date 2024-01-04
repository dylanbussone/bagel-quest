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

  return (
    <header className="h-24 px-4 border-b bg-slate-800 text-white">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between">
        <div className="flex gap-5 sm:gap-8 items-center">
          <Link href="/" className={headerLinkStyle}>
            <Image
              src="/bagel-icon-light.svg"
              width={50}
              height={50}
              alt="bagel"
            />
          </Link>
          {user && (
            <>
              <Link href="/lineup" className={headerLinkStyle}>
                Lineup
              </Link>
              <Link href="/order" className={headerLinkStyle}>
                Order
              </Link>
              <Link href="/vote" className={headerLinkStyle}>
                Vote
              </Link>
            </>
          )}
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
                    className="rounded-full opacity-80 hover:opacity-100 transition duration-150 ease-in-out"
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
