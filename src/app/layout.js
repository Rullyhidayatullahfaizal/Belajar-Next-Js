"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarHome from "./navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ['/login','/register',"/dashboard"]

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathName) && <NavbarHome />}
        {children}</body>
    </html>
  );
}
