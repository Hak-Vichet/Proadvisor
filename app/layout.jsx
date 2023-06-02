import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="box-border">
      <body className="flex flex-col min-h-screen">
        <Header className="" />
        <main className="flex-1">{children}</main>
        <Footer className="" />
      </body>
    </html>
  );
}