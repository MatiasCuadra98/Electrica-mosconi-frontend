import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import {
  BusinessLogin,
  LandingPage,
  NavBar,
  InboxUser,
  LoginAdmi,
  HomeAdmi,
  Profile,
  EditProfile,
  EditBusiness,
  EditSocialMedia,
  InboxAdmi,
  InboxDetailAdmi,
  UsersManagement,
  MetricsAnalysis,
} from "./layouts";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { connectSocket, disconnectSocket } from "./redux/actions/actionSocket";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const admiLogin = useSelector((state) => state.admiLogin)


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
      location.pathname === "/login" ||
      location.pathname === "/loginAdmi" ||
      location.pathname === "/dashboardAdmi/profile/edit" ||
      location.pathname === "/dashboardAdmi/profile/edit-business" ||
      location.pathname === "/dashboardAdmi/profile/edit-socialMedia" ? null : (
        <div>
          <NavBar />
        </div>
      )}
{/* RUTAS DAHSBOARD ADMI PROTEGIDAS */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<BusinessLogin />} />
        <Route path="/inbox" element={<InboxUser />} />
        <Route path="/loginAdmi" element={<LoginAdmi />} />
        <Route element={<ProtectRoutes isAllowed={admiLogin}/>}>
          <Route path="/dashboardAdmi/homeAdmi" element={<HomeAdmi />} />
          <Route path="/dashboardAdmi/profile" element={<Profile />} />
          <Route path="/dashboardAdmi/profile/edit" element={<EditProfile />} />
          <Route path="/dashboardAdmi/profile/edit-business" element={<EditBusiness />}/>
          <Route path="/dashboardAdmi/profile/edit-socialMedia" element={<EditSocialMedia />}/>
          <Route path="/dashboardAdmi/inboxAdmi" element={<InboxAdmi />} />
          <Route path="/inboxDetailAdmi/:detailId" element={<InboxDetailAdmi />}/>
          <Route path="/dashboardAdmi/usersManagement" element={<UsersManagement />}/>
          <Route path="/dashboardAdmi/metrics" element={<MetricsAnalysis />} />
        </Route>
      </Routes>

{/* RUTAS SIN PROTEGER */}
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<BusinessLogin />} />
        <Route path="/inbox" element={<InboxUser />} />
        <Route path="/loginAdmi" element={<LoginAdmi />} />
        <Route path="/dashboardAdmi/homeAdmi" element={<HomeAdmi />} />
        <Route path="/dashboardAdmi/profile" element={<Profile />} />
        <Route path="/dashboardAdmi/profile/edit" element={<EditProfile />} />
        <Route path="/dashboardAdmi/profile/edit-business" element={<EditBusiness />}/>
        <Route path="/dashboardAdmi/profile/edit-socialMedia" element={<EditSocialMedia />}/>
        <Route path="/dashboardAdmi/inboxAdmi" element={<InboxAdmi />} />
        <Route path="/inboxDetailAdmi/:detailId" element={<InboxDetailAdmi />}/>
        <Route path="/dashboardAdmi/usersManagement" element={<UsersManagement />}/>
        <Route path="/dashboardAdmi/metrics" element={<MetricsAnalysis />} />
      </Routes> */}
    </div>
  );
};

export default App;
