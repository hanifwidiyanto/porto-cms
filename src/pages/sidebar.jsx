import Link from "next/link";
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
          <Link href="/profile">
            <li className="font-medium hover:font-bold duration-300 cursor-pointer w-fit">
              profile
            </li>
          </Link>
          <Link href="/portofolio">
            <li className="font-medium hover:font-bold duration-300 cursor-pointer w-fit">
              portofolio
            </li>
          </Link>
          <Link href="/blog">
            <li className="font-medium hover:font-bold duration-300 cursor-pointer w-fit">
              blog
            </li>
          </Link>
          <Link href="/visitor">
            <li className="font-medium hover:font-bold duration-300 cursor-pointer w-fit">
              visitor
            </li>
          </Link>
          <Link href="/users">
            <li className="font-medium hover:font-bold duration-300 cursor-pointer w-fit">
              users
            </li>
          </Link>
        </ul>
        <div className="cursor-pointer font-mulish hover:font-bold font-medium">
          logout
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
