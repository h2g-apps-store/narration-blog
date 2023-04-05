import React from "react";

function Header() {
  return (
    <div className=" sticky top-0 z-10 bg-white flex justify-between px-40 py-5 border-b-2 shadow-xs border-gray-200">
      <a href="#0" className="text-3xl font-bold">
        Narration
      </a>
      <div>
        <button>Dark</button>
        <button>Light</button>
      </div>
    </div>
  );
}

export default Header;
