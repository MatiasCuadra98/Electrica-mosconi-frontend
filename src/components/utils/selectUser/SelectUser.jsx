import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useState } from "react";
import { getUserByIdAction } from "../../../redux/actions/actionsUsers";
import IconUser from "./IconUser";
import userJson from "../../../../public/json/userJson";

const SelectUser = () => {
  //   const users = useSelector((state) => state.users);
  //   const user = useSelector((state) => state.user);
  const users = userJson;
  const user = {};
  const dispatch = useDispatch();
  //const [userActive, setUserActive] = useState(false);

  const selectHandler = (e) => {
    dispatch(getUserByIdAction(e.target.value.id));
    //setUserActive(true);
  };

  return (
    <div className="flex items-center absolute top-24">
      <div>
        {!user ? (
          <img src="/noUser.svg" />
        ) : user.image ? (
          user.image
        ) : (
          <IconUser name={user.name} />
        )}
      </div>
      <div>
        <select
          name="selectUser"
          onChange={selectHandler}
          className="text-md bg-sky-950 rounded-2xl text-white text-base font-normal font-['Oswald'] capitalize ml-3"
        >
          {/* <option value="" hidden={!userActive}> */}
          <option
            value=""
            hidden={!user}
            // className="font-[Inter] text-stone-400"
          >
            usuario...
          </option>
          {users &&
            users.map((user, index) => {
              return (
                <option key={index} value={user}>
                  {user.name.toUpperCase()}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default SelectUser;
