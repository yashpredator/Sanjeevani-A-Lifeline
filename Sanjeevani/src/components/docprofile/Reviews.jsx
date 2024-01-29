import React from 'react';
import { Rating, Typography } from '@mui/material';

const Reviews = () => {
  const [value, setValue] = React.useState(2);
  const userrating = [
    {
      name: "Sourav Kumar",
      review: "Sare doctor acche h kisi se bhi ilaj krwa le",
      rating: 1,
      img: "./Doctor.png",
    },
    {
      name: "Yashraj Srivastava",
      review: "Sare doctor acche h kisi se bhi ilaj krwa le",
      rating: 4,
      img: "./Doctor.png",
    },
    {
      name: "Tathagat Sahay",
      review: "Sare doctor acche h kisi se bhi ilaj krwa le",
      rating: 4,
      img: "./Doctor.png",
    },
    {
      name: "Sourav Kumar",
      review: "Sare doctor acche h kisi se bhi ilaj krwa le",
      rating: 3,
      img: "./Doctor.png",
    },
  ];

  return (
    <>
      <div className="p-4 text-4xl font-extrabold">
        <h1>Reviews</h1>
      </div>
      <div className="flex flex-col">
        {userrating.map((details) => (
          <div
            className="shadow-xl shadow-slate-400 border-b-4 border-blue-950 rounded-full mb-5 ml-10 mr-10 p-5 flex flex-row items-center"
            key={details.name}
          >
            <div className="size-20 mr-5 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={details.img}
                alt="No image"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xl font-bold text-black">{details.name}</div>
              <div className="mr-10">{details.review} </div>
            </div>
            <div className="flex-shrink-0">
              {/* <div className="font-bold" component="legend">
                Read only
              </div> */}
              <Rating name="read-only" value={details.rating} readOnly />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
