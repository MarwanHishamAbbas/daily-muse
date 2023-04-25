import Image from "next/image";

export const metadata = {
  title: "Daily Muse | Authentication",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="h-screen w-full flex items-center justify-between overflow-hidden">
      <div className="w-full lg:basis-1/2">{children}</div>
      <Image
        src="/auth-pattern.png"
        alt="Authentication Pattern"
        width={1000}
        height={1000}
        className="h-full w-full lg:basis-1/2 object-cover hidden lg:block"
      />
    </body>
  );
}
