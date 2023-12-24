import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@/components/sign-in";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center justify-between sm:mt-16">
        <h1 className="font-semibold">Bagel Quest</h1>
        <Image
          src="/bagel-icon-dark.svg"
          width={200}
          height={200}
          alt="bagel"
          className="animate-spin-slow my-6"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl text-center mt-8">🥯 Bagel Quest is back 🥯</h2>
        <h3 className="text-lg text-center mb-8">Bigger and Better in 2024!</h3>
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

      <div className="colored-grid grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 sm:mt-16 text-white">
        <div className="bg-darkest-kelly">
          <h2 className="text-2xl text-center font-semibold">👥 Sign Up</h2>
          <p className="my-4">
            <span className="mt-2 block">
              <SignIn renderAsButton={false} />{" "}
              <span>
                to become part of the Bagel Quest crew! Once you're signed up,
                you can head over to the{" "}
                <Link href="/order" className="underline">
                  <b>Order page</b>
                </Link>{" "}
                to get your ticket. Registration shuts down on{" "}
                <b>February 1st</b>.
              </span>
            </span>
          </p>
        </div>

        <div className="bg-darkest-alice">
          <h2 className="text-2xl text-center font-semibold">🌆 The Lineup</h2>
          <p className="my-4">
            <span className="mt-2 block">
              We've curated a fantastic lineup of 12 top bagel contenders across
              Seattle. From classic to creative, each spot brings its A-game. As
              a Bagel Quest participant, you get to indulge in them all and cast
              your vote for the ultimate bagel.
            </span>
          </p>
        </div>

        <div className="bg-darkest-orange">
          <h2 className="text-2xl text-center font-semibold">
            📣 Be the Judge
          </h2>
          <p className="my-4">
            <span className="mt-2 block">
              Who needs experts? It's all about YOUR taste buds. Dive into each
              bagel, savor the flavors, and let us know which one deserves the
              crown. We're keeping it simple: rate each bagel based on taste,
              texture, and overall bagel greatness.
            </span>
          </p>
        </div>

        <div className="bg-darkest-indigo">
          <h2 className="text-2xl text-center font-semibold">
            🎉 Bagel Pickup
          </h2>
          <p className="my-4">
            <span className="mt-2 block">
              Pick up your bagels from our home and savor them in the comfort of
              your home.{" "}
              <b>
                Bagel Pickup will be on February 17th from 9am - 12pm in West
                Seattle
              </b>{" "}
              (address will be sent following your order).
            </span>
          </p>
        </div>
      </div>
      <p className="mt-12">
        While enjoying your bagel experience, use the website to cast your vote.
        The winner will be announced on 2/17 at 4pm.
        <br /> Your ratings will be securely stored for you to revisit the next
        time you're in the mood for a Seattle bagel.
      </p>

      <div className="mt-16">
        <h2 className="text-2xl mt-8">🏆 Prizes 🏆</h2>
        <p className="my-4">
          <span className="mt-2 block">
            Every bagel shop that clinches a winning spot (first through fifth
            place) will be presented with a special commemorative sign to
            proudly display on their wall. In addition, the top three bagel
            shops will receive a cash prize:
          </span>
          <br />
          <span className="flex flex-col items-center gap-2">
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
    </>
  );
}
