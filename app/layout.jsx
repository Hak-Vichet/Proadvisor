"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const router = usePathname();
  console.log("router", router);
  const pathToHideNav = ["/account", "/account/forgotpassword"]


  return (
    <html lang="en" className="box-border">
      <body className="flex flex-col min-h-screen"> 
        { (router === "/" || router === "/promotions" || router === "/account") &&  <Header className="" />}
        <main className="flex-1">{children}</main>
        { (router === "/" || router === "/promotions") &&  <Footer className="" />}
      </body>
    </html>
  );
}
