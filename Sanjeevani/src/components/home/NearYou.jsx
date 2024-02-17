import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function NearYou() {
  return (
    <>
      <div
        className="flex items-center h-screen bg-cover"
        style={{ backgroundImage: 'url("./Nurse1.png")'}}
      >
        <div className="flex ml-auto mr-auto w-9/12 sm:mt-[-22%] mt-0 ">
          <TextField
            className=" bg-slate-400 opacity-75 text-black rounded-3xl w-full"
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </div>
        {/* <div className="absolute inset-x-[13%] mt-[33%] overflow-auto">
          <img className="sm:size-1/3 size-[15%] overflow-auto" src="./Images/doctorsnearyou.png"></img>

        </div> */}
      </div>
    </>
  );
}

export default NearYou;
