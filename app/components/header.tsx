import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignIn } from "./sign-in";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <header className="h-28 px-4 border-b bg-darkest-indigo text-white">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between">
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {user && (
            <Link href="/order" className="hover:underline">
              Order
            </Link>
          )}
        </div>
        {user ? (
          <>
            <div className="flex items-center">
              {user.image ? (
                <Link href="/user">
                  <Image
                    src={user.image}
                    width={60}
                    height={60}
                    className="rounded-full opacity-90 hover:opacity-100 transition duration-150 ease-in-out"
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
