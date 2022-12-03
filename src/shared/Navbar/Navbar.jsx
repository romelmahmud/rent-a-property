import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 h-20 text-gray-700 border ">
      <div className="mx-auto max-w-7xl px-6 md:px-5 flex justify-between items-center h-full">
        <div className="hidden lg:flex items-center">
          <a href="/" className="font-extrabold text-3xl text-blue-700 ">
            Rent a Property
          </a>
          <nav className="ml-16">
            <ul className="lg:flex">
              <li>
                <a
                  className="mr-10 text-lg  font-semibold  text-blue-700 py-1 px-3 bg-blue-100 transition-all duration-300 ease-in-out"
                  href="/"
                >
                  Rent
                </a>
              </li>
              <li>
                <a
                  className="mr-10 text-lg font-semibold hover:text-blue-700 transition-all py-1 px-3 hover:bg-blue-100 duration-300 ease-in-out"
                  href="/"
                >
                  Buy
                </a>
              </li>
              <li>
                <a
                  className="mr-10 text-lg font-semibold hover:text-blue-700 transition-all py-1 px-3 hover:bg-blue-100 duration-300 ease-in-out"
                  href="/"
                >
                  Manage Property
                </a>
              </li>
              <li>
                {" "}
                <a
                  className=" text-lg font-semibold hover:text-blue-700 transition-all py-1 px-3 hover:bg-blue-100 duration-300 ease-in-out"
                  href="/"
                >
                  Recourses
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex  items-center lg:hidden">
          <a href="/" className="font-extrabold text-3xl text-blue-700 mr-10 ">
            Rent a Property
          </a>

          {open && (
            <XMarkIcon
              className="h-8 w-8 hover:text-blue-700 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
          {!open && (
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="h-8 w-8 hover:text-blue-700 cursor-pointer "
            />
          )}
        </div>
        <div className="hidden lg:block">
          <button className="text-blue-700 py-[6px] px-3 rounded-md border border-gray-500/50 mr-5 font-semibold">
            Login
          </button>
          <button className="text-white py-[6px] px-3 rounded-md border border-blue-700 bg-blue-700 font-semibold">
            SignUp
          </button>
        </div>
        {/* Mobile nav menu */}
        <nav
          className={`lg:hidden absolute bg-gray-50 w-full pb-5 left-0 text-center transition-all text-gray-700  duration-500 ease-in-out ${
            open ? "top-20" : "top-[-320px]"
          }`}
        >
          <ul className="">
            <li className="my-4">
              <a
                className="mr-10 text-lg  font-semibold  hover:text-blue-700 py-1 px-3 hover:bg-blue-100 transition-all duration-300 ease-in-out"
                href="/"
              >
                Rent
              </a>
            </li>
            <li className="my-4">
              <a
                className="mr-10 text-lg font-semibold hover:text-blue-700 transition-all py-1 px-3 hover:bg-blue-100 duration-300 ease-in-out"
                href="/"
              >
                Buy
              </a>
            </li>
            <li className="my-4">
              <a
                className="mr-10 text-lg font-semibold hover:text-blue-700 transition-all py-1 px-3 hover:bg-blue-100 duration-300 ease-in-out"
                href="/"
              >
                Manage Property
              </a>
            </li>
            <li className="my-4">
              {" "}
              <a
                className="mr-10 text-lg font-semibold hover:text-blue-700 transition-all py-1 px-3 hover:bg-blue-100 duration-300 ease-in-out"
                href="/"
              >
                Recourses
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
