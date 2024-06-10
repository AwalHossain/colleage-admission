import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar({ isNavOpen, setIsNavOpen, isSignedIn }) {
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
                                            ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                            : 'text-gray-300 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/colleges"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    }
                                >
                                    Colleges
                                </NavLink>
                                <NavLink
                                    to="/admission"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    }
                                >
                                    Admission
                                </NavLink>
                                {isSignedIn && (
                                    <NavLink
                                        to="/my-college"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        }
                                    >
                                        My College
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">

                            <SignedIn>
                                <NavLink
                                    to="/profile"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Profile
                                </NavLink>
                                <UserButton />
                            </SignedIn>
                            <SignedOut>
                                <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <svg
                                        className="h-6 w-6"
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
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </button>
                            </SignedOut>
                            <SignedOut>
                                <NavLink to="/sign-in">
                                    <button
                                        type="button"
                                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        Sign In

                                    </button>
                                </NavLink>
                            </SignedOut>
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


            <div className={`${isNavOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/colleges"
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        }
                    >
                        Colleges
                    </NavLink>
                    <NavLink
                        to="/admission"
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                        }
                    >
                        Admission
                    </NavLink>
                    {isSignedIn && (
                        <NavLink
                            to="/my-college"
                            className={({ isActive }) =>
                                isActive
                                    ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                            }
                        >
                            My College
                        </NavLink>
                    )}
                    <SignedIn>
                        <NavLink
                            to="/profile"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Profile
                        </NavLink>
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}
