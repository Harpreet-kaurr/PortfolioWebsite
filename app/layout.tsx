import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"], // required
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-montserrat", // optional (CSS variable for Tailwind/custom CSS)
});

export const metadata: Metadata = {
  title: "Harpreet Kaur",
  description: "This website is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
