import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/NavBar/navigation";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gymate",
  description: "Gymate provide a space for everyone to improve their physical fitness and overall health through regular exercise and physical activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased ` } cz-shortcut-listen="true"
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
