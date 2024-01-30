import React from "react";
import { Button } from "@mui/material";
import PatientNav from "./PatientNav";

function PatientDetails() {
  const doctor = [
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date:"17/12/2001 | 05:00",
      
      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Yashraj",
      //   lastname: "Kumar",
      date:"17/12/2001 | 05:00",
      
      specialist: "Cardiology",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Tathagat",
      //   lastname: "Kumar",
      date:"17/12/2001 | 05:00",
      
      specialist: "Surgeon",
      src: "./Images/YoungMan.png",
    },
    
  ];
  return (
    <>
      <PatientNav />
      <div
        className="relative flex flex-row mt-10 mb-8 ml-8 mr-8 rounded-r-3xl rounded-b-3xl bg-blue-400"
        // style={{ backgroundImage: 'url("./Images/Group 15.png")' }}
      >
        <div className="relative w-5/12 h-1/12 bg-white ml-10 mt-10 mr-10 mb-10 rounded-3xl">
          <div className="relative w-6/12 h-1/5 ml-8 mt-8 mr-4 mb-0 md:w-10/12 md:h-1/2 md:ml-8 md:mr-12 md:mt-7 md:mb-7">
            <img className="h-full w-full rounded-3xl" src="./Images/YoungMan.png" />
          </div>
          <div className="flex flex-col">
            <div className="ml-8 mr-2 text-black font-inter font-bold text-3xl md:ml-20">
              Sourav Kumar
            </div>
            <div className="ml-8 mt-0 text-black font-inter font-light text-3xl md:ml-20 md:mt-3">
              21 Male
            </div>
            <div className="ml-8 mt-0 text-black font-inter font-medium text-xl md:ml-20 md:mt-4">   
              Heart Patient
            </div>
            <div className="md:ml-20 mt-4 rounded-full mr-28 ml-12">
              <Button
                className=" rounded-3xl"
                variant="contained"
                href="#contained-buttons"
              >
                Update
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-4/12 md:w-10/12 h-1/12 bg-white ml-10 mt-10 mr-10 mb-10 rounded-3xl flex flex-col" style={{ overflowY: "auto", maxHeight: "600px" }}>
          <div className="text-sm text-black font-inter font-semibold md:text-3xl mt-3 md:ml-8 ml">
            Appointments
          </div>
          <div className="overflow-y-auto"> 
          {doctor.map(({name,specialist,src,date}) => (
            <div className="flex flex-col">
              <div className=" ml-4 mt-5 w-4/12 rounded:xl h-4/12 flex flex-row bg-slate-300 md:w-11/12 md:h-5/6 md:rounded-3xl md:ml-8 md:mt-8">
                <img
                  className="md:rounded-full h-5/6 md:w-24 md:ml-5 mt-4 w-16 ml-1 "
                  src={src}
                />
                <div className="font-thin ml-1 text-sm text-black font-inter md:font-medium md:text-3xl md:mt-2 md:ml-6 flex flex-col">
                  {name}
                  <div className="md:text-lg md:mt-[-4px] md:font-normal text-sm font-extralight mr-9">
                    {date}
                  </div>
                  <div className="md:text-lg font-serif text-sm font-thin">
                    {specialist}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default PatientDetails;
