/** @format */

import { NavLink } from "react-router";
import { Profile } from "./icons/Profile";
import { CartIcon } from "./icons/Cart";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
  const { user } = useAuth();

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-bold uppercase tracking-widest transition-all duration-300 py-1 ${
      isActive ? "text-black" : "text-gray-600 hover:text-black"
    }`;

  const underlineStyle = (isActive: boolean) =>
    `absolute bottom-0 left-0 h-[2px] bg-[#FF4461] transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex justify-between items-center pointer-events-auto">
        
        {/* Logo */}
        <div className="text-2xl font-black">
          <NavLink to="/" className="text-gray-900 group">
            Campus<span className="text-[#FF4461]">Bites</span>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink to="/" className={linkStyle}>
            {({ isActive }) => (
              <>
                Menu
                <span className={underlineStyle(isActive)}></span>
              </>
            )}
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            {({ isActive }) => (
              <>
                About
                <span className={underlineStyle(isActive)}></span>
              </>
            )}
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            {({ isActive }) => (
              <>
                Contact
                <span className={underlineStyle(isActive)}></span>
              </>
            )}
          </NavLink>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <NavLink 
            to={user ? "/cart" : "/signin"} 
            className={({ isActive }) => 
              `p-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-[#FF4461]/10 text-[#FF4461]" : "text-gray-900 hover:bg-white/20 hover:text-[#FF4461]"
              }`
            }
          >
            <CartIcon />
          </NavLink>

          <NavLink
            to={user ? "/profile" : "/signin"}
            className="flex items-center gap-3 pl-4 border-l border-white/30 group"
          >
            <div className="p-1 rounded-full border-2 border-transparent group-hover:border-[#FF4461] transition-all">
              <Profile />
            </div>
            <span className="font-extrabold text-gray-900 hidden sm:block group-hover:text-[#FF4461] transition-colors">
              {user ? user.name?.split(" ")[0] : "Sign In"}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}