/** @format */

import {NavLink} from "react-router";

export function Signup() {
  return (
    <>
      <div className="h-screen bg-gradient flex justify-center items-center">
        <div className="bg-[#0000002d] w-full max-w-sm text-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

          <form className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                placeholder="Enter Your Name"
                className="bg-[#575757b7] p-2 text-white rounded-sm"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter Your Email"
                className="bg-[#575757b7] p-2 text-white rounded-sm"
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1" htmlFor="university-id">
                University Id
              </label>
              <input
                id="university-id"
                placeholder="Enter Your University Id"
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
                placeholder="Enter Your Password"
                className="bg-[#575757b7] p-2 text-white rounded-sm"
                type="text"
              />
            </div>

            <button className="bg-[#FF4461] py-2 mt-4 rounded-sm hover:bg-[#e03a55] hover:cursor-pointer transition-colors w-full">
              Sign Up
            </button>
          </form>
          <p className="text-[#555] font-bold text-sm text-center mt-2">
            Already a member?{" "}
            <NavLink
              className={"text-[#FF4461] underline hover:text-[#e03a55]"}
              to="/signin"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
