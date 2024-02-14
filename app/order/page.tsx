import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { AtCapacity } from "@/components/at-capacity";
import { OrderForm } from "@/components/order-form";
import { OrderSuccessForm } from "@/components/order-success-form";

const CAPACITY = 208;

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

  const paidOrderCountPromise = prisma.order.count({
    where: {
      event: {
        title: "bq2024",
      },
      OR: [
        { exempt: true },
        {
          paid: {
            gt: 1,
          },
        },
      ],
    },
  });

  const [bq2024Products, userOrder, paidOrderCount] = await Promise.all([
    productPromise,
    userOrderPromise,
    paidOrderCountPromise,
  ]);

  const atCapacity = paidOrderCount >= CAPACITY;

  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      {userOrder ? (
        <OrderSuccessForm
          products={bq2024Products || []}
          userOrder={userOrder}
        />
      ) : atCapacity ? (
        <AtCapacity />
      ) : (
        <OrderForm products={bq2024Products || []} user={user} />
      )}
    </div>
  );
}
