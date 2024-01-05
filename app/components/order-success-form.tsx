"use client";

import Image from "next/image";
import type { Product, Order, OrderItem } from "@prisma/client";

export const OrderSuccessForm = ({
  products,
  userOrder,
}: {
  products: Product[];
  userOrder: Order & { orderItems: OrderItem[] };
}) => {
  const { orderItems } = userOrder;

  const totalPrice = orderItems.reduce((acc, orderItem) => {
    const product = products?.find(
      (product) => product.id === orderItem.productId
    );
    if (product) {
      return acc + product.price * orderItem.quantity;
    }
    return acc;
  }, 0);

  return (
    <>
      <h1 className="text-4xl sm:text-6xl py-4 font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        Your order
      </h1>

      <p className="mb-6">Thank you for your participation in Bagel Quest!</p>
      <div className="w-full sm:w-1/2 m-auto flex justify-center items-center flex-col">
        <table className="border-collapse table-auto w-full text-left mb-8">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((orderItem) => {
              const product = products?.find(
                (product) => product.id === orderItem.productId
              );
              return (
                product && (
                  <tr key={orderItem.id}>
                    <td>{product.name}</td>
                    <td>{orderItem.quantity}</td>
                    <td>${product.price}</td>
                    <td>${product.price * orderItem.quantity}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
        <p className="text-lg font-semibold">Total: ${totalPrice}</p>
        <div className="flex flex-col mt-8 w-full justify-center items-center">
          <p className="font-semibold mb-4">
            {" "}
            To complete payment, send ${totalPrice} to{" "}
            <a
              href="https://venmo.com/u/Dylan-Bussone"
              target="_blank"
              className="text-blue-800"
            >
              @Dylan-Bussone
            </a>
            .
          </p>
          <a href="https://venmo.com/u/Dylan-Bussone" target="_blank">
            <Image src="/venmo.png" width={200} height={200} alt="bagel" />
          </a>
        </div>
        <p className="mt-8 text-center">
          You'll receive an email 1 week before the event with all the details
          you need. Let's bagel!
        </p>
      </div>
    </>
  );
};
