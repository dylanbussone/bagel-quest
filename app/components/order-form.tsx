"use client";

import Image from "next/image";
import { useState } from "react";
import * as constants from "@/utils/constants";

type Item = {
  name: string;
  description: string;
  price: number;
  forceQuantity?: boolean;
};
const items: Item[] = [
  {
    name: "Bagel Quest ticket",
    description:
      "This is to verify that only paid participants can vote. Groups/couples: please purchase tickets individually through your own accounts.",
    price: constants.BAGEL_QUEST_TICKET_PRICE,
    forceQuantity: true,
  },
  {
    name: "Plain Schmear (8oz)",
    description: "Sourced locally from Dingfelders Deli.",
    price: constants.PLAIN_SHMEAR_PRICE,
  },
  {
    name: "Nova Schmear (8oz)",
    description: "Sourced locally from Dingfelders Deli.",
    price: constants.NOVA_SHMEAR_PRICE,
  },
  {
    name: "Nova Lox (4oz)",
    description: "Sourced locally from Dingfelders Deli.",
    price: constants.NOVA_LOX_PRICE,
  },
];

export const OrderForm = ({
  name, // TODO: use for prefilling POST
  email,
}: {
  name?: string;
  email?: string;
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // TODO: get default value from db. do we have a row saved for this user? if so, show some different content (straight to venmo stuff). Maybe give option to change order?
  const [plainShmearQuantity, setPlainShmearQuantity] = useState(0);
  const [novaShmearQuantity, setNovaShmearQuantity] = useState(0);
  const [novaLoxQuantity, setNovaLoxQuantity] = useState(0);

  const handleSelectChange = (itemName: string, value: string) => {
    const quantity = parseInt(value);

    switch (itemName) {
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

  const handleConfirmation = async () => {
    // TODO: bagel spinner, await adding row to table for user
    // then:
    setShowConfirmation(true);
  };

  const cartContent = (
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
            key={item.name}
            className="flex flex-row justify-between items-center w-full sm:w-1/2 gap-4 sm:gap-12 py-8 border-t border-gray-300"
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
        onClick={() => {
          setShowCheckout(true);
          window.scrollTo(0, 0);
        }}
      >
        Checkout
      </button>
    </>
  );

  const totalPrice =
    constants.BAGEL_QUEST_TICKET_PRICE +
    plainShmearQuantity * constants.PLAIN_SHMEAR_PRICE +
    novaShmearQuantity * constants.NOVA_SHMEAR_PRICE +
    novaLoxQuantity * constants.NOVA_LOX_PRICE;

  const checkoutContent = (
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
          <tr>
            <td>Bagel Quest Ticket</td>
            <td>1</td>
            <td>${constants.BAGEL_QUEST_TICKET_PRICE}</td>
            <td>${constants.BAGEL_QUEST_TICKET_PRICE}</td>
          </tr>
          {plainShmearQuantity > 0 && (
            <tr>
              <td>Plain Shmear</td>
              <td>{plainShmearQuantity}</td>
              <td>${constants.PLAIN_SHMEAR_PRICE}</td>
              <td>${plainShmearQuantity * constants.PLAIN_SHMEAR_PRICE}</td>
            </tr>
          )}
          {novaShmearQuantity > 0 && (
            <tr>
              <td>Nova Shmear</td>
              <td>{novaShmearQuantity}</td>
              <td>${constants.NOVA_SHMEAR_PRICE}</td>
              <td>${novaShmearQuantity * constants.NOVA_SHMEAR_PRICE}</td>
            </tr>
          )}
          {novaLoxQuantity > 0 && (
            <tr>
              <td>Nova Lox</td>
              <td>{novaLoxQuantity}</td>
              <td>${constants.NOVA_LOX_PRICE}</td>
              <td>${novaLoxQuantity * constants.NOVA_LOX_PRICE}</td>
            </tr>
          )}
        </tbody>
      </table>

      <p className="text-lg font-semibold">Total: ${totalPrice}</p>

      {!showConfirmation && (
        <>
          <div className="flex my-8 gap-8 w-full justify-between items-center flex-col sm:flex-row">
            <button
              className="w-full sm:w-auto py-2 px-8 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-gray-200 text-black opacity-90 hover:opacity-100"
              onClick={() => setShowCheckout(false)}
            >
              Change selection
            </button>
            <button
              className="w-full sm:w-auto py-2 px-8 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center bg-green-800 text-white opacity-90 hover:opacity-100"
              onClick={handleConfirmation}
            >
              Confirm selection
            </button>
          </div>
        </>
      )}
      {showConfirmation && (
        <div className="flex flex-col mt-8 w-full justify-center items-center">
          <p className="mb-6">Your order has been received!</p>
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
        // <p className="mt-8 text-center">
        //   You will receive a confirmation email with your bagel pickup information
        //   once payment is completed.
        // </p>
      )}
    </div>
  );

  return (
    <>
      <h1 className="text-4xl sm:text-6xl py-4 font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        {showConfirmation ? "Your order" : "Place your order"}
      </h1>
      {showCheckout ? checkoutContent : cartContent}
    </>
  );
};
