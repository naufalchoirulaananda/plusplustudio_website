import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interInter_Tight = Inter_Tight({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "++ Studio",
  description: "Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dgnmqbglc/image/upload/v1711213586/PlusPlusStudio/favicon_ttxlbu.png" type="image/x-icon" />
      </head>
      <body className={interInter_Tight.className}>{children}</body>
    </html>
  );
}
