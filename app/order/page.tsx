import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { OrderForm } from "@/components/order-form";

export default async function Order() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <OrderForm user={user} />
    </div>
  );
}
