import { LockClosedIcon, MailIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import AuthService from "../services/AuthServices";

function Login({ setisLogin, isLogin }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    let value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    AuthService.login(data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="w-full max-w-xl p-10 shadow-xl bg-white rounded-lg">
      <h4 className="my-4 text-xl font-bold text-center">Getting Started</h4>
      <form onSubmit={handleLoginSubmit} className="space-y-4">
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
          Login
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
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
