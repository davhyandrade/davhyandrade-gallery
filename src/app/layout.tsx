import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galeria | Davhy Andrade",
  description:
    "Galeria pessoal de momentos fotografados por Davhy Andrade, uma coleção que registra o cotidiano sob uma perspectiva pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
