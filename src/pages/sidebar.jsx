import React, { useState } from "react";

function Sidebar() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  return (
    <nav
      className={
        sidebarCollapse
          ? "w-24 h-screen duration-300 fixed bg-white shadow-md p-6"
          : "w-96 h-screen duration-300 fixed bg-white shadow-md p-6"
      }
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex w-full justify-between h-fit items-center gap-2">
          <h1 className="font-inter font-bold">
            {sidebarCollapse ? "CMS" : "CMS hanif site"}
          </h1>
          <span
            onClick={() => setSidebarCollapse(!sidebarCollapse)}
            className="w-8 h-8 grid place-content-center cursor-pointer"
          >
            {sidebarCollapse ? "o" : "x"}
          </span>
        </div>
        <ul className="font-mulish flex flex-col gap-2 text-lg text-slate-950">
            <li className="font-medium hover:font-bold duration-300 cursor-pointer">profile</li>
            <li className="font-medium hover:font-bold duration-300 cursor-pointer">portofolio</li>
            <li className="font-medium hover:font-bold duration-300 cursor-pointer">blogs</li>
            <li className="font-medium hover:font-bold duration-300 cursor-pointer">visitors</li>
            <li className="font-medium hover:font-bold duration-300 cursor-pointer">users</li>
        </ul>
        <div className="cursor-pointer">
            logout
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
