import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { OrderForm } from "@/components/order-form";

export default async function Order() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const bq2024Products =
    (await prisma.event
      .findUnique({ where: { title: "bq2024" } })
      .products()) || [];

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <OrderForm user={user} products={bq2024Products} />
    </div>
  );
}
