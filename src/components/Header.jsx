import React from "react";

function Header() {
  return (
    <div className=" sticky top-0 z-10 bg-white flex justify-between px-40 py-5 border-b-4 shadow-xs border-gray-200">
      <a href="#0" className="text-3xl font-bold">
        Narration
      </a>
      <div className="flex justify-center items-center">
        <a href="#0">Dark</a>
        <a href="#0">Light</a>
      </div>
    </div>
  );
}

export default Header;
