"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarComponent() {
  const pathname = usePathname();
  return (
    <nav className={` border-b border-b-gray relative`}>
      <div className="flex items-center py-4 pl-4 pr-10">
        {/* <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a> */}

        <div className="w-full flex justify-between ">
          <div className="flex md:order-2 gap-3 ">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-3xl text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image
                  src="/assets/icons/search-icon.svg"
                  width={15}
                  height={15}
                />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray rounded-3xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Image
                src="/assets/icons/search-icon.svg"
                width={15}
                height={15}
              />
            </button>

            <Image
              src="/assets/icons/notification.svg"
              width={22}
              height={22}
            />

            <div
              type="button"
              className="flex text-sm md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <div className="relative w-10 h-10">
                <Image
                  className="rounded-full"
                  src="https://i.pinimg.com/564x/66/57/c3/6657c31fa4c64e2e9c2f7f8667a85963.jpg"
                  fill
                />
              </div>
            </div>
          </div>

          <div
            className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image
                  src="/assets/icons/search-icon.svg"
                  width={15}
                  height={15}
                />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-3xl bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/todo-list"
                  className={` flex gap-2 py-2 px-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`}
                  aria-current="page"
                >
                  {pathname === "/todo-list" ? (
                    <Image
                      src="/assets/icons/list-filled-blue.svg"
                      width={18}
                      height={18}
                    />
                  ) : (
                    <Image
                      src="/assets/icons/list.svg"
                      width={18}
                      height={18}
                    />
                  )}

                  <span
                    className={`${
                      pathname === "/todo-list" ? "text-blue-700 " : "text-gray"
                    } text-lg`}
                  >
                    List
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/todo-board"
                  className=" flex gap-2 py-2 px-3 text-gray rounded md:bg-transparent  md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  {pathname === "/todo-board" ? (
                    <Image
                      src="/assets/icons/board-filled-blue.svg"
                      width={18}
                      height={18}
                    />
                  ) : (
                    <Image
                      src="/assets/icons/board.svg"
                      width={18}
                      height={18}
                    />
                  )}

                  <span
                    className={`${
                      pathname === "/todo-board" ? "text-blue-700" : "text-gray"
                    } text-lg`}
                  >
                    Board
                  </span>
                </Link>
              </li>
            </ul>
            
            <div className={`${pathname === "/todo-list" ? "border-b-2 border-b-blue-700 absolute bottom-0 w-20 left-2" : "border-b-2 border-b-blue-700 absolute bottom-0 w-90 left-24"}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
