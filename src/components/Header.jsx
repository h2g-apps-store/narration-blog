import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
function Header() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className=" sticky top-0 z-10 bg-white flex justify-between px-40 py-5 border-b-4 shadow-xs border-gray-200">
      <a href="#0" className="text-3xl font-bold">
        Narration
      </a>
      <div className="flex justify-center items-center">
        {theme === true ? (
          <button type="button" onClick={changeTheme}>
            <BsFillMoonStarsFill size={24} />
          </button>
        ) : (
          <button type="button" onClick={changeTheme}>
            <BiSun size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
