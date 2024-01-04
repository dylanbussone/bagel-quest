import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@/components/sign-in";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center justify-between mt-8 sm:mt-16">
        <h1 className="font-bold py-4 text-5xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
          Bagel Quest
        </h1>
        <Image
          src="/bagel-icon-dark.svg"
          width={200}
          height={200}
          alt="bagel"
          className="animate-spin-slow my-6"
        />
      </div>
      <div className="mt-2 sm:mb-20">
        <h2 className="text-2xl text-center">It's back.</h2>
        <h3 className="text-xl text-center mt-4 mb-8">🥯 2/17/2024 🥯</h3>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-20 mt-8">
        <div className="border-t border-gray-300 sm:border-none pt-4 sm:pt-0">
          <h2 className="text-3xl font-semibold">👥 Sign Up</h2>
          <p className="my-4">
            <span className="mt-2 block">
              <SignIn renderAsButton={false} />{" "}
              <span>
                to become part of the Bagel Quest crew! Once you're signed up,
                you can head over to the{" "}
                {/* TODO: for non-logged-in users should open sign in link */}
                <Link href="/order" className="text-blue-800">
                  <b>Order page</b>
                </Link>{" "}
                to get your ticket.
                <br />
                Registration shuts down on <b>February 1st</b>.
              </span>
            </span>
          </p>
        </div>

        <div className="border-t border-gray-300 sm:border-none pt-4 sm:pt-0">
          <h2 className="text-3xl font-semibold">🌆 The Lineup</h2>
          <p className="my-4">
            <span className="mt-2 block">
              We've curated a fantastic lineup of the top bagel contenders
              across Seattle. From classic to creative, each spot brings its
              A-game. As a Bagel Quest participant, you get to indulge in them
              all and cast your vote for the ultimate bagel.
            </span>
          </p>
        </div>

        <div className="border-t border-gray-300 sm:border-none pt-4 sm:pt-0">
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

        <div className="border-t border-gray-300 sm:border-none pt-4 sm:pt-0">
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

        <div className="border-t border-gray-300 sm:border-none pt-4 sm:pt-0 sm:col-span-2 sm:text-center">
          <h2 className="text-3xl font-semibold">🏆 Prizes 🏆</h2>
          <p className="my-4">
            <span className="mt-2 block">
              Every bagel shop that clinches a winning spot (first through fifth
              place) will be presented with a special commemorative sign to
              proudly display on their wall. In addition, the top three bagel
              shops will receive a cash prize:
            </span>
            <br />
            <span className="flex flex-col sm:items-center gap-2">
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
