import React from "react";
import research from "../images/research.png";
import seo from "../images/seo.png";
import digital from "../images/digital.png";
import engage from "../images/engage.png";
export default function Markiting() {
  return (
    <>
      <div className="container flex -mt-11">
        <div className=" m-28">
          <h1 className="font-bold mb-10 mt-[20px] text-gray-500">
            One-Stop Solution
          </h1>
          <h1 className="font-bold w-96 text-gray-700 text-5xl">
            Smart Solutions, real-time results
          </h1>
          <p className="w-[500px] mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at
            facilis temporibus, ut assumenda enim distinctio incidunt illum esse
            animi eum ullam libero quod sequi iure perspiciatis laboriosam.
            Exercitationem, totam!
          </p>
          <ul className="list-disc pl-6">
            <li className=" mt-4  text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, eum.
            </li>
            <li className=" mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              culpa!
            </li>
            <li className=" mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              culpa!
            </li>
          </ul>
        </div>
        <div className="mr-[0px] relative">
          <div className="mt-[150px] -mr-10px bg-gray-100 w-[625px] h-[450px]">
            <div className="-m-10 p-4 shadow-lg w-[300px] h-[250px] bg-white rounded-2xl absolute">
              <img
                src={seo}
                alt=""
                width="70px"
                height="3px"
                className="m-3 mb-0"
              />
              <h1 className="font-bold text-gray-700 text-lg">
                Content Markiting
              </h1>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, sunt!
              </p>
            </div>
            <div className="-mt-10 ml-[300px] p-4 shadow-lg w-[300px] h-[250px] bg-white rounded-2xl absolute">
              <img
                src={engage}
                alt=""
                width="70px"
                height="3px"
                className="m-3 mb-0"
              />
              <h1 className="font-bold text-gray-700 text-lg">
                Pay Per-Click(PPC)
              </h1>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, sunt!
              </p>
            </div>
            <div className="mt-[240px] -ml-10 p-4 shadow-lg w-[300px] h-[250px] bg-white rounded-2xl absolute">
              <img
                src={digital}
                alt=""
                width="70px"
                height="3px"
                className="m-3 mb-0"
              />
              <h1 className="font-bold text-gray-700 text-lg">
                Vedio Markiting
              </h1>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, sunt!
              </p>
            </div>
            <div className="mt-[240px] ml-[300px] p-4 shadow-lg w-[300px] h-[250px] bg-white rounded-2xl absolute">
              <img
                src={research}
                alt=""
                width="70px"
                height="3px"
                className="m-3 mb-0"
              />
              <h1 className="font-bold text-gray-700 text-lg">
                Business Analytics
              </h1>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, sunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
