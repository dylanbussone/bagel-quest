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

      <div className="mt-16">
        <h2 className="text-2xl mt-8">👥 Sign Up</h2>
        <p className="my-4">
          <span className="mt-2 block">
            <SignIn renderAsButton={false} />{" "}
            <span>
              to become part of the Bagel Quest crew! Once you're signed up, you
              can head over to the{" "}
              <Link href="/order" className="hover:underline text-blue-800">
                <b>Order page</b>
              </Link>{" "}
              to get your ticket. Registration shuts down on <b>February 1st</b>
              .
            </span>
          </span>
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl mt-8">🌆 The Lineup</h2>
        <p className="my-4">
          <span className="mt-2 block">
            We've curated a fantastic lineup of 12 top bagel contenders across
            Seattle. From classic to creative, each spot brings its A-game. As a
            Bagel Quest participant, you get to indulge in them all and cast
            your vote for the ultimate bagel.
          </span>
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl mt-8">📣 Be the Judge</h2>
        <p className="my-4">
          <span className="mt-2 block">
            Who needs experts? It's all about YOUR taste buds. Dive into each
            bagel, savor the flavors, and let us know which one deserves the
            crown. We're keeping it simple: rate each bagel based on taste,
            texture, and overall bagel greatness.
          </span>
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl mt-8">🎉 Bagel Pickup</h2>
        <p className="my-4">
          <span className="mt-2 block">
            Pick up your bagels from our home and savor them in the comfort of
            your home.{" "}
            <b>
              Bagel Pickup will be on February 17th from 9am - 12pm in West
              Seattle
            </b>{" "}
            (address will be sent following your order).
            <br />
            <br />
            After enjoying your bagel experience, head to our website to cast
            your vote. The winner will be announced at 4 pm. Your selections
            will be securely stored for you to revisit the next time you're in
            the mood for a Seattle bagel.
          </span>
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl mt-8">🏆 Prizes</h2>
        <p className="my-4">
          <span className="mt-2 block">
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
            <br />
            Every bagel shop that clinches a winning spot (even those in 4th and
            5th place) will be presented with a special commemorative sign to
            proudly display on their wall.
          </span>
        </p>
      </div>
    </>
  );
}
