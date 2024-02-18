import React from "react";
import { Button } from "@mui/material";
import PatientNav from "./PatientNav";
import { Popover, Typography } from "@mui/material";
import axios from "axios";
import { useAuth } from "../../store/auth";

function PatientDetails() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {user} = useAuth();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;
  const doctor = [
    {
      name: " Dr.Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Dr.Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Dr.Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Dr.Yashraj",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "05:00",

      specialist: "dr>Cardiology",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Dr. Tathagat",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "05:00",

      specialist: "Surgeon",
      src: "./Images/YoungMan.png",
    },
  ];
  return (
    <>
      <PatientNav />
      <div className="flex flex-row justify-around  p-5 bg-pink-400 ">
        <div className="w-5/12 bg-white  rounded-3xl sm:mt-5 mt-5 ">
          <div className=" h-fit p-3 rounded-3xl flex flex-col justify-around">
            <div className="flex justify-center">
              <img
                className="size-5/6 rounded-3xl mt-7"
                src="./Images/YoungMan.png"
                alt="No profile pic"
              ></img>
            </div>
            <div className="flex justify-center p-3 font-bold font-serif">
              {user.username}
            </div>
            <div className="flex justify-center p-3 font-thin font-serif text-gray-500">
              AIDS Patient
            </div>
            <div className="flex justify-center p-3 font-bold font-serif">
              <span className="font-thin">Age:</span>
              <b>Not Set</b>
            </div>
            {/* <div className="flex justify-center p-3  font-serif ">
              Neurosurgeon
            </div> */}
            <div className="flex justify-center">
              <button onClick={()=>{window.location.href='./UserProfile'}} className="bg-blue-900 text-2xl text-white p-3 rounded-3xl font-bold ">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="w-6/12 bg-white rounded-3xl mt-5 ">
          <div className="font-bold text-2xl p-3 flex flex-row justify-center">
            Appointments
          </div>
          <div className="lg:h-[90vh] h-[70vh] overflow-y-auto">
            {doctor.map(({ name, lastname, date, time, speacialist, src }) => (
              <div className="flex flex-col mb-3 ">
                <div className="flex flex-col px-6 ">
                  <div className=" flex flex-row rounded-3xl border-r-8 border-b-8">
                    <div className="flex flex-row justify-between w-full rounded-3xl border-3">
                      <div className="flex flex-row ">
                        <div className="flex flex-col justify-center size-28 px-3 ">
                          <img
                            className="rounded-3xl"
                            src={src}
                            alt="No profile"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="text-xl">
                            {name} <b className="">{lastname}</b>
                          </div>
                          <div className="flex sm:flex-row flex-col">
                            <div className="mr-1">
                              <b>{date}</b>
                            </div>
                            <div className="text-gray-400">{time}</div>
                          </div>
                          <div className="text-gray-700">{speacialist}</div>
                        </div>
                      </div>

                      <div className="flex flex-row">
                        <div className="flex flex-col justify-center mr-8">
                          <img
                            onClick={handleClick}
                            src="./Images/message.png"
                            alt="No message"
                          />
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <div className="flex flex-col sm:w-60 sm:h-60 w-24 h-24 rounded-full">
                              <div className="w-full h-2/6 bg-blue-600">
                                <div className="sm:mt-8 ml-1 mb-1 sm:font-bold text-white sm:text-xl font-normal text-xs mt:1">
                                  Patient Record
                                </div>
                              </div>
                              <div className="sm:mt-2 mr-1 ml-1 mb-1 mt-0 overflow-auto text-wrap">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nam mollitia tempore vel
                                deserunt praesentium eos quis amet magnam
                                delectus nisi eveniet accusantium impedit rerum
                                temporibus, autem veniam illum recusandae hic?
                              </div>
                            </div>
                          </Popover>
                        </div>
                        <div className="flex flex-col justify-center">
                          <img
                            className="h-[35%]"
                            src="./Images/arrow.png"
                            alt="No arrow"
                          />
                        </div>
                      </div>
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
