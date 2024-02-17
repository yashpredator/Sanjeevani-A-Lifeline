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
      <div className="flex flex-col -mt-[15%]">
        <div className="p-4 ml-[11%]">
          <img className="size-[20%]" src="./Images/doctorsnearyou.png" />
        </div>
        <div className="flex flex-col mb-10">
          {doctor.map((details) => (
            <div
              className="shadow-xl bg-white shadow-slate-400 border-b-4 border-blue-950 rounded-3xl mb-5 ml-[12%] mr-10 p-5 w-3/4 flex flex-row items-center"
              key={details.name}
            >
              <div className="size-20 mr-5 rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={details.src}
                  alt="No image"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="sm:text-xl text-sm:font-bold text-black">
                  {details.name}
                </div>
                <div className="mr-10 sm:text-3xl text-sm text-gray-500">
                  {details.specialist}{" "}
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="sm:size-8 size-5 hover:cursor-pointer"
                  src="./Images/arrow.png"
                  onClick={() => {
                    window.location.href = "/Doctors";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="ml-[45%] mb-[2%]">
          <p className="text-xl text-blue-500 font-semibold">See All Doctors</p>
        </div>
      </div>
    </>
  );
}

export default Docarray;
