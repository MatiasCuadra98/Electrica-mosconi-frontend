import React from "react";
import SearchBar from "../../utils/SearchBar";
import SelectUser from "../../utils/selectUser/SelectUser";
import FilterBySocialMedia from "../../utils/filters/FilterBySocialMedia";
import FilterByState from "../../utils/filters/FilterByState";
import ResetButton from "../../utils/buttons/ResetButton";

// const MenuInboxAdmi = () => {
//   return (
//     <div className="sticky w-64 h-screen overflow-y-auto overflow-x-hidden bg-green-400 flex flex-col py-4">
//       {/* Agrupamos la barra de búsqueda y el selector de usuarios */}
//       <div className="flex flex-col space-y-2 w-full mt-10">
//         <SearchBar />
//         <SelectUser />
//       </div>

//       {/* Los filtros ahora ocupan el espacio flexible */}
//       <div className="flex-grow flex flex-col justify-center space-y-2 w-full">
//         <FilterBySociaMedia />
//         <FilterByState />
//       </div>

//       {/* Botón Reset siempre al fondo */}
//       <div className="w-full mt-4">
//         <ResetButton />
//       </div>
//     </div>
//   );
// };
const MenuInboxAdmi = () => {
  return (
    <div className="sticky w-64 h-screen overflow-y-auto overflow-x-hidden bg-green-400 flex flex-col py-4">
      <div className="flex flex-col justify-between pt-8">
        <SearchBar />
        <SelectUser />
        <div className="mt-4">
          <FilterBySocialMedia />
        </div>
        <div className="mt-4">
          <FilterByState />
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="mb-2">
            <ResetButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInboxAdmi;
