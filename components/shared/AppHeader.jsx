"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import HireMeModal from "../HireMeModal";
import logoLight from "../../public/images/logo-light.svg";
import logoDark from "../../public/images/logo-dark.svg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  const handleThemeToggle = () => {
    setTheme(activeTheme);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="flex justify-between items-center px-4 sm:px-0">
          {/* <div>
            <Link href="/">
              {activeTheme === "dark" ? (
                <Image
                  src={logoLight}
                  className="w-36 cursor-pointer"
                  alt="Dark Logo"
                  width={150}
                  height={120}
                />
              ) : (
                <Image
                  src={logoDark}
                  className="w-36 cursor-pointer"
                  alt="Dark Logo"
                  width={150}
                  height={120}
                />
              )}
            </Link>
          </div> */}
          <div
            onClick={handleThemeToggle}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-ternary-dark dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            <FiSun
              className="text-gray-200 hover:text-gray-50 text-xl"
              aria-label="Light Theme"
            />
          </div>
          {/* <div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div> */}

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
            <Link href="/projects" aria-label="Projects">
              Projects
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/about" aria-label="About Me">
              About Me
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/contact" aria-label="Contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            <Link href="/projects">Projects</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            <Link href="/about">About Me</Link>
          </div>

          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Contact"
          >
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div
            onClick={handleThemeToggle}
            aria-label="Theme Switcher"
            className="ml-8 bg-ternary-dark dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            <FiSun
              className="text-gray-200 hover:text-gray-50 text-xl"
              aria-label="Light Theme"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
