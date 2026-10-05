import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AmbbaTech | Software Built Around Your Business",
  description:
    "AmbbaTech designs and develops modern software solutions and enterprise platforms—including Kasina HMS and THE OAK CLUB—that help businesses connect operations and grow with confidence.",
  keywords: [
    "AmbbaTech",
    "Kasina HMS",
    "The Oak Club",
    "Hotel Management System",
    "Club Management System",
    "Custom Software Ethiopia",
    "Enterprise Software Addis Ababa",
    "B2B Software",
  ],
  authors: [{ name: "AmbbaTech" }],
  openGraph: {
    title: "AmbbaTech | Software Built Around Your Business",
    description:
      "Modern enterprise software, hotel management systems, and custom operational platforms.",
    url: "https://ambbatech.com",
    siteName: "AmbbaTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
