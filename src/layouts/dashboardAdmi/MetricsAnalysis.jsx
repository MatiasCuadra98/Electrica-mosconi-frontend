import React from "react";
import SideBarA from "../../components/admi/SideBarA";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusinessByIdAction } from "../../redux/actions/actionBusiness";
import { getUserByIdAction } from "../../redux/actions/actionsUsers";

const MetricsAnalysis = () => {
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
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-48 flex-shrink-0">
        <SideBarA user={user} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src="https://www1.upme.gov.co/simco/PublishingImages/Pagina_en_construccion.jpg"
          alt="sector en construccion"
          className="w-full h-3/4"
        />
      </div>
    </div>
  );
};
export default MetricsAnalysis;
