import React from "react";
import SearchBar from "../../utils/SearchBar";
import FilterByUser from "./FilterByUser";
import FilterBySocialMedia from "../../utils/filters/FilterBySocialMedia";
import FilterByState from "../../utils/filters/FilterByState";
import ResetButton from "../../utils/buttons/ResetButton";
import statesJson from "../../../../public/json/statesJson";

const MenuInboxAdmi = () => {
  return (
    <div className="sticky w-64 h-screen overflow-y-auto overflow-x-hidden bg-green-400 flex flex-col py-4">
      <div className="flex flex-col justify-between pt-6">
        <SearchBar
          customWidth="w-48 ml-10"
          customButton="bg-green-400 -ml-16"
        />
        <FilterByUser />
        <div className="mt-4">
          <FilterBySocialMedia />
        </div>
        <div className="mt-4">
          <FilterByState statesList={statesJson} />
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="mb-2">
            <ResetButton customBg="bg-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInboxAdmi;
