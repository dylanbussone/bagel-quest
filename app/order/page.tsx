import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { OrderForm } from "@/components/order-form";
import ForceSignIn from "@/components/force-sign-in";

export default async function Order() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="text-3xl mb-12 font-bold">Place your order</h1>
      <OrderForm />
      <ForceSignIn user={user} />
    </div>
  );
}
