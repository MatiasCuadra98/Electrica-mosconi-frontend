import React from "react";
import SearchBar from "../../utils/SearchBar";
import SelectUser from "../../utils/selectUser/SelectUser";
import FilterBySociaMedia from "../../utils/filters/FilterBySocialMedia";
import FilterByState from "../../utils/filters/FilterByState";
import ResetButton from "../../utils/buttons/ResetButton";

const MenuInboxAdmi = () => {
  return (
    <div className="sticky w-64 h-screen overflow-y-auto overflow-x-hidden bg-green-400 flex flex-col items-center justify-center">
      <div className="bg-red-500 w-64 h-auto">
        <SearchBar />
        <SelectUser />
      </div>
      <FilterBySociaMedia />
      <FilterByState />
      <ResetButton />
    </div>
  );
};

export default MenuInboxAdmi;
