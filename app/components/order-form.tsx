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
    },
  );

  const handleSelectChange = (product: Product, value: string) => {
    const quantity = parseInt(value);

    if (quantity === 0) {
      const newProductQuantities = { ...productQuantities };
      delete newProductQuantities[product.id];
      setProductQuantities(newProductQuantities);
    } else {
      setProductQuantities({
        ...productQuantities,
        [product.id]: quantity,
      });
    }
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
      <ul className="mb-2 w-full list-disc gap-4 pl-4 sm:mb-4 sm:w-2/3 sm:gap-12">
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
            className="flex w-full flex-row items-center justify-between gap-4 border-t border-gray-300 py-8 sm:w-2/3 sm:gap-12"
          >
            <div className="flex flex-col">
              <h2 className="flex items-baseline text-xl font-bold">
                {product.name}
                <span className="pl-4 text-base text-green-900">
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
        className="my-8 flex w-full items-center justify-center rounded bg-green-800 px-12 py-2 text-sm font-medium leading-snug text-white opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg sm:w-auto"
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
    <div className="m-auto flex w-full flex-col items-center justify-center sm:w-2/3">
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
          {Object.keys(productQuantities).map((productId) => {
            const quantity = productQuantities[productId];
            const product = products.filter(
              (p) => p.id === parseInt(productId),
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
      <div className="mt-8 flex w-full flex-col items-center justify-between gap-8 sm:flex-row">
        <button
          className="flex w-full items-center justify-center whitespace-nowrap rounded bg-gray-200 px-8 py-2 text-sm font-medium leading-snug text-black opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg sm:w-auto"
          onClick={() => setShowCheckout(false)}
        >
          Change selection
        </button>
        <button
          className="flex w-full items-center justify-center whitespace-nowrap rounded bg-green-800 px-8 py-2 text-sm font-medium leading-snug text-white opacity-90 shadow-md transition duration-150 ease-in-out hover:opacity-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg sm:w-auto"
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
          className="z-10 my-6 animate-spin"
        />
      )}
    </div>
  );

  return (
    <>
      <h1 className="mb-12 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Place your order
      </h1>
      {showCheckout ? checkoutContent : cartContent}
    </>
  );
};
