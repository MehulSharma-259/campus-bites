/** @format */

import { NavLink } from "react-router";
import { Profile } from "./icons/Profile";
import { CartIcon } from "./icons/Cart";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 py-3 rounded-2xl bg-black/5 backdrop-blur-xl border border-white/10 shadow-sm flex justify-between items-center pointer-events-auto transition-all duration-300 ease-in-out hover:shadow-md hover:bg-black/10">
        
        {/* Logo with slight scale on hover */}
        <div className="text-2xl font-extrabold tracking-tight transition-transform duration-200 active:scale-95">
          <NavLink to="/" className="text-gray-900 group">
            Campus<span className="text-[#FF4461] group-hover:text-red-600 transition-colors">Bites</span>
          </NavLink>
        </div>

        {/* Links with underlined hover animation */}
        <div className="hidden md:flex gap-10 items-center">
          {['Menu', 'About', 'Contact'].map((item) => (
            <NavLink 
              key={item}
              to="/" 
              className="relative text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-black transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4461] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Action Icons with smooth scaling */}
        <div className="flex items-center gap-5">
          <NavLink 
            to={user ? "/cart" : "/signin"} 
            className="p-2 rounded-full hover:bg-[#FF4461]/10 transition-all duration-200 active:scale-90 text-gray-800 hover:text-[#FF4461]"
          >
            <CartIcon />
          </NavLink>

          <NavLink
            to={user ? "/profile" : "/signin"}
            className="flex items-center gap-3 pl-4 border-l border-black/10 group transition-all duration-200 active:scale-95"
          >
            <div className="p-1 rounded-full border-2 border-transparent group-hover:border-[#FF4461] transition-all duration-300">
              <Profile />
            </div>
            <span className="font-bold text-gray-800 hidden sm:block group-hover:text-[#FF4461] transition-colors">
              {user ? user.name?.split(" ")[0] : "Sign In"}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}