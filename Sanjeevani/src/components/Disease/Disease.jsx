import React from "react";

const Disease = () => {
  const doctora = [
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
        <div className="w-3/4 bg-blue-100 mt-12">
          {doctora.map((docs) => (
            <div className="flex flex-col  mt-6" key={docs.name}>
              <div className="mb-8 ">
                <div className="relative flex flex-row bg-slate-100 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl py-4 px-4 ml-12 mr-44">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row">
                      <div>
                        <img
                          className="md:rounded-full h-36 w-36 ml-10"
                          src={docs.src}
                          alt="Doctor Avatar"
                        />
                      </div>
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
                    </div>
                    <div className="absolute right-0 mr-5 mt-5">
                      <img
                        className="md:block"
                        src="./Images/arrow.png"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/4 bg-blue-100">
          <div className="flex flex-col -mt-24">
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
