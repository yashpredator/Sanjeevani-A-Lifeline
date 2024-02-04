import React from "react";
import DocNav from "./DocNav";

const Profile = () => {
  const doctor = [
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Yashraj",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Cardiology",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Tathagat",
      //   lastname: "Kumar",
      date: "17/12/2001 | 05:00",

      specialist: "Surgeon",
      src: "./Images/YoungMan.png",
    },
  ];
  return (
    <>
      <DocNav />
      <div className="flex flex-row justify-around  p-5 bg-pink-400">
        <div className="w-5/12 bg-cyan-500 h-fit rounded-3xl sm:mt-9 mt-16">
          <div className="bg-white p-3 rounded-3xl">
            <div className="flex justify-center">
              <img
                className="size-4/6 rounded-3xl"
                src="./Images/YoungMan.png"
                alt="No profile pic"
              ></img>
            </div>
            <div className="flex justify-center p-3 font-bold font-serif">
                Dr. Yashraj Srivastava
            </div>
            <div className="flex justify-center p-3 font-thin font-serif text-gray-500">
                MBBS, MS, MD, PhD
            </div>
            <div className="flex justify-center p-3 font-bold font-serif">
                <span className="font-thin">ID-</span><b>SNJ24066998G</b>
            </div>
            <div className="flex justify-center p-3  font-serif ">
                Neurosurgeon
            </div>
            <div className="flex justify-center">
            <button className="bg-blue-900 text-2xl text-white p-3 rounded-3xl font-bold ">
                Update
              </button>
            </div>
            
          </div>
        </div>
        
          <div 
            className="w-6/12  relative h-[80vh] bg-white ml-10 mt-5 mr-10 mb-10 rounded-3xl flex flex-col overflow-visible border-1 border-gray-500"
            style={{ overflowY: "auto" }}
          >
            <div className="text-sm text-black font-inter font-semibold md:text-3xl mt-3 md:ml-8 ml">
              Appointments
            </div>
            <div className="overflow-y-auto h-auto">
              {doctor.map(({ name, specialist, src, date }) => (
                <div className="flex flex-col">
                  <div className=" ml-4 mt-5 w-4/12 rounded:xl h-4/12 flex flex-row lg:bg-slate-300 md:w-11/12 md:h-5/6 md:rounded-3xl md:ml-8 md:mt-8 ">
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
};

export default Profile;
