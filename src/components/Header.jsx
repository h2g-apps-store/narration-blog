import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
function Header() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  // sx:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4

  return (
    <>
      <div className="hidden  md:flex sticky top-0 z-10 bg-white  justify-between sm:px-20 md:px-28  lg:px-32 xl:px-40 py-5 border-b-4 shadow-xs border-gray-200">
        <a href="#0" className="text-3xl font-bold">
          NARRATION
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
      <div className="md:hidden  sm:flex sticky top-0 z-10 bg-white flex justify-between px-10 py-3 border-b-4 shadow-xs border-gray-200">
        <a href="#0" className="text-xl font-bold">
          NARRATION
        </a>
        <button type="button" onClick={changeTheme}>
          <AiOutlineMenu size={24} />
        </button>
      </div>
    </>
  );
}

export default Header;
