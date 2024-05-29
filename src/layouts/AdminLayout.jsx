import React from "react";
import HeaderLeft from "../components/dashboard-admin/Header/HeaderLeft";
import HeaderRight from "../components/dashboard-admin/Header/HeaderRight";
import GoHomeButton from "../components/utils/buttons/GoHomeButton";
import ResetButton from "../components/utils/buttons/ResetButton";
import FilterBySocialMedia from "../components/utils/filters/FilterBySocialMedia";
import Search from "../components/dashboard-admin/Main/Search";
import { Outlet } from "react-router-dom";
import FilterByState from "../components/utils/filters/FilterByState";
import FilterByUser from "../components/dashboard-admin/Main/FilterByUser";

const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <header class="flex flex-shrink-0">
        <HeaderLeft />
        <HeaderRight />
      </header>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 bg-sky-950 p-0 overflow-y-auto ">
          <nav className="flex flex-col space-y-4 mt-20">
            <div className="gap-2 lg:flex lg:items-center items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  className="w-14 h-14 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2"
                  src="https:/flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Bordered avatar"
                />
              </div>
              <span className="font-semibold text-slate-100 flex items-center justify-center">
                Admin
              </span>
            </div>

            <div className="mt-2 items-center justify-center">fgfgfgh</div>

            <div className="mt-4 text-center">
              <ResetButton />
              <GoHomeButton />
            </div>
          </nav>
        </div>
        <main className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="absolute top-14 z-30 h-[calc(100vh-3.5rem)] shrink-0 md:sticky md:block bg-green-400 overflow-y-auto">
            <Search />
            <FilterByUser />
            <div className="p-6">
              <FilterBySocialMedia />
              <FilterByState />
            </div>
          </aside>
          <div className="overflow-x-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
