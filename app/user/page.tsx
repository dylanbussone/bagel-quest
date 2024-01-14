import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignIn } from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default async function User() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return user ? (
    <div className="mt-24 flex flex-col items-center justify-center">
      <p className="text-md mb-3 text-center font-semibold">
        Signed in as {user?.name} ({user?.email})
      </p>
      <p>
        <SignOut />
      </p>
    </div>
  ) : (
    <div className="mt-24 flex flex-col items-center justify-center">
      <SignIn />
    </div>
  );
}
