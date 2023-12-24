import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignIn } from "./sign-in";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <header className="sticky top-0 h-16 px-4 py-3 border-b border-gray-950 bg-gray-800">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between">
        <div className="text-white flex gap-6">
          <Link href="/">Home</Link>
          {user && <Link href="/order">Order</Link>}
        </div>
        {user ? (
          <>
            <div className="flex items-center">
              {user.image ? (
                <Link href="/user">
                  <Image
                    src={user.image}
                    width={40}
                    height={40}
                    className="rounded-full"
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
