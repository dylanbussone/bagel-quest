import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignOut from "@/components/sign-out";

export default async function User() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <div className="max-w-4xl mx-auto flex justify-center items-center flex-col mt-24">
      <p className="mb-3 text-md text-center font-semibold">
        Signed in as {user.name} ({user.email})
      </p>
      <p>
        <SignOut />
      </p>
    </div>
  );
}
