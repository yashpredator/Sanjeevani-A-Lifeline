import React from 'react';
import Appbar from './Appbar';
import Navbar from './Navbar';
import Diagnosis from './Diagnosis';

const Home = () => {
  return (
   <>
   <div>
      <Appbar/>
    <Navbar/>
    <Diagnosis/>
    </div>
    </>
    
  );
};

export default Home;
