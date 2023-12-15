import { FaSearch, FaBell, FaAngleDown, FaLeaf } from "react-icons/fa";
import { navLinks } from "../../constents";
import { useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);

        return () => (window.onscroll = null);
    };

    return (
        <div
            className={`text-white w-full text-sm fixed top-0 z-[999] bg-gradient-to-t from-transparent to-black ${
                isScrolled && "main-color"
            } transition duration-700 ease-in-out`}
        >
            <div className="px-16 py-0 flex justify-between h-20 items-center">
                <div className="flex items-center">
                    {/* Left */}
                    <img className="h-6 mr-10" src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix Logo" />
                    {navLinks.map((navItem) => (
                        <span className="mr-5 cursor-pointer" key={navItem}>
                            {navItem}
                        </span>
                    ))}
                </div>
                <div className="flex items-center">
                    {/* Right */}
                    <FaSearch className="nav-icon" />
                    <FaBell className="nav-icon" />
                    <img
                        className="w-8 h-8 rounded-md object-cover cursor-pointer"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="avather"
                    />
                    <div className="group">
                        <FaAngleDown className="nav-icon" />

                        <div className="hidden main-color rounded-md group-hover:flex flex-col absolute">
                            <span className="p-3 cursor-pointer">Settings</span>
                            <span className="p-3 cursor-pointer">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
