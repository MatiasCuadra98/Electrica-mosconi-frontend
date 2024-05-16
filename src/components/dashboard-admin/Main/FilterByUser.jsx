import React from 'react';

const FilterByUser = () => {
  return (
    <div className="flex-shrink-0 px-4 py-2 items-center justify-between flex top-24">
        <form>
          <div className="">
            <select
             id="category"
             className="p-2 border-b px-4 text-md font-semibold   border-gray-300 rounded-2xl focus:outline-none focus:bourder-[0.5px] focus:border-slate-500 w-full capitalize"
            >
              <option value="">--Seleccionar user--</option>
             
            </select>
          </div>
        </form>
    </div>
  );
}

export default FilterByUser;
