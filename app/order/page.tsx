import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { OrderForm } from "@/components/order-form";
import { OrderSuccessForm } from "@/components/order-success-form";

export default async function Order() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const productPromise = prisma.event
    .findUnique({ where: { title: "bq2024" } })
    .products();

  const userOrderPromise = user?.email
    ? prisma.order.findFirst({
        where: { userEmail: user.email },
        include: { orderItems: true },
      })
    : Promise.resolve(null);

  const [bq2024Products, userOrder] = await Promise.all([
    productPromise,
    userOrderPromise,
  ]);

  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      {userOrder ? (
        <OrderSuccessForm
          products={bq2024Products || []}
          userOrder={userOrder}
        />
      ) : (
        <OrderForm products={bq2024Products || []} user={user} />
      )}
    </div>
  );
}
