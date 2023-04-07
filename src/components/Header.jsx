import { Link } from "react-router-dom";
import ChangingMode from "./ChangingMode";
function Header() {
  return (
    <>
      <div className="hidden  md:flex sticky top-0 z-10 bg-white  justify-between sm:px-20 md:px-28  lg:px-32 xl:px-40 py-5 border-b-2 shadow-xs border-gray-200 dark:bg-black dark:text-white dark:border-b-2">
        <Link to="/" className="text-3xl font-bold">
          NARRATION
        </Link>
        <ChangingMode />
      </div>
      <div className="md:hidden  sm:flex sticky top-0 z-10 bg-white flex justify-between px-10 py-3 border-b-2 shadow-xs border-gray-200 dark:bg-black dark:text-white dark:border-b-2 dark:border-gray-200">
        <Link to="/" className="text-xl font-bold">
          NARRATION
        </Link>
        <ChangingMode />
        {/* <button type="button">
          <AiOutlineMenu size={24} />
        </button> */}
      </div>
    </>
  );
}

export default Header;
