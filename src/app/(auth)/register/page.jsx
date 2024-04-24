import { registerService } from "@/service/auth.service";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";
import React from "react";

const RegisterPage = () => {
  async function handledRegister(userInfo) {
    "use server";
    console.log("user info", userInfo);
    const newUserInfo = {
      firstname: userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      email: userInfo.get("email"),
      gender: userInfo.get("gender"),
      password: userInfo.get("password"),
    };
    console.log(newUserInfo);
    const res = await registerService(newUserInfo);
    console.log("res: ", res);
    if (res.status == 200) {
      redirect("/login");
    }
  }
  return (
    <div>
      <div className="mt-72 ml-40">
        <img src="../assets/icons/logo.svg" alt="logo image" />
      </div>
      <div className="ml-40 mt-10 flex">
        <form action={handledRegister} className="flex gap-5 relative">
          <div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                First Name :
              </label>
              <input
                className="mb-2 border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Enter your name"
                name="firstname"
                htmlFor="name"
                id="name"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="mb-2">
                Email :
              </label>
              <input
                className="mb-2 border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="info@xyz.com"
                name="email"
                htmlFor="email"
                id="email"
              />
            </div>
            <div className="flex flex-col mb-5 mt-3">
              <label htmlFor="" className="mb-2">
                Password :
              </label>
              <input
                className="border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="************"
                name="password"
                htmlFor="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              value="login"
              id="login"
              className="rounded-2xl mt-6 w-28 bg-blue-500 to-red-400 hover:to-red-700 text-indigo-100 py-2 text-lg tracking-wide transition duration-1000"
            >
              Sign Up
            </button>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2">
                Last Name :
              </label>
              <input
                className="mb-2 border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Enter your name"
                name="lastname"
                htmlFor="name"
                id="name"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="mb-2">
                Gender :
              </label>
              <select
                name="gender"
                id="gender"
                className="mb-2 border-gray w-96 px-4 py-2.5 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              >
                <option value="">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col mb-5 mt-3">
              <label htmlFor="" className="mb-2">
                Confirm Password :
              </label>
              <input
                className="border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="************"
                name="password"
                htmlFor="password"
                id="password"
              />
            </div>
          </div>
        </form>
        <div className="ml-32">
          <img src="../assets/icons/sign-up.svg" alt="sign-up image" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
