import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navbar_icon from "./../assets/icons8-code-64.png";

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const handlesetMenu = () => {
    setMenu(!menu);
  };

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/exp",
      name: "Experience",
    },
    {
      path: "/research_work",
      name: "Research",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handlesetMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto bg-white p-1 rounded-md"
                src={navbar_icon}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      location.pathname === link.path
                        ? "text-white"
                        : "text-gray-400"
                    } hover:text-white`}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="text-center space-y-1 px-2 pb-3 pt-2">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-black text-white"
                    : "text-gray-400"
                } hover:text-white`}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
