import { useState } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);
  return (
    <nav className="py-10  mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl text-dosis">Software Engine</h1>
      <ul className="flex items-center">
        {darkMode ? (
          <button>
            <IoSunnySharp
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl text-black"
            />
          </button>
        ) : (
          <button>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl text-white"
            />
          </button>
        )}

        <button>
          <a
            className="bg-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-cyan-200 hover:text-black"
            href="https://github.com/milone1"
          >
            Resume
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
