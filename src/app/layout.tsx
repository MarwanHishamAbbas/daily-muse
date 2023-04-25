import Navbar from "@/components/common/Navbar";
import Provider from "@/components/providers/Provider";
import QueryProvider from "@/components/providers/QueryProvider";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

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
  return (
    <html lang="en">
      <body
        className={`text-black px-5 w-full max-w-7xl mx-auto mt-32 ${inter.className}`}
      >
        <QueryProvider>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </QueryProvider>
      </body>
    </html>
  );
}
