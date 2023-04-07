import React, { useState } from "react";
import { BiSun } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";

function ChangingMode() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);

    if (theme) {
      window.localStorage.setItem("theme", "light");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex justify-center items-center">
      {!theme === true ? (
        <button type="button" onClick={changeTheme}>
          <BsFillMoonStarsFill size={24} />
        </button>
      ) : (
        <button type="button" onClick={changeTheme}>
          <BiSun size={24} />
        </button>
      )}
    </div>
  );
}

export default ChangingMode;
