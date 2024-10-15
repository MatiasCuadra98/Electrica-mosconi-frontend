import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterByUserAction } from "../../../redux/actions/actionFilters";

const FilterByUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.userByAdmi);

  const selectHandler = async (e) => {
    const value = e.target.value;
    console.log('en filter', value);
    
    if (value === "") {
      localStorage.removeItem("filterUser");
    } else {
      localStorage.setItem("filterUser", value);
      dispatch(filterByUserAction(value));
    }
  };

  return (
    <div className="flex items-center">
      <div>
        <select
          name="selectUser"
          onChange={selectHandler}
          value={user ? user.id : ""}
          className="text-md bg-green-400 shadow-inner mt-2 ml-10 px-4 rounded-2xl text-white text-base font-normal font-['Oswald'] capitalize"
        >
          <option value="TODOS" hidden={!user}>
            usuario...
          </option>
          {users &&
            users.map((user, index) => {
              return (
                <option key={index} value={user.id}>
                  {user.name.toUpperCase()}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default FilterByUser;
