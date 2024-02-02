import Image from "next/image";

const lineupItems = [
  {
    name: "Loxsmith",
    image: "/lineup/loxsmith.png",
    description:
      "Loxsmith Bagel, the undisputed champion of Bagel Quest 2020, holds a special place in Seattle's bagel lore. Their mastery of the craft catapulted them to the forefront of the city's bustling bagel scene. With each bite, Loxsmith's bagels become a journey through layers of perfection – a harmonious blend of chewiness and flavor. From the classic sesame to the whimsical poppy, their creations are a testament to bagel artistry. As the winner of Bagel Quest 2020, Loxsmith Bagel's legacy remains engraved in the hearts and taste buds of bagel enthusiasts. Whether adorned with lox or paired with cream cheese, their bagels stand as a symbol of excellence, forever etched in the annals of Bagel Quest history.",
    url: "https://loxsmithseattle.com/",
    height: 100,
    width: 100,
  },
  {
    name: "Aaron's Bagels",
    image: "/lineup/aaron.png",
    description:
      "Aaron's Bagels, located in Seattle, prides itself on crafting delicious boiled and baked bagels, inspired by the iconic flavors of New York City but with a unique Pacific Northwest twist using local ingredients. The business is currently engaged in bagel home deliveries and supplies numerous cafes with their delectable bagels and schmear. With a mission to transform Seattle into a bagel city, the passionate team of Ballard locals at Aaron's Bagels is dedicated to creating the best bagel experience in the city.",
    url: "https://www.aaronsbagels.com/",
    height: 100,
    width: 100,
  },
  {
    name: "Little Market",
    image: "/lineup/little.png",
    description:
      "Little Market, a beloved neighborhood spot, has garnered acclaim for its exceptional bagels. The mornings bring an irresistible freshness and warmth to these treats, featuring a perfect balance of pillowy soft interiors and crackling exteriors. These bagels, baked in small batches every morning, showcase a commitment to elevating the bagel experience beyond a simple bread-with-a-hole concept. Known for their coffee, the small cafe surprises patrons with delightful warm bagels, boasting a crisp exterior and a chewy interior that leaves you tempted for more.",
    url: "https://www.instagram.com/littlemarketseattle/",
    height: 80,
    width: 90,
  },
  {
    name: "Hey Bagel",
    image: "/lineup/hey.png",
    description:
      "After years of refining the art of bagel-making and countless trials, the creator is back in the kitchen, unveiling a uniquely twisted version of their past creations with the launch of HEY BAGEL in Seattle. Their passion for the perfect bagel experience is evident in their commitment to delivering warm and toasty delights within an hour of baking for online orders. While they can't promise a fresh-out-of-the-oven bagel every time, they prioritize crafting each order uniquely and just in time. Embracing imperfections, they believe that devouring at least one of their warm, fresh bagels on the way to your destination is a must. Crafted out of a deep-seated craving and sheer passion, these bagels from HEY BAGEL hope to bring joy to every bite.",
    url: "https://www.heybagel.net/",
    height: 100,
    width: 100,
  },
  {
    name: "Rachel's Bagels",
    image: "/lineup/rachel.png",
    description:
      "Rachel's Bagels & Burritos stands by a unique manifesto, championing scratch cooking as a scrappy way of navigating the world. They redefine good food beyond mere sustenance, focusing on creating an experience that prompts repeat visits. While acknowledging the inherent violence in eating, they advocate for mindful choices. The dining experience at Rachel's is described as delicious, relaxed, pleasurable, and satisfying. In contrast to a profit-centric approach, they emphasize value beyond big box stores and prioritize doing business with people rather than commodities. Collaboration is grounded in respect, aiming for personal and professional growth. Their ethos is described as eager, vital, and everyday, maintaining a lighthearted perspective on their core offerings—bagels and burritos.",
    url: "https://www.rachelsbagels.com/",
    height: 80,
    width: 80,
  },
  {
    name: "Grateful Bread",
    image: "/lineup/grateful.jpg",
    description:
      "Grateful Bread Bakery is a welcoming haven committed to providing a delightful experience with their range of natural, organic, and locally sourced baked goods paired with aromatic coffee. At the heart of their philosophy is the dedication to using local, organic, and sustainable ingredients, ensuring a conscientious approach to every product. The bakers at Grateful Bread Bakery meticulously craft each baked good from scratch, free from preservatives, GMOs, or corn syrup. Freshly baked every day, their offerings not only showcase a commitment to quality but also reflect a sincere effort to contribute to a sustainable and delicious culinary journey.",
    url: "https://gratefulbreadbaking.com/",
    height: 100,
    width: 200,
  },
  {
    name: "Kelly Cannoli",
    image: "/lineup/kelly.png",
    description:
      "In the heart of Seattle, known for its espresso culture, Kelly Cannoli distinguishes itself by bringing the authentic flavors of the East Coast to the West Coast. Celebrated for its expertly hand-piped cannoli and freshly baked New York-style bagels, Kelly Cannoli offers a delightful taste of the Big Apple in the midst of Seattle's dynamic culinary scene. Whether seeking a sweet indulgence or a savory delight, patrons can savor the essence of East Coast culinary delights at Kelly Cannoli, where the spirit of New York's culinary heritage comes to life.",
    url: "https://www.kellycannoli.com/",
    height: 100,
    width: 200,
  },
  {
    name: "Bean's Bagels",
    image: "/lineup/bean.png",
    description:
      "Bean's Bagels, originating from the Burien Farmers Market in 2021, has become a beloved spot for bagel enthusiasts with its perfect blend of crispy and soft textures, and innovative flavors. Not just a bagel store, Bean's Bagels, proudly LGBTQ+ and women-owned, exemplifies inclusivity while delivering a memorable culinary experience. Excitingly, this spring, they are set to open their first brick-and-mortar location in the Georgetown neighborhood.",
    url: "https://www.facebook.com/beansbagel/",
    height: 100,
    width: 100,
  },
  {
    name: "Eltana",
    image: "/lineup/eltana.png",
    description:
      "Eltana, is a wood-fired bagel cafe with locations in Capitol Hill and Wallingford. Known for their hand-rolled and uniquely crafted bagels, Eltana extends its offerings beyond bagels to include a diverse selection of specialty teas, coffee, and pastries. Serving as a friendly gathering place, Eltana provides a welcoming environment for work, study, meetings with friends, and the enjoyment of delicious bagels.",
    url: "https://eltana.com/",
    height: 100,
    width: 100,
  },
  {
    name: "Oxbow",
    image: "/lineup/oxbow.png",
    description:
      "Nestled in Seattle's Montlake neighborhood, just a stone's throw away from the University of Washington (Go Dawgs!) and a few steps from the arboretum, Oxbow is a delightful eatery offering a range of humble yet satisfying options. From bagels with spreads to pizza, coffee, quiche, and more, the menu caters to breakfast and lunch enthusiasts. The airy, open atmosphere creates a welcoming space for locals to gather and enjoy delectable fare in the company of good people. As a sibling establishment to Sea Wolf, Oxbow positions itself as a neighborhood hotspot, inviting patrons to relax and savor quality food in a laid-back setting.",
    url: "https://www.oxbowmontlake.com/",
    height: 100,
    width: 100,
  },
  {
    name: "Macrina Bakery",
    image: "/lineup/macrina.jpg",
    description:
      "In harmony with the owner's strong belief in the captivating bond between bread and communal sharing, the bakery resonates with Macrina's philosophy. Following a traditional village bakery model, Macrina prioritizes regional and organic ingredients, creating a vibrant tapestry of flavors. The spotlight falls on the signature bread, Macrina Casera, a perfect accompaniment to any meal. The dedicated bakers, driven by their passion for the craft, consistently produce high-quality bread, upholding the timeless tradition of breaking bread with loved ones.",
    url: "https://macrinabakery.com/",
    height: 100,
    width: 100,
  },
  {
    name: "Dingfelder's Delicatessen",
    image: "/lineup/dingfelders.png",
    description:
      "New York native Vance Dingfelder, shaped by his grandmothers' culinary wisdom and raised in the restaurant business by his parents, Naomi and Norman, brings over 30 years of expertise to Nourish Catering. As the driving force behind the brand, Vance meticulously tailors custom menus, sourcing the best Northwest resources for flawless event execution. From appetizers to cocktails, linens to glassware, Vance's commitment is to nourish his clients in mind, body, and soul, creating enduring memories with every event.",
    url: "https://dingfelders.com/",
    height: 100,
    width: 100,
  },
  {
    name: "Old Salt Fish and Bagels",
    image: "/lineup/oldsalt.jpg",
    description:
      "Opened in winter 2020, Old Salt Fish and Bagels is the third venture by Joe Sundberg, Rachel Johnson, Patrick Thalasinos, and Chef Liz Kenyon. Specializing in in-house smoked fish sourced from Northwest Bounty, the establishment also offers freshly baked bagels daily, crafted with precision and Shepards grain flour to provide customers with exceptional products.",
    url: "https://www.oldsaltseattle.com/",
    height: 100,
    width: 100,
  },
];

export default function Lineup() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center sm:mt-20">
      <h1 className="bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-6xl">
        Your bagel lineup
      </h1>
      <div className="my-16 flex w-full flex-col items-center gap-16 sm:w-2/3">
        {lineupItems.map((item) => (
          <div key={item.name}>
            <h2 className="mb-2 flex flex-col-reverse items-baseline justify-between gap-4 sm:flex-row sm:gap-12">
              <a
                href={item.url}
                target="_blank"
                className="font-semibold text-blue-800"
              >
                {item.name}
              </a>
              <a href={item.url} target="_blank">
                <Image
                  src={item.image}
                  height={item.height}
                  width={item.width}
                  alt={item.name}
                />
              </a>
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
