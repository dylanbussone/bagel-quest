import Image from "next/image";

const lineupItems = [
  {
    name: "Loxsmith",
    image: "/lineup/loxsmith.png",
    description:
      "Loxsmith Bagel, the undisputed champion of Bagel Quest 2020, holds a special place in Seattle's bagel lore. Their mastery of the craft catapulted them to the forefront of the city's bustling bagel scene. With each bite, Loxsmith's bagels become a journey through layers of perfection – a harmonious blend of chewiness and flavor. From the classic sesame to the whimsical poppy, their creations are a testament to bagel artistry. As the winner of Bagel Quest 2020, Loxsmith Bagel's legacy remains engraved in the hearts and taste buds of bagel enthusiasts. Whether adorned with lox or paired with cream cheese, their bagels stand as a symbol of excellence, forever etched in the annals of Bagel Quest history.",
    url: "https://loxsmithseattle.com/",
  },
  {
    name: "Aaron's Bagels",
    image: "/lineup/aaron.png",
    description:
      "Aaron's Bagels, located in Seattle, prides itself on crafting delicious hand-rolled, boiled, and baked bagels, inspired by the iconic flavors of New York City but with a unique Pacific Northwest twist using local ingredients. The business is currently engaged in bagel home deliveries and supplies numerous cafes with their delectable bagels and schmear. With a mission to transform Seattle into a bagel city, the passionate team of Ballard locals at Aaron's Bagels is dedicated to creating the best bagel experience in the city.",
    url: "https://www.aaronsbagels.com/",
  },
  {
    name: "Little Market",
    image: "/lineup/little.png",
    description:
      "Little Market, a beloved neighborhood spot, has garnered acclaim for its exceptional bagels. The mornings bring an irresistible freshness and warmth to these treats, featuring a perfect balance of pillowy soft interiors and crackling exteriors. These bagels, baked in small batches every morning, showcase a commitment to elevating the bagel experience beyond a simple bread-with-a-hole concept. Known for their coffee, the small cafe surprises patrons with delightful warm bagels, boasting a crisp exterior and a chewy interior that leaves you tempted for more.",
    url: "https://www.instagram.com/littlemarketseattle/",
  },
  {
    name: "Hey Bagel",
    image: "/lineup/hey.png",
    description:
      "After years of refining the art of bagel-making and countless trials, the creator is back in the kitchen, unveiling a uniquely twisted version of their past creations with the launch of HEY BAGEL in Seattle. Their passion for the perfect bagel experience is evident in their commitment to delivering warm and toasty delights within an hour of baking for online orders. While they can't promise a fresh-out-of-the-oven bagel every time, they prioritize crafting each order uniquely and just in time. Embracing imperfections, they believe that devouring at least one of their warm, fresh bagels on the way to your destination is a must. Crafted out of a deep-seated craving and sheer passion, these bagels from HEY BAGEL hope to bring joy to every bite.",
    url: "https://www.heybagel.net/",
  },
  {
    name: "Rachel's Bagels",
    image: "/lineup/rachel.png",
    description:
      "Rachel's Bagels & Burritos stands by a unique manifesto, championing scratch cooking as a scrappy way of navigating the world. They redefine good food beyond mere sustenance, focusing on creating an experience that prompts repeat visits. While acknowledging the inherent violence in eating, they advocate for mindful choices. The dining experience at Rachel's is described as delicious, relaxed, pleasurable, and satisfying. In contrast to a profit-centric approach, they emphasize value beyond big box stores and prioritize doing business with people rather than commodities. Collaboration is grounded in respect, aiming for personal and professional growth. Their ethos is described as eager, vital, and everyday, maintaining a lighthearted perspective on their core offerings—bagels and burritos.",
    url: "https://www.rachelsbagels.com/",
  },
  {
    name: "Grateful Bread",
    image: "/lineup/grateful.png",
    description:
      "Grateful Bread Bakery is a welcoming haven committed to providing a delightful experience with their range of natural, organic, and locally sourced baked goods paired with aromatic coffee. At the heart of their philosophy is the dedication to using local, organic, and sustainable ingredients, ensuring a conscientious approach to every product. The bakers at Grateful Bread Bakery meticulously craft each baked good from scratch, free from preservatives, GMOs, or corn syrup. Freshly baked every day, their offerings not only showcase a commitment to quality but also reflect a sincere effort to contribute to a sustainable and delicious culinary journey.",
    url: "https://gratefulbreadbaking.com/",
  },
  {
    name: "Kelly's Cannoli",
    image: "/lineup/kelly.png",
    description:
      "In the heart of Seattle, known for its espresso culture, Kelly Cannoli distinguishes itself by bringing the authentic flavors of the East Coast to the West Coast. Celebrated for its expertly hand-piped cannoli and freshly baked New York-style bagels, Kelly Cannoli offers a delightful taste of the Big Apple in the midst of Seattle's dynamic culinary scene. Whether seeking a sweet indulgence or a savory delight, patrons can savor the essence of East Coast culinary delights at Kelly Cannoli, where the spirit of New York's culinary heritage comes to life.",
    url: "https://www.kellycannoli.com/",
  },
  {
    name: "Bean's Bagels",
    image: "/lineup/bean.png",
    description:
      "Bean's Bagels, originating from the Burien Farmers Market in 2021, is a delightful haven for bagel enthusiasts. Their perfect blend of crispy and soft textures, along with innovative flavors, creates a memorable culinary experience. Beyond being a bagel store, it's a place where quality craftsmanship and genuine hospitality intersect. LGBTQ+ and women owned, Bean's Bagels not only delights taste buds but also exemplifies inclusivity.",
    url: "https://www.facebook.com/beansbagel/",
  },
  {
    name: "Eltana",
    image: "/lineup/eltana.png",
    description:
      "Eltana, is a wood-fired bagel cafe with locations in Capitol Hill and Wallingford. Known for their hand-rolled and uniquely crafted bagels, Eltana extends its offerings beyond bagels to include a diverse selection of specialty teas, coffee, and pastries. Serving as a friendly gathering place, Eltana provides a welcoming environment for work, study, meetings with friends, and the enjoyment of delicious bagels.",
    url: "https://eltana.com/",
  },
];

export default function Lineup() {
  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="text-4xl sm:text-6xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        Your Bagel Lineup
      </h1>
      <div className="flex items-center flex-col gap-8 my-16 w-full sm:w-2/3">
        {lineupItems.map((item) => (
          <div key={item.name}>
            <h2 className="mb-2 flex items-baseline justify-between gap-12">
              <a href={item.url} target="_blank" className="text-blue-800">
                {item.name}
              </a>
              <a href={item.url} target="_blank" className="text-blue-800">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
              </a>
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
        <div className="w-full mt-16">
          <p>More coming soon...</p>
        </div>
      </div>
    </div>
  );
}
