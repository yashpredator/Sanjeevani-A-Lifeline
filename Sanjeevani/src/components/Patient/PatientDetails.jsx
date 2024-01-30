import React from 'react'

function PatientDetails() {
    const doctor = [
        {
          name: "Sourav",
        //   lastname: "Kumar",
          specialist: "Neuroscience",
          src: "./Images/YoungMan.png",
        },
        {
          name: "Yash",
        //   lastname: "Kumar",
          specialist: "Cardiology",
          src: "./Images/YoungMan.png",
        },
        {
          name: "Tathagat",
        //   lastname: "Kumar",
          specialist: "Surgeon",
          src: "./Images/YoungMan.png",
        },
        {
          name: "Priya",
          specialist: "Gynecologist",
          src: "./Images/YoungMan.png",
         
        },
      ];
  return (
    <>
    <div className="relative flex flex-row h-screen mt-10 mb-8 ml-8 mr-8 rounded-r-3xl rounded-b-3xl" style={{ backgroundImage: 'url("./Images/Rectangle.png")' }}>
       <div className='relative w-5/12 h-1/12 bg-white ml-10 mt-10 mr-10 mb-10 rounded-3xl'>
        <div className='relative  bg-slate-300 w-6/12 h-1/5 ml-8 mt-8 mr-4 mb-8 rounded-3xl md:w-10/12 md:h-1/2 md:ml-8 md:mr-12 md:mt-7 md:mb-7'>
            <img  src="./Images/YoungMan.png"/>

        </div>
        <div className="flex flex-col">
            <div className='ml-8 mt-[-4px] mr-2 text-black font-inter font-bold text-3xl md:ml-20'>
                Sourav Kumar
            </div>
            <div className='ml-8 mt-0 text-black font-inter font-light text-3xl md:ml-20 md:mt-3' >21 Male</div>
            <div className='ml-8 mt-0 text-black font-inter font-medium text-xl md:ml-20 md:mt-4'> Heart Patient</div>

        </div>

       </div>
       <div className='relative w-4/12 md:w-10/12 h-1/12 bg-white ml-10 mt-10 mr-10 mb-10 rounded-3xl flex flex-col'>
        <div className="text-sm text-black font-inter font-semibold md:text-3xl mt-3 md:ml-8 ml">Appointments</div>

        <div></div>
        <div className=" ml-4 mt-5 w-4/12 rounded:xl h-4/12 flex flex-row bg-slate-300 md:w-11/12 md:h-1/4 md:rounded-3xl md:ml-8 md:mt-5">
            <img className="md:rounded-full h-5/6 md:w-24 md:ml-7 mt-2 w-16 ml-1" src="./Images/YoungMan.png"/>
            <div className="font-extralight ml-[-4px] text-sm text-black font-inter md:font-medium md:text-3xl mt-4 md:ml-6 flex flex-col">
                Radhika kri
               <div className="md:text-lg md:mt-[-4px] md:font-normal text-sm font-extralight ">07/07/11 | 12 PM</div>
               <div className='md:text-lg font-serif text-sm font-thin'>Cardiologist</div>
            </div>
        </div>
       
        
       
        

       </div>

    </div>
    </>
  )
}

export default PatientDetails
