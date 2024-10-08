import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessByIdAction } from "../../redux/actions/actionBusiness";
import { getUserByIdAction } from "../../redux/actions/actionsUsers";
import SideBarA from "../../components/admi/SideBarA";
import MenuInboxAdmi from "../../components/admi/inbox/MenuInboxAdmi";

const InboxAdmi = () => {
  const dispatch = useDispatch();
  const businessRedux = useSelector((state) => state.business.id);
  const businessId = businessRedux || localStorage.getItem("businessId");
  const userRedux = useSelector((state) => state.user.id);
  const userId = userRedux || localStorage.getItem("userId");

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessByIdAction(businessId));
      if (userId) {
        dispatch(getUserByIdAction(userId));
      }
    }
  }, [dispatch, businessId, userId]);

  const user = useSelector((state) => state.user);
  return (
    <div className="w-screen h-screen-minus-navbar flex overflow-hidden">
      <div className="w-52 flex-shrink-0">
        <SideBarA user={user} />
      </div>
      <MenuInboxAdmi />
      <h1>BANDEJA DE ENTRADA ADMI</h1>
    </div>
  );
};

export default InboxAdmi;
