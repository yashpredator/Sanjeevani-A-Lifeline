import React from "react";
import DocNav from "./DocNav";

const Profile = () => {
  const doctor = [
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      //   lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Sourav",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Neuroscience",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Yashraj",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Cardiology",
      src: "./Images/YoungMan.png",
    },
    {
      name: "Tathagat",
      lastname: "Kumar",
      date: "17/12/2001",
      time: "11 AM",

      disease: "Surgeon",
      src: "./Images/YoungMan.png",
    },
  ];
  return (
    <>
      <DocNav />
      <div className="flex flex-row justify-around  p-5 bg-pink-400 ">
        <div className="w-5/12 bg-cyan-500 h-fit rounded-3xl sm:mt-5 mt-5">
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
              <span className="font-thin">ID-</span>
              <b>SNJ24066998G</b>
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
        <div className="w-6/12 bg-white rounded-3xl mt-5 overflow-y-auto">
          <div className="font-bold text-2xl p-3">Appointments</div>
          <div className="h-[70vh]">
        {doctor.map(({name,lastname,date,time,disease,src})=>(
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
                   <div className="text-gray-700">{disease}</div>
                 </div>
               </div>
               
               <div className="flex flex-row">
                 <div className="flex flex-col justify-center mr-8"><img src="./Images/message.png" alt="No message" /></div>
                 <div className="flex flex-col justify-center"><img className="h-[35%]" src="./Images/arrow.png" alt="No arrow"/></div>
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
};

export default Profile;
