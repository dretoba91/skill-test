"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="md:h-screen md:w-64 bg-white border-r-2 text-black flex flex-col z-10 left-0 pt-10">
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center justify-between p-4">
        {/* <span className="text-2xl font-bold">Menu</span> */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* <svg
            className="w-6 h-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18">
            <defs>
              <clipPath id="a">
                <path d="M0 0h26v18H0z" />
              </clipPath>
            </defs>
            <g
              data-name="アートボード – 1"
              clipPath="url(#a)"
              fill="none"
              stroke="black"
            >
              <path data-name="線 1" d="M0 .5h26" />
              <path data-name="線 2" d="M0 17.5h26" />
              <path data-name="線 3" d="M0 9h26" />
            </g>
          </svg>
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className={`flex-grow ${isOpen ? "block" : "hidden"} md:block`}>
        <ul>
          <li className="flex items-center mb-8 ml-2">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5H2z" />
            </svg>
            <button onClick={() => handleNavigate("/")}>Dashboard</button>
          </li>
          <li className="flex items-center mb-8 ml-2">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 14l4-4h-3v-4H8v4H5l4 4zM5 10h2v2H5zm14 2h2v2h-2zm0-4h2v2h-2z" />
            </svg>
            <button onClick={() => handleNavigate("/skill-test")}>
              Skill Test
            </button>
          </li>
          <li className="flex items-center mb-4 ml-2">
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2zm-6 2h8v2h-8V4zm0 4h8v2h-8V8zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
            </svg>
            <button onClick={() => handleNavigate("/internship")}>
              Internship
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
