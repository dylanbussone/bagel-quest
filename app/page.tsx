import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@/components/sign-in";

export default function () {
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-between sm:mt-16">
        <h1 className="bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-5xl font-bold text-transparent sm:text-8xl">
          Bagel Quest
        </h1>
        <Image
          src="/bagel-icon-dark.svg"
          width={200}
          height={200}
          alt="bagel"
          className="my-6 animate-spin-slow"
        />
      </div>
      <div className="mt-2 sm:mb-20">
        <h2 className="text-center text-2xl">It's back.</h2>
        <h3 className="mb-8 mt-4 text-center text-xl">🥯 2/17/2024 🥯</h3>
        <p className="my-4">
          <b>Hey Bagel Lovers!</b>
          <span className="mt-2 block">
            After a wildly successful competition in 2020, Bagel Quest is making
            a triumphant return in 2024, and we want YOU to be a part of the
            delicious action! Whether you're a seasoned bagel aficionado or just
            love a good, doughy delight, sign up and let your taste buds lead
            the way.
          </span>
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-20">
        <div className="border-t border-gray-300 pt-4 sm:border-none sm:pt-0">
          <h2 className="text-3xl font-semibold">👥 Sign Up</h2>
          <p className="my-4">
            <span className="mt-2 block">
              <SignIn renderAsButton={false} />{" "}
              <span>
                to become part of the Bagel Quest crew! Once you're signed up,
                you can head over to the{" "}
                <Link href="/order" className="text-blue-800">
                  <b>Order page</b>
                </Link>{" "}
                to claim your ticket.
                <br />
                Registration shuts down on <b>February 1st</b>.
              </span>
            </span>
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4 sm:border-none sm:pt-0">
          <h2 className="text-3xl font-semibold">🌆 The Lineup</h2>
          <p className="my-4">
            <span className="mt-2 block">
              We've curated a fantastic{" "}
              <Link href="/lineup" className="text-blue-800">
                <b>lineup</b>
              </Link>{" "}
              of the top bagel contenders across Seattle. From classic to
              creative, each spot brings its A-game. As a Bagel Quest
              participant, you get to indulge in them all and cast your vote for
              the ultimate bagel.
            </span>
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4 sm:border-none sm:pt-0">
          <h2 className="text-3xl font-semibold">🎉 Bagel Pickup</h2>
          <p className="my-4">
            <span className="mt-2 block">
              Pick up your bagels from our home and savor them in the comfort of
              your home.{" "}
              <b>
                Bagel Pickup will be on February 17th from 10am - 1pm in West
                Seattle
              </b>{" "}
              (exact address with confirmation of your order will be sent 1 week
              before the event).
            </span>
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4 sm:border-none sm:pt-0">
          <h2 className="text-3xl font-semibold">🗳️ Vote</h2>
          <p className="my-4">
            <span className="mt-2 block">
              While enjoying your bagel experience, use the website to cast your
              vote. The winner will be announced on 2/17 at 4pm. Your ratings
              will be securely stored for you to revisit the next time you're in
              the mood for a Seattle bagel.
            </span>
          </p>
        </div>

        <div className="border-t border-gray-300 pt-4 sm:col-span-2 sm:border-none sm:pt-0 sm:text-center">
          <h2 className="text-3xl font-semibold">🏆 Prizes 🏆</h2>
          <p className="my-4">
            <span className="mt-2 block">
              Every bagel shop that clinches a winning spot (first through fifth
              place) will be presented with a special commemorative sign to
              proudly display on their wall. In addition, the top three bagel
              shops will receive a cash prize:
            </span>
            <br />
            <span className="flex flex-col gap-2 sm:items-center">
              <span>
                🥇 First Place: <b>$400</b>
              </span>
              <span>
                🥈 Second Place: <b>$200</b>
              </span>
              <span>
                🥉 Third Place: <b>$100</b>
              </span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
