export default function Lineup() {
  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="text-3xl font-bold">Bagel Lineup</h1>
      <div className="w-full flex items-center flex-col gap-16 my-16">
        <div>
          <h2>
            <a
              href="https://loxsmithseattle.com/"
              target="_blank"
              className="text-blue-800"
            >
              Loxsmith
            </a>
          </h2>
          <p>
            Loxsmith Bagel, the undisputed champion of Bagel Quest 2020, holds a
            special place in Seattle's bagel lore. Their mastery of the craft
            catapulted them to the forefront of the city's bustling bagel scene.
            With each bite, Loxsmith's bagels become a journey through layers of
            perfection – a harmonious blend of chewiness and flavor. From the
            classic sesame to the whimsical poppy, their creations are a
            testament to bagel artistry. As the{" "}
            <b>winner of Bagel Quest 2020</b>, Loxsmith Bagel's legacy remains
            engraved in the hearts and taste buds of bagel enthusiasts. Whether
            adorned with lox or paired with cream cheese, their bagels stand as
            a symbol of excellence, forever etched in the annals of Bagel Quest
            history.
          </p>
        </div>
        <div className="w-full">
          <h2>Aaron's Bagels</h2>
        </div>
        <div className="w-full">
          <h2>Little Market</h2>
        </div>
        <div className="w-full">
          <h2>Hey Bagel</h2>
        </div>
        <div className="w-full">
          <h2>Rachel's Bagels</h2>
        </div>
        <div className="w-full">
          <h2>Grateful Bread</h2>
        </div>
        <div className="w-full">
          <h2>Kelly's Cannoli</h2>
        </div>
        <div className="w-full">
          <h2>Bean's Bagels</h2>
        </div>
        <div className="w-full">
          <h2>Eltana</h2>
        </div>
      </div>
    </div>
  );
}
