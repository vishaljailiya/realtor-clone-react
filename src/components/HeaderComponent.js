import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function path(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bgwhite border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center bg-white px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="Logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                 ${path("/") && " border-b-red-500 text-black "} 
                  
             `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                 ${path("/offers") && "text-black border-b-red-500"} 
                  
                `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                 ${path("/sing-in") && "text-black  border-b-red-500"} `}
              onClick={() => navigate("/sing-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
