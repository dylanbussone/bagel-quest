import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignIn } from "@/components/sign-in";
import SignOut from "@/components/sign-out";

export default async function User() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return user ? (
    <div className="flex justify-center items-center flex-col mt-24">
      <p className="mb-3 text-md text-center font-semibold">
        Signed in as {user?.name} ({user?.email})
      </p>
      <p>
        <SignOut />
      </p>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col mt-24">
      <SignIn />
    </div>
  );
}
