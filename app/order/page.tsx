import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export default async function Order() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-24">
      <h1 className="text-3xl font-bold">Order</h1>

      {/* TODO form where users create a cart of item ids */}

      <Link className="mt-16 w-full sm:w-auto" href="/order/checkout">
        <button className="py-2 px-12 w-full font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-gray-200 text-black opacity-90 hover:opacity-100">
          Checkout
        </button>
      </Link>
    </div>
  );
}
