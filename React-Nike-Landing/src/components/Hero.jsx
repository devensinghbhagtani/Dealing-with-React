import React from "react";

function Hero() {
  return (
    <main className="h-[86vh] flex items-center justify-center">
      <div className="p-20">
        <h1 className="text-8xl font-[800] tracking-tight">
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>
        <p className="mt-4 text-base w-[25em] font-[500]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex gap-5 mt-5">
          <button className="bg-[#d01c28] text-lg px-5 py-2 text-white font-[500]">
            Shop Now
          </button>
          <button className="text-lg px-5 py-2 text-[#5a5959] font-[500] border-[#5a5959] border-2">
            Category
          </button>
        </div>
        <p className="mt-3 text-sm">Also Available On</p>
        <div className="flex gap-3 mt-3">
          <img className="" src="./images/flipkart.svg" alt="" />
          <img src="./images/amazon.svg" alt="" />
        </div>
      </div>
      <div>
        <img className="" src="./images/shoe_image.png" alt="" />
      </div>
    </main>
  );
}

export default Hero;
