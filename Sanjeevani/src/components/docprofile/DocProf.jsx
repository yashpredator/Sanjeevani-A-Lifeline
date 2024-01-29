import React from "react";
import { Button } from "@mui/material";
import Reviews from "./Reviews";

const DocProf = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 to-blue-900 ">
        <div className="flex flex-row">
          <div className=" mt-2 ml-3 size-14">
            <img src="./Images/whitelogo.png" alt="No logo" />
          </div>
          <div className=" ml-3 mt-5 size-40">
            <img src="./Images/whitesanjeevani.png" />
          </div>
        </div>
        <div className="text-white text-5xl p-2 font-serif">
          Radhika Vishwanatham
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className=" ml-4 flex flex-col">
          <div className=" p-10 font-serif font-medium max-w-xl">
            Lorem Ipsum is a placeholder text commonly used in the printing and
            typesetting industry. It's used to fill a space in a document or
            visual design where the final text is not yet available. The purpose
            of Lorem Ipsum is to give the appearance of meaningful content
            without the distraction of readable text when the focus is on the
            design or layout. The text itself is derived from a work by Cicero,
            a Roman statesman, orator, and writer, with some words altered,
            added, or removed to create nonsensical and grammatically correct
            passages. The standard Lorem Ipsum text starts with "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit," and continues with
            various Latin-like phrases.
          </div>
          <div className="ml-7 flex flex-row">
            <div className="p-3">
              <Button className=" rounded-3xl" variant="contained" href="#contained-buttons">
                Book Now
              </Button>
            </div>
            <div className="p-3">
              <Button variant="contained" href="#contained-buttons">
                Rate Now
              </Button>
            </div>
          </div>
        </div>
        <div className=" -mt-40 size-80">
          <img src="./Images/doctoronprofile.png" />
        </div>
      </div>
      <Reviews/>
    </>
  );
};

export default DocProf;
