/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Loader.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-[#f7911d] text-xl"
      >
        b
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

