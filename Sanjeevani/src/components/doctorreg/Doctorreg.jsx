import { Option, Select } from "@material-tailwind/react";
import { Avatar } from "@mui/material";
import React from "react";
import { useAuth } from "../../store/auth";

import Dropdown from "./Dropdown";

const Doctorreg = () => {
  const {user} = useAuth();
  return (
    <>
    <div className="bg-gradient-to-r from-violet-600 via-white to-violet-300 ">
        
        <div className="flex flex-row h-44 mx-auto items-center justify-center">
          <div> <img className="h-24 w-11/12" src="./logosan.png" alt="No logo" /></div>
          <div> <img className="ml-5 h-16" src="./Sanjeevani.png" alt="No image"/> </div>
        </div>
        
      </div>
      <div className="text-center text-3xl p-6 font-serif">
        Welcome to Sanjeevani-<b>Doctors Portal</b>
      </div>

      <div className="flex flex-row justify-around">
        <div className=" w-5/12 rounded-3xl p-5 border-4">
          <div className="flex flex-col ml-4">
            <div className="text-3xl">
              <b>Enter Details</b>
            </div>
            <div className="mt-5 ">
              <input
                className="w-3/4 h-14 rounded-3xl text-xl bg-blue-100 pl-3"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div className="mt-5 ">
              <input
                className="w-3/4 h-14 rounded-3xl text-xl bg-blue-100 pl-3"
                type="text"
                value={user.username}
                placeholder="Doctor ID"
              ></input>
            </div>
            <div className="flex sm:flex-row flex-col">
              <div className="mt-5 mr-5">
                <input
                  className="w-16 rounded-3xl text-xl h-14 bg-blue-100 pl-3"
                  type="text"
                  placeholder="Sex"
                ></input>
              </div>
              <div className="mt-5">
                <input
                  className="w-16 rounded-3xl text-xl h-14 bg-blue-100 pl-3"
                  type="text"
                  placeholder="Age"
                ></input>
              </div>
            </div>
            <div className="mt-5 ">
              <input
                className="w-3/4 h-14 rounded-3xl text-xl bg-blue-100 pl-3"
                type="text"
                placeholder="Address"
              ></input>
            </div>
            <div className="mt-5">
              <button className="bg-blue-900 text-2xl text-white p-3 rounded-3xl font-bold">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-5 ">
          <div className="">
            <Avatar
              style={{ width: "125px", height: "125px" }}
              alt="No image"
              src="./Doctor.png"
            />
          </div>
          <div className="mt-3">
            <button className="bg-blue-900 text-2xl text-white p-3 rounded-3xl font-bold">
              Availability
            </button>
          </div>
          <div className="flex flex-row">
            <div className="mt-5">
              <Dropdown />
            </div>
            <div className="font-bold text-xl p-5 mt-2">to</div>
            <div className="mt-5">
              <Dropdown />
            </div>
          </div>
          <div className="relative rounded-md shadow-sm mt-5">
            <textarea
            
              id="aboutMe"
              className=" bg-blue-100 form-input py-3 px-4 block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5 resize-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border-gray-300 rounded-md"
              placeholder="A little bit about yourself..."
              rows={5} // Adjust the number of rows as needed
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorreg;
