import React from "react";

function Docarray() {
  const doctor = [
    {
      name: "Sourav",
      lastname: "Kumar",
      specialist: "Neuroscience",
      src: "./Doctor.png",
    },
    {
      name: "Yash",
      lastname: "Kumar",
      specialist: "Cardiology",
      src: "./Doctor.png",
    },
    {
      name: "Tathagat",
      lastname: "Kumar",
      specialist: "Surgeon",
      src: "./Doctor.png",
    },
    {
      name: "Priya",
      lastname: "Kumar",
      specialist: "Gynecologist",
      src: "./Doctor.png",
    },
  ];


    return (
      <>
      {doctor.map((docs)=> (

      
        <div className="flex flex-col mb-8" key={docs.name}>
          <div className="mt-[-40px] mb-8">
            <div className="flex flex-row bg-slate-100 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl py-4 px-4 ml-44 mr-44">
              <img className="md:rounded-full h-36 w-36 ml-10" src={docs.src} />
              <div className="flex flex-col ml-8 ">
                <div className="mt-2 flex flex-col lg:flex-row  text-black text-5xl font-inter font-light leading-76 break-words ">
                  <div>{docs.name}</div>
                  <div className="text-xl hidden text-black sm:text-5xl font-inter font-semibold break-words ml-4 md:block">
                    {docs.lastname}
                  </div>
                </div>

                <div className=" mt-3 text-2xl from-stone-500 font-serif font-light leading-12 break-words text-slate-500">
                  {docs.specialist}
                </div>
              </div>
              <div className="">
                <img
                  className="absolute transform translate-y-4 right-48 hidden md:block"
                  src="./Images/arrow.png"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="font-bold text-blue-600 text-center mb-8">
        See all Doctors near you
      </div>
      </>
    );
}


export default Docarray;
