import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getUserByIdAction } from "../../../redux/actions";
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
    dispatch(getUserByIdAction(e.taget.value.id));
    //setUserActive(true);
  };

  return (
    <div>
      <div>
        {!user ? (
          <img src="/noUser.svg" />
        ) : user.image ? (
          user.image
        ) : (
          <IconUser name={user.name} />
        )}
      </div>
      <div className="text-md font-roboto text-gray-400">
        <select name="selectUser" onChange={selectHandler}>
          {/* <option value="" hidden={!userActive}> */}
          <option value="" hidden={!user}>
            usuario...
          </option>
          {users &&
            users.map((user, index) => {
              return (
                <option key={index} value={user}>
                  {user.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default SelectUser;
