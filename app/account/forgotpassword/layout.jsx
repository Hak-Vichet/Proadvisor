"use client";

import ForgotPassSidebar from "@/app/components/FogotPassSidebar";

export default function ForgotPassLayout({ children }) {
  return (
    <body className="">
      <div className="flex w-full h-screen">
        <ForgotPassSidebar />
        <main className="flex w-full">{children}</main>
      </div>
    </body>
  );
}
