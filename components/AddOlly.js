"use client";

import React from 'react';
// import { Chrome } from 'lucide-react';

const AddOllyButton = () => {
  const handleButtonClick = () => {
    window.open("https://chromewebstore.google.com/detail/olly-social-media-sidekic/ofjpapfmglfjdhmadpegoeifocomaeje", "_blank");
  }

  return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleButtonClick}>
        Add to Chrome
        {/* <Chrome className="h-4 w-4 ml-2" /> */}
        </button>
  );
};

export default AddOllyButton;
