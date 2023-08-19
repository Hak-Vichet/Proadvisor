"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { fetchAllBankData } from "./fetchAllBankData";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedBankState,
  selectedCurrencyState,
  isFilteredBankDataState,
  filteredBankDataAtom,
  filteredSavingChartDataAtom,
} from "./atom";
import {
  fetchBankDataByParams,
  fetchAllSavingLineChartByParams,
} from "./fetchAllBankData";
import { fetchAllBankDataOld } from "./fetchAllBankData";

const currency = [
  { value: "KHR", label: "KHR" },
  { value: "USD", label: "USD" },
];

const terms = [
  { value: "monthly", label: "Interest Rate (AER)" },
  { value: "yearly", label: "After 1 month" },
  { value: "yearly", label: "After 1 years" },
  { value: "yearly", label: "After 5 years" },
];

const CompareSaveAccForm = () => {
  const [selectedBank, setSelectedBank] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [bankData, setBankData] = useState([]);

  const [isFilteredBankData, setIsFilteredBankData] = useRecoilState(
    isFilteredBankDataState
  );
  const [filteredBankData, setFilteredBankData] =
    useRecoilState(filteredBankDataAtom);
  const [filteredSavingChart, setfilteredSavingChart] = useRecoilState(
    filteredSavingChartDataAtom
  );

  useEffect(() => {
    const fecthData = async () => {
      const data = await fetchAllBankDataOld();
      setBankData(data);
    };
    fecthData();
  }, []);

  // sort bank name
  const sortedBanks = [...new Set(bankData.map((bank) => bank.bank))].sort();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedBank.length === 0 && !selectedCurrency) {
      setIsFilteredBankData(false);
      return;
    }

    const res = await fetchBankDataByParams(
      selectedBank.map((bank) => bank.value),
      selectedCurrency?.value
    );

    const chart = await fetchAllSavingLineChartByParams(
      selectedBank.map((bank) => bank.value),
      selectedCurrency?.value
    );

    console.log("filtered bank data", res);

    setIsFilteredBankData(true);
    setFilteredBankData(res);
    setfilteredSavingChart(chart);
  };

  const handleClearFilter = async (event) => {
    event.preventDefault();

    console.log("clear filter", selectedBank, selectedCurrency);

    setSelectedBank([]);
    setSelectedCurrency(null);

    setIsFilteredBankData(false);
    setFilteredBankData([]);
    setfilteredSavingChart([]);
  };

  const isSelectedFilter = () =>
    selectedBank.length > 0 || selectedCurrency !== null ? true : false;

  return (
    <div>
      <form
        action="/send-data-here"
        method="post"
        className=" gap-8 bg-[#F9FAFB] py-8 px-6 rounded-lg border-[1px] border-[#EAECF0] mt-12"
      >
        <div className="flex md:flex-row flex-col sm:flex-col gap-8 ">
          <div className="flex flex-col gap-3 w-full">
            <label for="value" className="labelStyle">
              Select Banks
            </label>
            <MultiSelect
              options={sortedBanks.map((bank) => {
                return { label: bank, value: bank };
              })}
              value={selectedBank}
              onChange={setSelectedBank}
              labelledBy="Select"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row justify-between">
              <label for="value" className="labelStyle truncate">
                Select currency
              </label>
            </div>
            <Select
              key={`my_unique_select_key__${selectedCurrency}`}
              defaultValue={selectedCurrency}
              onChange={(state) => {
                setSelectedCurrency(state);
                console.log(state);
              }}
              options={currency}
              isClearable
            />
          </div>
        </div>

        <div className="flex flex-row sm:flex-col md:flex-row md:justify-end items-center mt-8  gap-4">
          {isSelectedFilter() && (
            <button
              type="submit"
              className="text-gray-700 w-full sm:w-full md:max-w-[155px] font-semibold
             rounded-lg px-[180px] sm:px-[180px] py-2.5 md:px-5 border-gray-300 border-2 hover:bg-gray-50"
              onClick={handleClearFilter}
            >
              Clear filter
            </button>
          )}
          <button
            type="submit"
            className="redButton w-full sm:w-full md:max-w-[155px] font-semibold "
            onClick={handleFormSubmit}
          >
            Update result
          </button>
        </div>
      </form>

      {/* <SelectedBanksCompoents showSelectedBank={showSelectedBank} selectedBank={selectedBank} /> */}
    </div>
  );
};

export default CompareSaveAccForm;
