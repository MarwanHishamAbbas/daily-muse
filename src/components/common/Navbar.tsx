import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed h-20 flex items-center max-w-7xl mx-auto px-5 backdrop-blur-sm top-0 left-0 right-0 w-full">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Daily Muse Logo"
            width={160}
            height={160}
            quality={100}
            loading="lazy"
          />
        </Link>
        <div className="gap-2 hidden md:flex">
          <Button variant="ghost">Developer</Button>
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
