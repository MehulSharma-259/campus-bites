/** @format */

import {NavLink} from "react-router";

export function Signin() {
  return (
    <>
      <div className="h-screen bg-gradient flex justify-center items-center">
        <div className="bg-[#0000002d] w-full max-w-sm text-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <form className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1" htmlFor="university-id">
                University Id
              </label>
              <input
                id="university-id"
                placeholder="Enter your University Id"
                className="bg-[#575757b7] p-2 text-white rounded-sm"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                placeholder="Enter your Password"
                className="bg-[#575757b7] p-2 text-white rounded-sm"
                type="text"
              />
            </div>

            <button className="bg-[#FF4461] py-2 mt-3 rounded-sm hover:bg-[#e03a55] hover:cursor-pointer transition-colors w-full">
              Sign in
            </button>
          </form>
          <p className="text-[#555] font-bold text-sm text-center mt-3">
            New to CampusBites?{" "}
            <NavLink
              className={"text-[#FF4461] underline hover:text-[#e03a55]"}
              to="/signup"
            >
              Sign Up Now
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
