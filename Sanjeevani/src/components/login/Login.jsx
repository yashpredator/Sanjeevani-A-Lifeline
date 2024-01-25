import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [currentImage, setCurrentImage] = useState("Doctor.png");

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentImage state to switch between images
      setCurrentImage((prevImage) => (prevImage === "Doctor.png" ? "Mobile.jpeg" : "Doctor.png"));
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="w-1/4">
        <img
            className="transition-opacity duration-1000 ease-in-out opacity-100"
            src={(`./${currentImage}`)}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 mt-[-20px] ">
          <div className="flex justify-center mb-12 mt-[-10px]">
            <div className="w-1/6 mr-3 mt-[-110px]">
              <img src="./logosan.png" alt="No image" />
            </div>

            <div>
              <img
                className="mt-[-98px]"
                src="./Sanjeevani.png"
                alt="No image"
              />
            </div>
          </div>
          <div className="mt-[-10px] mb-10">
            <div className="text-wrap text-4xl mt-[-40px] text-gray-500">
              Welcome to <b className="text-black">Sanjeevani</b>
            </div>
          </div>
          <div className="mt-[-20px] mb-8">
            <div className="text-wrap text-2xl font-thin font-serif text-gray-400">
              Your one stop destination for finding <b className='text-black'>doctors</b>
            </div>
          </div>

          <form className="mt-4 w-6/12">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Username
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Enter your Name"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
      Password
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="Enter your password"
    />
  </div>
  <div className="flex items-center justify-center mt-7">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      type="button"
    >
      Log In
    </button>
  </div>
  <div className="flex items-center justify-center mt-4">
    <div className="font-bold text-gray-700">
      New to Sanjeevani? <a className="text-blue-400 font-bold" href="/">Register</a>
    </div>
  </div>
</form>

        </div>
      </div>
    </>
  );
};

export default Login;
