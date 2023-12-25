import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Stripe } from "@/app/components/stripe";

export default async function Checkout() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-24">
      <Stripe />
    </div>
  );
}
