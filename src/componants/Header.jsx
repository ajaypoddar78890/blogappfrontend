import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Toggle dropdown visibility
    const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const dropdownId = toggle.getAttribute("data-dropdown-toggle");
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
          dropdown.classList.toggle("hidden");
        }
      });
    });

    // Toggle hamburger menu visibility
    const hamburgerToggle = document.querySelector(
      "[data-collapse-toggle='navbar-multi-level']"
    );
    const navbarMenu = document.getElementById("navbar-multi-level");
    if (hamburgerToggle && navbarMenu) {
      hamburgerToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("hidden");
      });
    }
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              IonAssist
            </span>
          </a>

          {/* Centered Navbar Links */}
          <div className="hidden md:flex md:space-x-8 md:flex-1 md:justify-center">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 dark:text-white md:p-0"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 dark:text-white md:p-0"
            >
              About
            </a>
            <li className="relative list-none group">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between text-gray-900 hover:text-blue-700 dark:text-white md:p-0"
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                id="dropdownNavbar"
                className="hidden absolute left-0 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 group-hover:block"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Overview
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 dark:text-white md:p-0"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 dark:text-white md:p-0"
            >
              Contact
            </a>
          </div>

          {/* Right-Aligned Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800">
              Register
            </button>
            <button className="px-4 py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white">
              Login
            </button>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
