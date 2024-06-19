import React from "react";
import research from "../images/research.png";
import bulb from "../images/bulb.png";
import seo from "../images/seo.png";
import digital from "../images/digital.png";
export default function page2() {
  return (
    <>
      <section className="sect'\ion-division bg-white mt-[100px] mb-[100px] ">
        <div className=" mt-[100px] w-[750px] ml-[300px] text-align-center">
          <p className="text-gray-700 text-6xl  font-semibold">
            Build a customer-centeric marketing strategies
          </p>
          <p className="ml-[100px] mt-[50px] text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="container flex ">
          <div>
            <img
              src={research}
              className="w-[100px] h-[100px] ml-[150px] mt-[50px]"
              alt="#"
            />
            <h2 className="ml-[140px] font-lg font-bold text-gray-700">
              Market Research
            </h2>
            <p className="ml-[110px] w-[200px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.
            </p>
          </div>
          <div>
            <img
              src={bulb}
              className="w-[100px] h-[100px] ml-[150px] mt-[50px]"
              alt="#"
            />
            <h2 className="ml-[140px] text-gray-700 font-lg font-bold">
              User Experience
            </h2>
            <p className="ml-[110px] text-gray-500 w-[200px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.
            </p>
          </div>
          <div>
            <img
              src={digital}
              className="w-[100px] h-[100px] ml-[150px] mt-[50px]"
              alt="#"
            />
            <h2 className="ml-[140px] text-gray-700 font-lg font-bold">
              Digital Markiting
            </h2>
            <p className="ml-[110px] text-gray-500 w-[200px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.
            </p>
          </div>
          <div>
            <img
              src={seo}
              className="w-[100px] h-[100px] ml-[150px] mt-[50px]"
              alt="#"
            />
            <h2 className="ml-[140px] text-gray-700 font-lg font-bold">
              SEO Services
            </h2>
            <p className="ml-[110px] text-gray-500 w-[200px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
