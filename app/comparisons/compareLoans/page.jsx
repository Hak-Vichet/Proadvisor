"use client";
import Faq from "@/app/components/Faq";
import React from "react";
import CompareLoansForm from "./CompareLoansForm";
import TableContentLoans from "./TableContentLoans";
const Page = () => {
  return (
    <div className="pt-16 sm:pt-16 md:pt-20">
      <div className="sect2 pt-16 px-4 sm:px-4 md:px-28">
        {/* heading */}
        <div className=" flex flex-col justify-center items-center">
          <p className="text-red-600 text-sm font-medium text-center">Loan</p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Find the Best Financing Option for Your Needs
          </p>
          <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            Our Loan Comparison Tool empowers you to make confident financial
            decisions by comparing loan options from multiple banks and
            financial institutions in real-time.
          </p>
        </div>
        {/* fuction compare loan */}
        <CompareLoansForm />
        {/* we found 51 products */}
        <div className="text-center mt-24 flex flex-col justify-center items-center">
          <h1 className="text-[#101828] font-medium text-xl">
            Good news! We’ve found{" "}
            <span className="text-[#12B76A]">51 products</span> for you to take
            a look at.
          </h1>
          <p className="text-[#475467] text-lg font-normal mt-5 max-w-[780px]">
            Take a look and explore a wide range of options that match your
            needs. Whether it's finding the perfect loan, investment
            opportunity, or financial service, our collection has something for
            everyone. Start exploring now and discover the perfect fit for your
            financial goals!
          </p>
        </div>
        {/* Saving line chart */}
        <div className="text-center mt-16 mb-12">
          <h1 className="text-[#101828] font-semibold text-3xl ">
            Loan Rate Live Line Chart
          </h1>
          <p className="text-[#667085] font-normal text-lg mt-6">
            is a dynamic and interactive graphical representation of real-time
            loan interest rates offered by various financial institutions. This
            innovative tool provides users with up-to-date information on loan
            rates, allowing them to make informed decisions when seeking loans
            or financing options.
          </p>
        </div>
        <TableContentLoans />
      </div>

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default Page;
