/** @format */

import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router";

// We assume your User type from frontend/src/types/index.tsx
// might have 'name' and 'universityId'.
// Adjust this based on your actual User type.

export function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // This clears the user and token from context and localStorage
    navigate("/signin", {replace: true}); // Redirect to signin page
  };

  // Fallback while user data is loading or if page is accessed without login
  if (!user) {
    return (
      <div className="h-screen custom-bg-image flex justify-center items-center p-4">
        {/* Adjusted fallback styles for readability */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-xl">
            <p className="text-gray-900 font-medium">You are not signed in. Please sign in.</p>
        </div>
      </div>
    );
  }

  // As an "extra thing," we can create a placeholder avatar with the user's initials
  const getInitials = () => {
    if (user.name) {
      // Assuming user has a 'name' field
      return user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
    // Fallback to university ID
    return user.universityId.substring(0, 2).toUpperCase();
  };

  return (
    <div className="h-screen custom-bg-image flex justify-center items-center p-4">
      {/* Updated main card styles: Lighter background, sharper blur, dark text */}
      <div className="bg-white/70 w-full max-w-md text-gray-800 rounded-2xl shadow-2xl p-8 backdrop-blur-md">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Your Profile</h1>

        {/* --- User Details Section --- */}
        <div className="flex flex-col items-center mb-8">
          {/* Profile Picture Placeholder (Kept the original accent color) */}
          <div className="bg-[#FF4461] w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold mb-4 border-2 border-white/80 text-white">
            {getInitials()}
          </div>
          
          <h2 className="text-2xl font-semibold">{user.name}</h2>

          <p className="text-gray-600 text-sm">{user.universityId}</p>
        </div>

        {/* --- Navigation Section --- */}
        <div className="flex flex-col gap-4 mb-8">
          {/* UPDATED: Buttons use a darker gray (near-black) that provides high contrast and a sleek look */}
          <Link
            to={user ? "/cart" : "/signin"} 
            className="bg-[#575757b7] p-4 rounded-xl text-center font-medium hover:bg-[#454444b7] shadow-md transition-colors text-white"
          >
            My Cart
          </Link>
          <Link
            to={user ? "/orders" : "/signin"}
            className="bg-[#575757b7] p-4 rounded-xl text-center font-medium hover:bg-[#454444b7] shadow-md transition-colors text-white"
          >
            My Previous Orders
          </Link>
        </div>

        {/* --- Logout Button (Maintained original accent) --- */}
        <button
          onClick={handleLogout}
          className="bg-[#FF4461] py-3 rounded-xl hover:cursor-pointer hover:bg-[#e03a55] transition-colors w-full font-bold text-lg text-white shadow-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}