import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const leagueSpartan = Inter({ subsets: ["latin"], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: "room",
  description: "room | homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
