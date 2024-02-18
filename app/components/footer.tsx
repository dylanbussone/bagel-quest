import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const footerLinkStyle =
    "opacity-80 hover:opacity-100 transition duration-150 ease-in-out flex items-center";

  return (
    <footer className="bg-stone-200">
      <div className="flex flex-col items-center justify-center gap-5 py-8">
        <Image src="/bagel-icon-black.svg" width={50} height={50} alt="bagel" />
        <Link href="/contact" className={footerLinkStyle}>
          Contact
        </Link>
      </div>
    </footer>
  );
}
