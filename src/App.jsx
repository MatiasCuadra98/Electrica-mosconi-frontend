import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import {
  LandingPage,
  NavBar,
  InboxUser,
  LoginAdmi,
  Profile,
  InboxAdmi,
  InboxDetail,
  UsersManagement,
  Footer,
} from "./views";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {/* {location.pathname === "/" ? null : (
        <div>
          <NavBar />
        </div>
      )} */}
      <Routes >
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin/usersManagement" element={<UsersManagement />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Route>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/inbox" element={<InboxUser />} />
        <Route path="/loginAdmi" element={<LoginAdmi />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inboxAdmi" element={<InboxAdmi />} />
        <Route path="/inboxDetail/:detailId" element={<InboxDetail />} />
        <Route path="/usersManagement" element={<UsersManagement />} /> */}
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