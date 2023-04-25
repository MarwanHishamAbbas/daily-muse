import Navbar from "@/components/common/Navbar";
import Provider from "@/components/providers/Provider";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { auth } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Muse ",
  description:
    "Discover the latest news, tips, and insights on [blog topic] from our team of expert bloggers.",
  icons: "/icon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
  }

  return (
    <Provider>
      <html lang="en">
        <body
          className={`text-black px-5 container w-full max-w-7xl mx-auto mt-32 ${inter.className}`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </Provider>
  );
}
