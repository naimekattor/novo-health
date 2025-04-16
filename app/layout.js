import { Geist, Geist_Mono, Open_Sans as OpenSans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = OpenSans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Novo Health",
  description:
    "Novo Health - Empowering your well-being with personalized healthcare solutions and expert guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
