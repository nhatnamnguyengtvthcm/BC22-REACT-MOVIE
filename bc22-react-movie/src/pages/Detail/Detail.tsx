import React from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { GlassCard } from "components/GlassCard/GlassCard";
import { height } from "@mui/system";
import { Box } from "@mui/material";

const Detail = () => {
  return (
    // <CustomCard
    //     effectColor="#C780FF" // required
    //     color="#14AEFF" // default color is white
    //     blur={10} // default blur value is 10px
    //     borderRadius={0} // default border radius value is 10px
    // >
    //     <h1>Hello</h1>
    //     <p>This is an example</p>
    // </CustomCard>
    // <div style={{backgroundColor:"red"}}>
    //      <CustomCard effectColor={"#C780FF"} color="#14AEFF" borderRadius={0}></CustomCard>
    // </div>
    // <div style={{backgroundColor:"red",width:"100%", height:"100%"}} className="p-5">

    // </div>
    <div>
      <GlassCard noBorders color="#14AEFF">
        <h1>Hello</h1>
        <div>
          <input type="text" />
          Text
        </div>
      </GlassCard>
      <div>
        <input type="text" />
        Teest1
      </div>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <GlassCard color="#123456">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </GlassCard>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>

    //  <h1>Hello</h1>
  );
};

export default Detail;
