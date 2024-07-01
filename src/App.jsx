import React from "react";
import "./App.css";
import {
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
  InboxDetail,
  UsersManagement,
} from "./layouts";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
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
        <Route path="/inboxDetail/:detailId" element={<InboxDetail />} />
        <Route
          path="/dashboardAdmi/usersManagement"
          element={<UsersManagement />}
        />
      </Routes>
    </div>
  );
};

export default App;
