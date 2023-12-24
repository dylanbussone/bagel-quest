import Image from "next/image";

export default function () {
  return (
    <div className="flex flex-col items-center justify-between">
      <Image src="/bagel-icon-dark.svg" width={200} height={200} alt="bagel" />
      <h1 className="text-5xl my-10 font-semibold">Bagel Quest</h1>
      <p>coming soon...</p>
    </div>
  );
}
