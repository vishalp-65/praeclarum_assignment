import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
    const location = useLocation();
    const currActive = location.pathname;

    return (
        <nav className="p-4 w-full fixed mt-2">
            <div className="flex items-center justify-center gap-16 text-gray-900 dark:text-white">
                <div className="w-full flex items-center justify-center">
                    <div className="w-72 flex bg-gray-400/15 dark:bg-gray-800/15 items-center rounded-full border border-gray-700 backdrop-blur-md">
                        <Link to="/add">
                            <div
                                className={`w-36 font-semibold px-3 py-1 cursor-pointer text-gray-400 rounded-full flex justify-center items-center ${
                                    currActive === "/add"
                                        ? "bg-gray-950/15 dark:bg-white/15 dark:text-white text-black"
                                        : "text-gray-700 dark:text-gray-500 hover:bg-white/10 hover:dark:text-gray-300 hover:text-gray-600"
                                }`}
                            >
                                <p>Add Event</p>
                            </div>
                        </Link>
                        <Link to="/list">
                            <div
                                className={`w-36 font-semibold px-3 py-1 cursor-pointer text-gray-400 rounded-full flex justify-center items-center ${
                                    currActive === "/list"
                                        ? "bg-black/10 dark:bg-white/15 dark:text-white text-black"
                                        : "text-gray-700 dark:text-gray-500 hover:bg-white/10 hover:dark:text-gray-300 hover:text-gray-600"
                                }`}
                            >
                                <p>Event List</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
