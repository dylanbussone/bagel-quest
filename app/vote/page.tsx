import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Vote() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Cast your votes
      </h1>
      <p>Voting opens 2/17</p>
    </div>
  );
}
