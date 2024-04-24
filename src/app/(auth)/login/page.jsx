"use client";

import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const router = useRouter();
  async function handleLogin(userInfo) {
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    console.log("data in res", res);
    if (res.ok) {
      router.push("/todo-list");
    }
  }
  return (
    <div>
      <div className="m-40">
        <img src="../assets/icons/logo.svg" alt="logo image" />
      </div>
      <div className="flex justify-evenly mr-10">
        <div className="mt-10">
          <h1 className="text-2xl mb-5">Login</h1>
          <form action={handleLogin} className="flex flex-col relative">
            <input
              className="mb-2 border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="text"
              placeholder="Email"
              name="email"
              htmlFor="email"
              id="email"
            />
            <input
              className="border-gray w-96 px-4 py-2 rounded-md font-medium bg-gray-100 border border-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type={showPassword ? "text" : "password"}
              placeholder="************"
              name="password"
              htmlFor="password"
              id="password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 mt-16 mb-24 mr-3"
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} style={{ color: "gray" }} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} style={{ color: "gray" }} />
              )}
            </button>
            <button
              type="submit"
              value="login"
              id="login"
              className="mt-6 w-full bg-blue-800 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
            >
              Login
            </button>
          </form>
          <p className="mt-2 text-gray mb-5">
            Didn't have account yet?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <div className="flex w-full items-center gap-2 py-6 text-sm text-gray">
            <div className="h-0.5 w-36 bg-slate-300"></div>
            Continue With
            <div className="h-0.5 w-36 bg-slate-300"></div>
          </div>
          <button
            type="submit"
            value="login"
            id="login"
            className="border border-gray-100 mt-6 w-full text-gray-100 py-2 rounded-md text-lg text-gray"
          >
            Login
          </button>
        </div>
        <div>
          <img
            src="../assets/icons/login.svg"
            alt="login image"
            className="w-[60%]"
          />
        </div>
      </div>
      <div>
        <p className="ml-40 text-gray">
          © 2024 My office. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
