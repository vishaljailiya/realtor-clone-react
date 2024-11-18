import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  function submit(e) {
    e.preventDefault();
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">SingUp</h1>
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
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                placeholder="Your Name"
              />
            </div>
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
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white mb-3 rounded-md"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 cursor-pointer text-xl "
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 cursor-pointer text-xl"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between mb-6 items-center whitespace-nowrap text-sm sm:text-lg">
              <p>
                Have a account ?
                <Link
                  to="/sing-in"
                  className="text-orange-400 hover:text-orange-700 transition duration-200 ease-in-out ml-1"
                >
                  Sing-in
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-400 hover:text-blue-800 transition duration-200 ease-in-out "
                >
                  forgot password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white px-7 py-3 text-sm font-medium uppercase transition duration-200 ease-in-out rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
            >
              SingUp
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

export default SingUp;
