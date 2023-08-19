"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { bankDataAtom } from "./atom";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";
import { fetchAllBankData, fetchAllSavingLineChart } from "./fetchAllBankData";
import { useRecoilValue } from "recoil";
import {
  filteredBankDataAtom,
  isFilteredBankDataState,
  savingChartDataAtom,
} from "./atom";

const FeatureOfferBank = () => {
  const [bankData, setBankData] = useRecoilState(bankDataAtom);
  const [savingChart, setSavingChart] = useRecoilState(savingChartDataAtom);

  const [loading, setLoading] = useState(true);

  const filteredBankData = useRecoilValue(filteredBankDataAtom);
  const isFilteredBankData = useRecoilValue(isFilteredBankDataState);
  // console.log(filteredBankData, "filteredBankData");

  useEffect(() => {
    console.log(filteredBankData, "filteredBankData");
  }, [filteredBankData]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        // const result = await fetch(process.env.NEXT_PUBLIC_GETALLSAVINGS);
        const result = await fetchAllBankData();
        const chart = await fetchAllSavingLineChart();

        console.log(chart, "result");

        setBankData(result);
        setSavingChart(chart);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderBankLogo = (bankName) => {
    // console.log(bankName, "bankName");
    switch (bankName) {
      case "ACLEDA":
        return "/acleda.png";
      case "ABA bank":
        return "/aba.png";
      case "VATTANAC":
        return "/images/vattanac.png";
      default:
        return "/acleda.png";
    }
  };

  return (
    <>
      <div className="overflow-y-auto max-h-[1000px] mt-5">
        {loading ? (
          <div className="flex justify-center items-center h-full mt-32">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="loading"
            />
          </div>
        ) : (
          <div className="">
            <table className="w-full gap-8 border-1 border-gray-200 bg-white shadow-md p-4 relative">
              <thead className="w-full sticky bg-white top-[-1px] left-0 border-none">
                <tr className="mx-4 mt-5">
                  <th className="">Compnay</th>
                  <th className="">Interest Rate</th>
                  <th className="">Currency</th>
                  <th className="">Condition</th>
                </tr>
              </thead>
              <tbody>
                {/* filtered bank data */}
                {isFilteredBankData &&
                  filteredBankData.length > 0 &&
                  filteredBankData.map((bank, index) => (
                    <tr
                      key={index}
                      className="padding-4 border border-b-2 [&>td]:p-4"
                    >
                      <td className="flex lg:flex-row sm:flex-col gap-5 ml-5">
                        {bank.logo && (
                          <img
                            src={bank.logo}
                            alt={bank.bank}
                            className="w-[60px] h-[60px] object-contain"
                          />
                        )}
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex flex-col gap-[4px]">
                            <h1 className="companyName">{bank.bank}</h1>
                          </div>
                        </div>
                      </td>
                      <td className="text-center bg-gray-100">
                        <h1 className="offerDetail">{bank.rate}%</h1>
                        <p className="offerTitle">Interest rate (AER)</p>
                      </td>
                      <td className="text-center">
                        <h1 className="offerDetail mx-10">{bank.ccy}</h1>
                        <p className="offerTitle">Type</p>
                      </td>
                      <td className="text-center max-w-[200px]">
                        <h1 className="offerDetail">{bank.condition}</h1>
                      </td>
                    </tr>
                  ))}

                {/* all bank data */}
                {!isFilteredBankData &&
                  bankData.map((bank, index) => (
                    <tr
                      key={index}
                      className="padding-4 border border-b-2 [&>td]:p-4"
                    >
                      <td className="flex lg:flex-row sm:flex-col justify-start items-center gap-5 ml-5">
                        {bank.logo && (
                          <img
                            src={bank.logo}
                            alt={bank.bank}
                            className="w-[60px] h-[60px] object-contain "
                          />
                        )}
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col gap-[4px]">
                            <h1 className="companyName">{bank.bank}</h1>
                          </div>
                        </div>
                      </td>
                      <td className="text-center bg-gray-100">
                        <h1 className="offerDetail">{bank.rate}%</h1>
                        <p className="offerTitle">Interest rate (AER)</p>
                      </td>
                      <td className="text-center">
                        <h1 className="offerDetail mx-10">{bank.ccy}</h1>
                        <p className="offerTitle">Type</p>
                      </td>
                      <td className="text-center max-w-[200px]">
                        <h1 className="offerDetail">{bank.condition}</h1>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default FeatureOfferBank;
