import React from "react";
import { useNavigate } from "react-router-dom";

const Disease = () => {
  // const doctora = [
  //   {
  //     name: "Sourav Kumar",
  //     lastname: "Kumar",
  //     specialist: "Neuroscience",
  //     src: "./Doctor.png",
  //   },
  //   {
  //     name: "Yash Kumar",
  //     lastname: "Kumar",
  //     specialist: "Cardiology",
  //     src: "./Doctor.png",
  //   },
  //   {
  //     name: "Tathagat Kumar",
  //     lastname: "Kumar",
  //     specialist: "Surgeon",
  //     src: "./Doctor.png",
  //   },
  //   {
  //     name: "Priya Kumar",
  //     lastname: "Kumar",
  //     specialist: "Gynecologist",
  //     src: "./Doctor.png",
  //   },
  // ];

  const navigate=useNavigate();

  return (
    <div className="bg-gradient-to-r from-violet-800 to-blue-900  overflow-y-auto">
      <div className="flex flex-row">
        <div className="mt-2 ml-3 size-14 hover:cursor-pointer">
          <img src="./Images/whitelogo.png" alt="No logo" onClick={()=>{window.location.href = '/Home';}}/>
        </div>
        <div className="ml-3 mt-5 size-40 hover:cursor-pointer">
          <img src="./Images/whitesanjeevani.png" alt="Sanjeevani logo" onClick={()=>{window.location.href = '/Home';}}/>
        </div>
      </div>
      <div className="text-white text-5xl p-2 font-serif">NEUROSCIENCE</div>

      <div className="flex flex-row">
        <div className="w-3/4 bg-blue-100 mt-8">
          {doctora.map((details) => (
            <div
            className="shadow-xl bg-white shadow-slate-400 border-b-4 border-blue-950 rounded-3xl mb-5 sm:ml-[5%] p-5 w-[85%] flex flex-row items-center mt-10 font-medium hover:cursor-pointer ml-[10%]"
            key={details.name}
            onClick={()=>{
                navigate("/Book-your-Doctor")
            }}
          >
            <div className="sm:size-20 sm:mr-[2%] ml-[1%] rounded-3xl overflow-hidden size-14">
              <img
                className="sm:w-full sm:h-full object-cover rounded-full "
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
                  navigate("/Book-your-Doctor")
                }}
              />
            </div>
          </div>
        ))}
      </div>

        <div className="w-1/4 bg-blue-100">
          <div className="flex flex-col -mt-[32%] mr-10">
            <div className="w-fit">
              <img  className="w-full" src="./Images/Brain.png" alt="Brain" />
            </div>
            <div className="font-medium">
              Lorem ipsum is a placeholder text commonly used in the printing
              and typesetting industry. It is used as dummy text when the actual
              content is not available or is not the primary focus. The term
              "Lorem ipsum" is derived from a work by Cicero, a Roman statesman,
              orator, and writer,d oual content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease;
