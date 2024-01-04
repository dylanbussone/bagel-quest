import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ForceSignIn from "@/components/force-sign-in";

export default async function Vote() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="text-3xl mb-12 font-bold">Cast your votes</h1>
      <p>Voting opens 2/17</p>
      <ForceSignIn user={user} />
    </div>
  );
}
