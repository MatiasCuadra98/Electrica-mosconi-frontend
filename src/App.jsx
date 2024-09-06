import { useEffect } from "react";
import "./App.css";
import {
  LandingPage,
  NavBar,
  InboxUser,
  //InboxDetailUser,
  LoginAdmi,
  HomeAdmi,
  Profile,
  EditProfile,
  EditBusiness,
  EditSocialMedia,
  InboxAdmi,
  InboxDetailAdmi,
  UsersManagement,
} from "./layouts";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { connectSocket, disconnectSocket } from "./redux/actions/actionSocket";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("APP: prueba doble renderizado");

  useEffect(() => {
    // Conectar el socket cuando el componente se monta
    dispatch(connectSocket());

    return () => {
      // Desconectar el socket cuando el componente se desmonta
      dispatch(disconnectSocket());
    };
  }, [dispatch]);

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/loginAdmi" ||
      location.pathname === "/dashboardAdmi/profile/edit" ||
      location.pathname === "/dashboardAdmi/profile/edit-business" ? null : (
        <div>
          <NavBar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inbox" element={<InboxUser />} />
        {/* <Route
          path="/inboxDetailUser/:messageId"
          element={<InboxDetailUser />}
        /> */}
        <Route path="/loginAdmi" element={<LoginAdmi />} />
        <Route path="/dashboardAdmi/homeAdmi" element={<HomeAdmi />} />
        <Route path="/dashboardAdmi/profile" element={<Profile />} />
        <Route path="/dashboardAdmi/profile/edit" element={<EditProfile />} />
        <Route
          path="/dashboardAdmi/profile/edit-business"
          element={<EditBusiness />}
        />
        <Route
          path="/dashboardAdmi/profile/edit-socialMedia"
          element={<EditSocialMedia />}
        />
        <Route path="/dashboardAdmi/inboxAdmi" element={<InboxAdmi />} />
        <Route
          path="/inboxDetailAdmi/:detailId"
          element={<InboxDetailAdmi />}
        />
        <Route
          path="/dashboardAdmi/usersManagement"
          element={<UsersManagement />}
        />
      </Routes>
    </div>
  );
};

export default App;
