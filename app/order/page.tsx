"use client";

import { useState } from "react";
import Link from "next/link";
import { Stripe } from "@/components/stripe";

type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  forceQuantity?: boolean;
  imageUrl?: string;
};
const items: Item[] = [
  {
    id: "price_1OR0NpCQF0PDqGDIrU1xR4dy",
    name: "Bagel Quest ticket",
    description:
      "This is to verify that only paid participants can vote. Groups/couples: please purchase tickets individually through your own accounts.",
    price: 20,
    forceQuantity: true,
    // imageUrl:
  },
  {
    id: "price_1OR0OqCQF0PDqGDIWCvY3pkz",
    name: "Plain Schmear (8oz)",
    description: "Sourced locally from Dingfelders Deli.",
    price: 8,
    // imageUrl:
  },
  {
    id: "price_1OR0PtCQF0PDqGDIOlHhmy5K",
    name: "Nova Schmear (8oz)",
    description: "Sourced locally from Dingfelders Deli.",
    price: 13,
    // imageUrl:
  },
  {
    id: "price_1OR0R1CQF0PDqGDIjoO9Tkcb",
    name: "Nova Lox (4oz)",
    description: "Sourced locally from Dingfelders Deli.",
    price: 12,
    // imageUrl:
  },
];

export default function Order() {
  const [checkout, setCheckout] = useState(false);
  const [testShmearQuantity, setTestShmearQuantity] = useState(0);
  const [plainShmearQuantity, setPlainShmearQuantity] = useState(0);
  const [novaShmearQuantity, setNovaShmearQuantity] = useState(0);
  const [novaLoxQuantity, setNovaLoxQuantity] = useState(0);

  const handleSelectChange = (itemName: string, value: string) => {
    const quantity = parseInt(value);

    switch (itemName) {
      case "TEST SCHMEAR":
        setTestShmearQuantity(quantity);
        break;
      case "Plain Schmear (8oz)":
        setPlainShmearQuantity(quantity);
        break;
      case "Nova Schmear (8oz)":
        setNovaShmearQuantity(quantity);
        break;
      case "Nova Lox (4oz)":
        setNovaLoxQuantity(quantity);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="text-3xl mb-12 font-bold">Place your order</h1>

      {checkout ? (
        <div className="w-full sm:w-1/2 m-auto flex justify-center items-center flex-col">
          <p className="mb-8 text-center">
            You will receive a confirmation email with your bagel pickup
            information once payment is completed.
          </p>
          <button
            className="py-2 px-12 mb-12 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-gray-200 text-black opacity-90 hover:opacity-100"
            onClick={() => setCheckout(false)}
          >
            Change selection
          </button>
          <p>Payment coming soon</p>
          {/* <Stripe
            testShmearQuantity={testShmearQuantity}
            plainShmearQuantity={plainShmearQuantity}
            novaShmearQuantity={novaShmearQuantity}
            novaLoxQuantity={novaLoxQuantity}
          /> */}
        </div>
      ) : (
        <>
          <ul className="list-disc mb-2 sm:mb-4 w-full sm:w-1/2 gap-4 sm:gap-12 pl-4">
            <li>
              Each ticket includes a portion of a bagel from 12 different bagel
              shops (2 bagels-worth in total).
            </li>
            <li>Packaged in environmentally friendly materials.</li>
            <li>
              Shmear and lox sourced locally from{" "}
              <a
                href="https://dingfelders.com/"
                target="_blank"
                className="text-blue-800"
              >
                Dingfelders Deli
              </a>{" "}
              in Capitol Hill.
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

          {items.map((item) => {
            let selectedQuantity = 0;

            switch (item.name) {
              case "TEST SCHMEAR":
                selectedQuantity = testShmearQuantity;
                break;
              case "Plain Schmear (8oz)":
                selectedQuantity = plainShmearQuantity;
                break;
              case "Nova Schmear (8oz)":
                selectedQuantity = novaShmearQuantity;
                break;
              case "Nova Lox (4oz)":
                selectedQuantity = novaLoxQuantity;
                break;
              default:
                break;
            }
            return (
              <div
                key={item.id}
                className="flex flex-row justify-between items-center w-full sm:w-1/2 gap-4 sm:gap-12 py-8 border-t"
              >
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold flex items-baseline">
                    {item.name}
                    <span className="text-base pl-4 text-green-900">
                      ${item.price}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-800">
                    {item.forceQuantity && (
                      <>
                        <b>Mandatory, 1 per user.</b>
                        <br />
                      </>
                    )}
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-row items-center justify-center">
                  <label className="pr-2" htmlFor="quantity">
                    <b>Qty</b>
                  </label>
                  {item.forceQuantity ? (
                    <select name="quantity" value={1} disabled>
                      <option value="1">1</option>
                    </select>
                  ) : (
                    <select
                      name="quantity"
                      value={selectedQuantity}
                      onChange={(e) =>
                        handleSelectChange(item.name, e.target.value)
                      }
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
            className="py-2 px-12 my-8 w-full sm:w-auto font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-gray-200 text-black opacity-90 hover:opacity-100"
            onClick={() => setCheckout(true)}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
