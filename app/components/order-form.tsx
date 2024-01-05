"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import type { DefaultSession } from "next-auth";
import type { Product } from "@prisma/client";

// Map of productId to quantity
interface ProductQuantities {
  [key: string]: number;
}

export const OrderForm = ({
  user,
  products,
}: {
  user?: DefaultSession["user"];
  products: Product[];
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [productQuantities, setProductQuantities] = useState<ProductQuantities>(
    {
      [products.filter((p) => p.name === "Bagel Quest ticket")[0].id]: 1,
    }
  );

  const handleSelectChange = (product: Product, value: string) => {
    const quantity = parseInt(value);

    setProductQuantities({
      ...productQuantities,
      [product.id]: quantity,
    });
  };

  const handleConfirmation = async () => {
    setShowSpinner(true);

    // Create order
    const orderItems = Object.keys(productQuantities).map((productId) => {
      return {
        productId: parseInt(productId),
        quantity: productQuantities[productId],
      };
    });

    await fetch("/api/create-bq2024-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: user?.email,
        userName: user?.name,
        orderItems,
      }),
    });
    window.location.reload();
  };

  const cartContent = (
    <>
      <ul className="list-disc mb-2 sm:mb-4 w-full sm:w-2/3 gap-4 sm:gap-12 pl-4">
        <li>
          Each ticket includes a portion of a bagel from at least 12 shops
          (about 3 bagels-worth in total).
        </li>
        <li>Packaged in environmentally friendly materials.</li>
        <li>
          All schmear and lox are sourced from one of our many local bagel
          businesses.
        </li>
        <li>
          All profits will be donated to the{" "}
          <a
            href="https://westseattlefoodbank.org/"
            target="_blank"
            className="text-blue-800"
          >
            West Seattle Food Bank
          </a>
          .
        </li>
      </ul>

      {products.map((product) => {
        const forceQuantity = product.name === "Bagel Quest ticket";

        return (
          <div
            key={product.name}
            className="flex flex-row justify-between items-center w-full sm:w-2/3 gap-4 sm:gap-12 py-8 border-t border-gray-300"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-bold flex items-baseline">
                {product.name}
                <span className="text-base pl-4 text-green-900">
                  ${product.price}
                </span>
              </h2>
              <p className="text-sm text-gray-800">
                {forceQuantity && (
                  <>
                    <b>Mandatory, 1 per user.</b>
                    <br />
                    <span>
                      This is to verify that only paid participants can vote.
                      Groups/couples: please purchase tickets individually
                      through your own accounts so you can vote!
                    </span>
                  </>
                )}
                {product.description}
              </p>
            </div>

            <div className="flex flex-row items-center justify-center">
              <label className="pr-2" htmlFor="quantity">
                <b>Qty</b>
              </label>
              {forceQuantity ? (
                <select name={`${product.id}-quantity`} value={1} disabled>
                  <option value="1">1</option>
                </select>
              ) : (
                <select
                  name={`${product.id}-quantity`}
                  value={productQuantities[product.id]}
                  onChange={(e) => handleSelectChange(product, e.target.value)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              )}
            </div>
          </div>
        );
      })}

      <button
        className="py-2 px-12 my-8 w-full sm:w-auto font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-green-800 text-white opacity-90 hover:opacity-100"
        onClick={() => {
          if (user?.email) {
            setShowCheckout(true);
            window.scrollTo(0, 0);
          } else {
            signIn("google");
          }
        }}
      >
        Checkout
      </button>
    </>
  );

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * (productQuantities[product.id] ?? 0);
  }, 0);

  const checkoutContent = (
    <div className="w-full sm:w-2/3 m-auto flex justify-center items-center flex-col">
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
          {Object.keys(productQuantities).map((productId) => {
            const quantity = productQuantities[productId];
            const product = products.filter(
              (p) => p.id === parseInt(productId)
            )[0];

            return (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{quantity}</td>
                <td>${product.price}</td>
                <td>${product.price * quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="text-lg font-semibold">Total: ${totalPrice}</p>
      <div className="flex mt-8 gap-8 w-full justify-between items-center flex-col sm:flex-row">
        <button
          className="w-full sm:w-auto py-2 px-8 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-gray-200 text-black opacity-90 hover:opacity-100 whitespace-nowrap"
          onClick={() => setShowCheckout(false)}
        >
          Change selection
        </button>
        <button
          className="w-full sm:w-auto py-2 px-8 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-green-800 text-white opacity-90 hover:opacity-100 whitespace-nowrap"
          onClick={handleConfirmation}
        >
          Confirm selection
        </button>
      </div>
      {showSpinner && (
        <Image
          src="/bagel-icon-dark.svg"
          width={50}
          height={50}
          alt="bagel"
          className="animate-spin z-10 my-6"
        />
      )}
    </div>
  );

  return (
    <>
      <h1 className="text-4xl sm:text-6xl py-4 font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        Place your order
      </h1>
      {showCheckout ? checkoutContent : cartContent}
    </>
  );
};
