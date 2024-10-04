import React from "react";
import SearchBar from "../../utils/SearchBar";
import SelectUser from "../../utils/selectUser/SelectUser";
import FilterBySociaMedia from "../../utils/filters/FilterBySocialMedia";
import FilterByState from "../../utils/filters/FilterByState";
import ResetButton from "../../utils/buttons/ResetButton";

const MenuInboxAdmi = () => {
  return (
    <div className="sticky w-64 h-screen overflow-y-auto overflow-x-hidden bg-green-400 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center space-y-2 w-full mt-10">
        <SearchBar />
        <SelectUser />
      </div>
      <div className=" flex flex-col flex-grow justify-center items-center space-y-2 w-full">
        <FilterBySociaMedia />
        <FilterByState />
      </div>
      <div className="w-full">
        <ResetButton />
      </div>
    </div>
  );
};

export default MenuInboxAdmi;
