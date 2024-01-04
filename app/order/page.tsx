import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { OrderForm } from "@/components/order-form";
import ForceSignIn from "@/components/force-sign-in";

export default async function Order() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <OrderForm
        name={user?.name ?? undefined}
        email={user?.email ?? undefined}
      />
      <ForceSignIn user={user} />
    </div>
  );
}
