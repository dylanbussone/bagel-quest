import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function User() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center flex-col mt-24">
      <p className="text-center">Order page coming soon.</p>
    </div>
  );
}
