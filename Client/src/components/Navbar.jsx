import { DropdownMenuPortal } from "@radix-ui/react-dropdown-menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../zustand/authStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar({ isNavOpen, setIsNavOpen }) {
  const { user, isSignedIn, logout } = useAuth();
  const handleLogOut = () => {
    logout();
    window.location.href = "/";
  };
  const signedIn = isSignedIn(); 
  console.log(user,"checking user");
  return (
    <nav className="bg-[#2c3e50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">
                College Booking
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/colleges"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Colleges
                </NavLink>
                
                <NavLink
                  to="/admission"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Admission
                </NavLink>
  
              </div>
            </div>
          </div>


          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {signedIn ? (
                      <>
                        <NavLink
                          to="/my-college"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4"
                        >
                          My College
                        </NavLink>
                        <NavLink
                          to="/profile"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4"
                        >
                          Profile
                        </NavLink>

                        {/* User Dropdown */}
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={
                                user?.photoURL || "https://i.ibb.co/SX0CJQ7/blank-profile-picture-973460-1280.png"
                              }
                              alt="avatar"
                            />
                          </DropdownMenuTrigger>

                          <DropdownMenuPortal>
                            <DropdownMenuContent className="bg-white rounded-md shadow-lg p-2">
                              <DropdownMenuItem
                                onClick={logout}
                                className="cursor-pointer text-sm text-gray-700 hover:bg-gray-100 px-4 py-2"
                              >
                                Sign out
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenuPortal>
                        </DropdownMenu>
                      </>
                    ) : (
                      <NavLink to="/sign-in">
                        <button
                          type="button"
                          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          Sign In
                        </button>
                      </NavLink>
                    )}
                  </div>
                </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isNavOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobil Menu */}

      <div
        className={`${isNavOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/colleges"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }
          >
            Colleges
          </NavLink>
          <NavLink
            to="/admission"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }
          >
            Admission
          </NavLink>
          {signedIn && (
            <NavLink
              to="/my-college"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              My College
            </NavLink>
          )}

          <NavLink
            to="/profile"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
