"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ChooseFixedDepoList from "./ChooseFixedDepoList";
import SocialLink from "@/app/components/SocialLink";
import data from "./data.json";
import Bank from "./Bank";
import ResourceListfixedDepo from "./ResourceListfixedDepo";
import NumListFixedDepo from "./NumListFixedDepo";
import SecondNumlist from "./SecondNumList";
import BulletFixedDepoList from "./BulletFixedDepoList";

const TableContentFixedDepo = () => {
  // what to know about saving accounts
  const [linkClicked, setLinkClicked] = useState(false);
  // how to choose a saving account
  const [linkChooseSaveAcc, setlinkChooseSaveAcc] = useState(false);
  // best saving accounts and rates
  const [linkBestSaveAcc, setlinkBestSaveAcc] = useState(false);

  const tableContent = "text-gray-500 font-semibold text-base";
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById("knowsaveacc");
      const section1 = document.getElementById("choosesaveacc");
      const section2 = document.getElementById("aveacc");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setLinkClicked(true);
      }
      if (section1) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkChooseSaveAcc(true);
      }
      if (section2) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkBestSaveAcc(true);
      }
    };

    const handleLinkClick = () => {
      scrollToSection();
    };

    const link = document.querySelector("Link");
    if (link) {
      link.addEventListener("click", handleLinkClick);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleLinkClick);
      }
    };
  }, []);
  return (
    <div>
      {/* table of content and best savings... */}
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row py-16 md:gap-[60px] ">
        <div className="hidden sm:hidden md:block md:flex-col md:gap-8 max-w-[308px]">
          <hr className="border-b-1 border-gray-100 md:mb-8" />
          <div className="flex flex-col gap-4 min-w-[264px]">
            <h1 className="text-red-600 font-semibold text-base">
              Table of contents
            </h1>
            <div className="flex flex-col gap-3">
              <Link
                href="/comparisons/compareFixedDeposit#savingacc"
                className={`${tableContent}`}
                onClick={() => setlinkBestSaveAcc(true)}
              >
                Best fixed deposit account and rates
              </Link>
              <Link
                href="/comparisons/compareFixedDeposit#choosesaveacc"
                className={`${tableContent}`}
                onClick={() => setlinkChooseSaveAcc(true)}
              >
                How to choose a fixed deposit account
              </Link>
              <Link
                href="/comparisons/compareFixedDeposit#knowsaveacc"
                onClick={() => setLinkClicked(true)}
                className={`${tableContent}`}
              >
                What to know about fixed deposit accounts
              </Link>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100 md:my-8" />
          {/* social link component */}
          <SocialLink />
        </div>

        <div>
          {/* best saving accounts info */}
          <div
            id="savingacc"
            className={`${linkBestSaveAcc ? "translate-y-20" : ""}`}
          >
            <h1 className="text-gray-900 font-semibold text-3xl">
              Best savings accounts and rates in June 2023
            </h1>
            <p className="mt-6 text-[#667085] text-lg mb-12">
              As we approach June 2023, investors and savers are keen on
              exploring the most lucrative fixed deposit accounts available in
              the financial market. Fixed deposits provide a secure and
              predictable way to grow your savings with attractive interest
              rates. In this comprehensive guide, we've curated a selection of
              the best fixed deposit accounts and their competitive rates,
              helping you make informed decisions to optimize your financial
              growth.
            </p>

            {/* chipmong bank */}
            <div className="flex flex-col gap-6">
              <Bank />
            </div>
            {/* more text below bank info */}
            {/* use style "bodyText" in body */}
            <p className="bodyText mt-6">{data.belowTextOverview}</p>
            <div>
              <h1 className="titleText mt-12">Other resources</h1>
              <p className="bodyText mt-12">{data.otherResources.resource1}</p>
              <ResourceListfixedDepo />
              <p className="bodyText mt-6"> {data.otherResources.resource2}</p>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* how to choose a savings account className={styles.marginTop}*/}
          <div
            id="choosesaveacc"
            className={`${linkChooseSaveAcc ? "translate-y-20" : ""}`}
          >
            <h1 className="text-[#101828] font-semibold text-3xl">
              How to choose a fixed deposit account
            </h1>
            <p className="bodyText mt-6">
              {data.fixedDepoAcc.fixedDepoAccHead}
            </p>
            <ChooseFixedDepoList />
            <p className="bodyText mt-6">{data.fixedDepoAcc.fixedDepoAccEnd}</p>
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* what to know about fixed deposit accounts */}
          <div
            id="knowsaveacc"
            className={`${linkClicked ? "translate-y-20" : ""}`}
          >
            <div>
              <h1 className="text-[#101828] font-semibold text-3xl">
                What to know about fixed deposit accounts
              </h1>
              <h2 className="titleText mt-6">
                What is a fixed deposit account and how does it work?
              </h2>
              <div className="bodyText mt-4">
                <p>{data.aboutFixedDepoAcc.aboutFixedDepoAccHead}</p>
                <p className="mt-5">
                  {data.aboutFixedDepoAcc.aboutFixedDepoAccTitle}
                </p>
                <NumListFixedDepo />
                <p className="mt-5">
                  {data.aboutFixedDepoAcc.aboutFixedDepoAccSecond}
                </p>
                <SecondNumlist />
                <p className="mt-5">
                  {data.aboutFixedDepoAcc.aboutFixedDepoAccEnd}
                </p>
              </div>

              <h2 className="titleText mt-6">
                Who should get a fixed deposit account?
              </h2>
              <div className="bodyText mt-6">
                <p className="">{data.getFixedDepoAcc.getFixedDepoAccHead}</p>
                <BulletFixedDepoList />
                <p className="mt-5">
                  {data.getFixedDepoAcc.getFixedDepoAccEnd}
                </p>

                {/* <WhoGetFixDepo /> */}
              </div>
            </div>
            {/* <KnowFixDepoAcc /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContentFixedDepo;
