import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import navbar_icon from './../assets/icons8-code-64.png'

const Navbar = () => {
    const location = useLocation();
    const [menu,setMenu] = useState(false);

    const handlesetMenu = () => {
        setMenu(!menu);
    }

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
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
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
                <Link to ='/'
                    className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
                >
                  Home
                </Link>
                <Link to ='/exp'
                    className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/exp' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
                >
                  Experience
                </Link>
                <Link to ='/research_work'
                    className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/research_work' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
                >
                  Research
                </Link>
                <Link to ='/projects'
                    className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/projects' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
                >
                  Projects
                </Link>
                <Link to ='/contact'
                    className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/contact' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menu && (<div className="sm:hidden" id="mobile-menu">
        <div className="text-center space-y-1 px-2 pb-3 pt-2">
          <Link to='/'
            className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
            aria-current="page"
          >
            Home
          </Link>
          <Link to='/exp'
            className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/exp' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
          >
            Experience
          </Link>
          <Link to='/research_work'
            className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/research_work' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
          >
            Research
          </Link>
          <Link to ='/projects'
            className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/projects' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
          >
            Projects
          </Link>
          <Link to ='/contact'
            className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === '/contact' ? 'bg-black text-white': 'text-gray-300 hover:bg-black hover:text-white'}`}
          >
            Contact
          </Link>
        </div>
      </div>)}
    </nav>
  );
};

export default Navbar;
