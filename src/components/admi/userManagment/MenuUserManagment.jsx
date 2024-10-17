import React from "react";
import FilterByUser from "../FilterByUser";
import FilterByPrivilege from "./FilterByPrivilege";
import FilterByActiveUser from "./FilterByActiveUser";
import ResetButton from "../../utils/buttons/ResetButton";
import AddUserButton from "./AddUserButton";

const MenuUserManagment = () => {
  return (
    <div className="sticky w-64 h-screen overflow-y-auto overflow-x-hidden bg-green-400 flex flex-col py-4">
      <div className="flex flex-col justify-between mt-8">
        <FilterByUser />
      </div>
      <div className="mt-12">
        <FilterByPrivilege />
      </div>
      <div className="mt-8">
        <FilterByActiveUser />
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="mb-2">
          <ResetButton customBg="bg-green-400" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div className="mb-2">
          <AddUserButton />
        </div>
      </div>
    </div>
  );
};

export default MenuUserManagment;