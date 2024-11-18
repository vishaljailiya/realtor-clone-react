import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">Forgot_Password</h1>
      <div className="flex justify-center flex-wrap px-6 py-12 items-center max-w-6xl m-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1550527882-b71dea5f8089?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={submit}>
            <div>
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white mb-6 rounded-md border-gray-300 transition ease-in-out"
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email Address"
              />
            </div>
            <div className="flex justify-between mb-6 items-center whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't have a account ?
                <Link
                  to="/sing-up"
                  className="text-orange-400 hover:text-orange-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sing-in"
                  className="text-blue-400 hover:text-blue-800 transition duration-200 ease-in-out "
                >
                  singIn to Instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white px-7 py-3 text-sm font-medium uppercase transition duration-200 ease-in-out rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
            >
              Send Resent Email
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:bg-gray-300 after:border-t after:flex-1 after:bg-gray-300">
              <p className="text-center font mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
