import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-sm w-full h-16 flex items-center justify-between px-64">
      <div>Blog Hanif</div>
      <ul className="flex gap-3">
        <li>profile</li>
        <li>portofolio</li>
        <li>blog</li>
        <li>users</li>
      </ul>
      <div>o</div>
    </nav>
  );
}

export default Navbar;
