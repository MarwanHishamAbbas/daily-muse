import "@/styles/globals.css";

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
  return <section>{children}</section>;
}
