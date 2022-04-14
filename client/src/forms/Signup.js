import React, { useState } from "react";
import { MailIcon, LockClosedIcon, UserIcon } from "@heroicons/react/outline";
import AuthService from "../services/AuthServices";

function Signup({ isLogin, setisLogin }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    let value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    AuthService.register(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="w-full max-w-xl p-10 shadow-xl bg-white rounded-lg">
      <h4 className="my-4 text-xl font-bold text-center">Register</h4>
      <form className="space-y-4" onSubmit={handleSignupSubmit}>
        <div className="input_div">
          <input
            type="text"
            placeholder="username"
            className="input"
            name="username"
            value={data.username}
            onChange={onHandleChange}
          />
          <UserIcon className="h-6 px-3" />
        </div>
        <div className="input_div">
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
            value={data.email}
            onChange={onHandleChange}
          />
          <MailIcon className="h-6 px-3" />
        </div>
        <div className="input_div">
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            value={data.password}
            onChange={onHandleChange}
          />
          <LockClosedIcon className="h-6 px-3" />
        </div>

        <button type="submit" className="btn">
          Signup
        </button>
      </form>

      <p className="mt-2 text-gray-400 text-sm">
        Not have an account?{" "}
        <span
          className="text-black font-bold cursor-pointer"
          onClick={() => {
            setisLogin(!isLogin);
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
