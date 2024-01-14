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
  const { orderItems, paid, exempt } = userOrder;

  const totalPrice = orderItems.reduce((acc, orderItem) => {
    const product = products?.find(
      (product) => product.id === orderItem.productId,
    );
    if (product) {
      return acc + product.price * orderItem.quantity;
    }
    return acc;
  }, 0);

  return (
    <>
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Your order
      </h1>

      <p className="mb-6">Thank you for your participation in Bagel Quest!</p>
      <div className="m-auto flex w-full flex-col items-center justify-center sm:w-1/2">
        <table className="mb-8 w-full table-auto border-collapse text-left">
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
                (product) => product.id === orderItem.productId,
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
        <div className="mt-8 flex w-full flex-col items-center justify-center">
          {exempt || paid >= totalPrice ? (
            <p className="font-semibold">Payment has been received!</p>
          ) : (
            <>
              <p className="mb-4 font-semibold">
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
            </>
          )}
        </div>
        <p className="mt-8 text-center">
          You'll receive an email 1 week before the event with all the details
          you need. Let's bagel!
        </p>
      </div>
    </>
  );
};
