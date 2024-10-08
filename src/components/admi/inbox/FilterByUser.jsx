import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getUserByIdAction,
  cleanUserByIdAction,
} from "../../../redux/actions/actionsUsers";

const FilterByUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);

  const selectHandler = async (e) => {
    const value = e.target.value;
    if (value === "") {
      localStorage.removeItem("userId");
      dispatch(cleanUserByIdAction());
    } else {
      localStorage.setItem("userId", value);
      dispatch(getUserByIdAction(value));
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
          <option value="" hidden={!user}>
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
