import "./App.css";
import {
  LandingPage,
  NavBar,
  InboxUser,
  LoginAdmi,
  HomeAdmi,
  Profile,
  InboxAdmi,
  InboxDetail,
  UsersManagement,
  Footer,
} from "./layouts";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/loginAdmi" ? null : (
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
        <Route path="/dashboardAdmi/inboxAdmi" element={<InboxAdmi />} />
        <Route path="/inboxDetail/:detailId" element={<InboxDetail />} />
        <Route
          path="/dashboardAdmi/usersManagement"
          element={<UsersManagement />}
        />
      </Routes>
      {/* {location.pathname === "/" ? null : (
        <div>
          <Footer />
        </div>
      )} */}
    </div>
  );
};

export default App;
