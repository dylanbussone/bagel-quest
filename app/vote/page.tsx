import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Vote() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="sm:text-6xl text-4xl py-4 mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        Cast your votes
      </h1>
      <p>Voting opens 2/17</p>
    </div>
  );
}
