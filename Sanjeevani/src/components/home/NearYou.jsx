import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function NearYou() {
  return (
    <>
      <div className="flex items-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("./Nurse.png")' }}>
        
        <TextField className="-top-1/4 left-[15rem]  bg-slate-400 opacity-75 text-black w-[65vw] rounded-3xl px-4 py-2" 
        id="outlined-basic" label="Search" variant="outlined" />
         <img  className="absolute sm: left-[8%] transform  translate-y-56 -translate-x-1/2 lg:translate-x-[15%]" src="./Images/doctorsnearyou.png" alt="Doctors Near You" />

      </div>
    </>
  );
}

export default NearYou;
