import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between max-w-7xl mx-auto">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={204}
        height={204}
        quality={100}
        loading="lazy"
      />
      <Button />
    </main>
  );
}
