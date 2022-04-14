import React, { useState } from "react";
import Login from "../forms/Signup";
import Signup from "../forms/Login";

function Auth() {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col items-center pt-10 space-y-5">
      <h2 className="text-3xl font-medium my-3">Social Authentication</h2>

      <>
        {isLogin ? (
          <Login isLogin={isLogin} setisLogin={setisLogin} />
        ) : (
          <Signup isLogin={isLogin} setisLogin={setisLogin} />
        )}
      </>
    </div>
  );
}

export default Auth;
