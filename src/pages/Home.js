import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Serveces from "../pages/Services";
import Engage from "../pages/Engage";
import Solution from "../pages/Solution";
import SM from "../pages/Socialmedia";
import Feature from "../pages/Feature";
import Markiting from "../pages/Markiting.js";
import blacklogo from "../images/blacklogo.png";
import progress from "../images/progress.png";
import play from "../images/play.png";
import lorem from "../images/lorem.png";
import mountaim from "../images/mountaim.png";
import spark from "../images/spark.png";
import int from "../images/int.png";
import gun from "../images/gun.png";
import mb from "../images/mb.png";
import graph from "../images/graph.png";
import set from "../images/set.png";
import hehe from "../images/hehe.png";
import points from "../images/points.png";
import reg from "../images/reg.png";
import man from "../images/man.png";
import man2 from "../images/man2.png";
import women from "../images/women.png";
import captaue from "../images/captaue.png";
import crowd from "../images/crowd.png";
import trust from "../images/trust.png";
import star from "../images/star.png";
import tool1 from "../images/tool1.png";
import tool2 from "../images/tool2.png";
import tool3 from "../images/tool3.png";
import tool4 from "../images/tool4.png";
import tool5 from "../images/tool5.png";
import fb from "../images/fb.png";
import yt from "../images/yt.png";
import inta from "../images/inta.png";
import twitter from "../images/twitter.png";
export default function Home(props) {
  return (
    <>
      <Navbar />
      <About />
      <Serveces />
      <Engage />
      <Solution />
      <SM />
      <Feature />
      <Markiting />

      <div className="bg-gray-200 mt-24 w-[1349px] h-[950px] relative">
        <h1 className="text-gray-700 font-bold text-5xl w-[700px] pt-24 ml-96 ">
          Track the progress towards objective with key results
        </h1>
        <p className="text-gray-500 text-xl  pt-9 ml-[450px]">
          Lorem, ipsum dolor sit amet consecteturPariatur, totam!
        </p>
        <img
          src={progress}
          alt=""
          className="m-24 mt-16"
          width="1200"
          height="800"
        />
        <img
          src={play}
          className="absolute top-0 mt-[650px] ml-[650px] hover:cursor-pointer"
          alt=""
        />
      </div>
      <div className="w-[1200px]">
        <div className="mt-40">
          <p className="text-gray-600 font-bold text-xl pl-[500px]">
            Martex is loved and trusted by thousands:
          </p>
        </div>
        <div className="container flex ml-[140px] mt-[50px] ">
          <img src={spark} alt="" className="m-4" width="180px" />
          <img src={int} alt="" className="m-4" width="180px" />
          <img src={gun} alt="" className="m-4" width="180px" />
          <img src={lorem} alt="" className="m-4" width="180px" />
          <img src={mountaim} alt="" className="m-4" width="180px" />
        </div>
      </div>
      <div className="mt-24">
        <h1 className="text-gray-700 font-bold text-6xl w-[700px] pt-24 ml-96 ">
          The complete solutions
        </h1>
        <p className="text-gray-500 text-xl  pt-9 ml-[420px]">
          Lorem, ipsum dolor sit amet consecteturPariat
        </p>
      </div>
      <div className="container flex">
        <div className="bg-gray-100 w-[400px] h-[150px] rounded-2xl mt-14 ml-28">
          <img
            src={mb}
            alt=""
            className="pt-9 pl-10 "
            width="290.5"
            height="175"
          />
          <p className="font-bold text-gray-700 text-lg pt-8 pl-16">
            Intitutive Dashboard
          </p>
          <p className="mt-4 text-gray-500 ml-[10px]">
            Lorem, aliquam maxime odio placeat{" "}
          </p>
          <p className="mt-2 ml-[59px] text-gray-500">
            istinctio exercitationem.{" "}
          </p>
        </div>
        <div className="bg-gray-100 w-[400px] h-[150px] rounded-2xl mt-14 ml-28">
          <img
            src={set}
            alt=""
            className="pt-9 pl-10 "
            width="290.5"
            height="175"
          />
          <p className="font-bold text-gray-700 text-lg pt-8 pl-16">
            Effortless Integration
          </p>
          <p className="mt-4 text-gray-500 ml-[10px]">
            Lorem, aliquam maxime odio placeat{" "}
          </p>
          <p className="mt-2 ml-[59px] text-gray-500">
            istinctio exercitationem.{" "}
          </p>
        </div>
        <div className="bg-gray-100 w-[400px] h-[150px] rounded-2xl mt-14 ml-28">
          <img
            src={graph}
            alt=""
            className="pt-9 pl-10 "
            width="290.5"
            height="175"
          />
          <p className="font-bold text-gray-700 text-lg pt-8 pl-16">
            Engagment Analysis
          </p>
          <p className="mt-4 text-gray-500 ml-[10px]">
            Lorem, aliquam maxime odio placeat{" "}
          </p>
          <p className="mt-2 ml-[59px] text-gray-500">
            istinctio exercitationem.{" "}
          </p>
        </div>
      </div>
      <div className="mt-[300px] border-t-2 container flex">
        <div className="m-11 mt-48">
          <h2 className="mt-2 ml-[59px] font-bold text-gray-500">
            Productivity Focused
          </h2>
          <h1 className="font-bold  w-[500px] text-gray-700 text-5xl pt-8 ml-[59px]">
            Achive more with better workflows
          </h1>
          <p className="mt-8 mb-8 ml-[59px] w-[600px] text-gray-500">
            Pisicing elit. Est earum nihil Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Est earum nihil Lorem ipsum dolor, sit
            amet consectetur tempore labore impedit! Nostrum impedit quidem
            atque veniam nam?
          </p>
          <ul className="list-disc">
            <li className="mt-4 ml-[79px] w-[600px] text-gray-500">
              Lorem Lorem, ipscipit quia voluptates dolore modi.
            </li>
            <li className="mt-2 ml-[79px] w-[600px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
              amet.adipisicing elit. Officiis quod deserunt aliquid! Lorem,
              ipsum do
            </li>
            <li className="mt-2 ml-[79px] w-[600px] text-gray-500">
              Lorem etur adipisicing elit. Maxime, tenetur!
            </li>
          </ul>
        </div>
        <div>
          <img src={hehe} className="mt-[100px]" alt="" />
        </div>
      </div>
      <div className="mt-24">
        <h1 className="text-gray-700 font-bold text-5xl w-[800px] pt-24 ml-[300px] ">
          Discover insights across all your{" "}
        </h1>
        <h1 className="mt-4 text-gray-700 font-bold text-5xl w-[700px]  ml-[450px]">
          data with Martex
        </h1>
        <p className="text-gray-500 text-xl  pt-9 ml-[400px]">
          Lorem, ipsum dolor sit amet consecteturPariat Lorem, ipsum.
        </p>
        <img src={points} className="ml-[170px] mb-[30px]" alt="" />
        <button className="ml-[600px] rounded-md p-2 w-[250px] text-gray-700 font-bold h-[50px] hover:bg-[#FF3277] hover:text-white hover:border-[#FF3277] border border-black ">
          Monitor your activity
        </button>
        <p className="text-gray-500 text-lg ml-[540px] m-4">
          Free 14 days trial | Exclusive Sport | No Fees
        </p>
      </div>
      <div className="container flex">
        <div className="ml-[110px]">
          <img
            src={reg}
            className="mt-[60px]"
            width="550px"
            height="400px"
            alt=""
          />
        </div>
        <div className="mt-[130px] ml-[90px] w-[500px]">
          <ul className="list-decimal">
            <li>
              <h1 className="font-bold text-gray-600 text-2xl m-4">
                Register in 30 seconds
              </h1>
              <p className="text-gray-500 text-lg  m-4 w-[500px]">
                iente aliquam corrupti, repudiandae, harum in laborum error
                architecto explicabo. Nobis tempore minima repudiandae magnam!
              </p>
            </li>
            <li>
              <h1 className="font-bold text-gray-600 text-2xl m-4">
                Customizable Dashboards
              </h1>
              <p className=" m-4 text-gray-500 text-lg w-[500px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur illo quidem praesentium voluptas! A ipsa
                consequuntur obcaecati? Possimus, itaque maxime.
              </p>
            </li>
            <li>
              <h1 className="font-bold text-gray-600 text-2xl m-4">
                Improved Productivity
              </h1>
              <p className=" m-4 text-gray-500 text-lg w-[500px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur illo quidem praesentium voluptas! A ipsa
                consequuntur obcaecati? Possimus, itaque maxime.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 mt-24">
        <div className="pt-32">
          <h1 className="text-gray-700 font-bold text-5xl ml-[300px]">
            Here's what our amazing clients{" "}
          </h1>
          <h1 className="mt-4 text-gray-700 font-bold text-5xl w-[700px]  ml-[550px]">
            are saying
          </h1>
          <p className="text-gray-500 text-xl  pt-9 ml-[400px]">
            Lorem, ipsum dolor sit amet consecteturPariat Lorem, ipsum.
          </p>
        </div>
        <div className="conatiner flex ml-[30px]">
          <div className="bg-white w-[370px] shadow-lg h-[300px] rounded-md m-28 ml-20 mr-0 mt-20">
            <p className="pt-16 p-11 pb-4 text-gray-500 text-lg">
              {" "}
              Et, voluptatibus.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Necessitatibus esse beatae quo laborum omnis
              dolore quod rem illo nesciunt tenetur.
            </p>
            <div className="flex">
              <img
                src={man}
                className="rounded-3xl ml-11"
                width="50px"
                height="50px"
                alt=""
              />
              <p className="ml-5 text-black font-bold">Lessli D</p>
            </div>
            <p className="text-gray-700 pt-2 -mt-8 ml-28">Graphic Designer</p>
          </div>
          <div className="shadow-lg bg-white w-[370px] h-[300px] rounded-md m-11 ml-4 mr-0 mt-20">
            <p className="pt-16 p-11 pb-4 text-gray-500 text-lg">
              {" "}
              Et, voluptatibus.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Necessitatibus esse beatae quo laborum omnis
              dolore quod rem illo nesciunt tenetur.
            </p>
            <div className="flex">
              <img
                src={women}
                className="rounded-3xl ml-11"
                width="50px"
                height="50px"
                alt=""
              />
              <p className="ml-5 text-black font-bold">Lessli D</p>
            </div>
            <p className="text-gray-700 pt-2 -mt-8 ml-28">Graphic Designer</p>
          </div>
          <div className="shadow-lg bg-white w-[370px] h-[300px] rounded-md m-11 ml-4  mt-20">
            <p className="pt-16 p-11 pb-4 text-gray-500 text-lg">
              {" "}
              Et, voluptatibus.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Necessitatibus esse beatae quo laborum omnis
              dolore quod rem illo nesciunt tenetur.
            </p>
            <div className="flex">
              <img
                src={man2}
                className="rounded-3xl ml-11"
                width="50px"
                height="50px"
                alt=""
              />
              <p className="ml-5 text-black font-bold">Lessli D</p>
            </div>
            <p className="text-gray-700 pt-2 -mt-8 ml-28">Graphic Designer</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <p className="m-24 mb-0 font-bold text-gray-500 text-lg ml-[450px]">
          Our clients love us as much as we love them
        </p>
        <div className="container flex">
          <div className="mt-11 ml-[300px]">
            <img src={captaue} className="" width="150px" alt="" />
            <div className="bg-white border-2 w-[150px] h-[10x] rounded-2xl flex mt-4">
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <p>4.7/5</p>
            </div>
          </div>
          <div className="mt-11 ml-[150px]">
            <img src={trust} className="" width="150px" alt="" />
            <div className="bg-white border-2 w-[150px] h-[10x] rounded-2xl flex mt-4">
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <p>4.9/5</p>
            </div>
          </div>
          <div className="mt-11 ml-[150px]">
            <img src={crowd} className="" width="150px" alt="" />
            <div className="bg-white border-2 w-[150px] h-[10x] rounded-2xl flex mt-4">
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <img src={star} width="20px" alt="" />
              <p>4.2/5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-[1150px] rounded-2xl h-[650px] ml-[100px] mt-[100px]">
        <h1 className="text-gray-700 font-bold text-5xl ml-[250px] pt-[80px]">
          Automate your workflow with
        </h1>
        <h1 className="text-gray-700 pt-4 text-5xl font-bold ml-[400px]">
          our integrations
        </h1>
        <p className="text-gray-500 text-lg ml-[350px] pt-8">
          Lorem ipsum amet consectetur adipisicing elit. Velit, quas.
        </p>
        <div className="container flex">
          <div className="bg-white shadow-md w-[190px] h-[150px] rounded-2xl ml-[60px] mt-[40px]">
            <img src={tool1} width="60px" className="m-11 ml-[60px]" alt="" />
            <p className="pt-6 text-gray-700 font-bold pl-[70px]">Zapier</p>
          </div>
          <div className="bg-white shadow-md w-[190px] h-[150px] rounded-2xl ml-[20px] mt-[40px]">
            <img src={tool2} width="60px" className="m-11 ml-[60px]" alt="" />
            <p className="pt-6 text-gray-700 font-bold pl-[30px] w-[200px]">
              Google Analytics
            </p>
          </div>
          <div className="bg-white shadow-md w-[190px] h-[150px] rounded-2xl ml-[20px] mt-[40px]">
            <img src={tool3} width="60px" className="m-11 ml-[60px]" alt="" />
            <p className="pt-6 text-gray-700 font-bold pl-[70px]">Amplitude</p>
          </div>
          <div className="bg-white shadow-md w-[190px] h-[150px] rounded-2xl ml-[20px] mt-[40px]">
            <img src={tool4} width="60px" className="m-11 ml-[60px]" alt="" />
            <p className="pt-6 text-gray-700 font-bold pl-[70px]">Hubspot</p>
          </div>
          <div className="bg-white shadow-md w-[190px] h-[150px] rounded-2xl ml-[20px] mt-[40px]">
            <img src={tool5} width="60px" className="m-11 ml-[60px]" alt="" />
            <p className="pt-6 text-gray-700 font-bold pl-[70px]">MailChimp</p>
          </div>
        </div>
        <div className="mt-[100px] ml-[470px]">
          <button className="text-gray-500 font-bold hover:bg-[#FF3277] border hover:text-white border hover:border-[#FF3277] border-black rounded-md p-2 w-[250px]">
            View all integrations
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-gray-600 font-bold text-6xl ml-[400px]  mt-[100px]">
          Questions & Answers
        </h1>
        <p className="text-gray-400 text-lg ml-[450px] mt-[30px]">
          Lorem Lorem ipsum dolor adipisicing elit. Reprehenderit, a.
        </p>
        <div className="container flex">
          <div className="w-[500px] mt-11 ml-[100px] ">
            <h1 className="text-gray-700 text-2xl font-bold">
              1. Getting started with Martex
            </h1>
            <p className="text-gray-500 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut quos
              ad laboriosam repellat est porro? Deserunt, unde. Nisi, sed?
            </p>
            <h1 className="text-gray-700 text-2xl font-bold mt-6">
              2. What's inside the package?
            </h1>
            <p className="text-gray-500 mt-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut quos
              ad laboriosam repellat est porro? Deserunt, unde. Nisi, sed?
            </p>
            <h1 className="text-gray-700 text-2xl font-bold mt-6">
              3. How do I choose a plan?
            </h1>
            <ul className="list-disc ml-[20px] text-gray-500 mt-6">
              <li className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                officia quam natus doloremque error assume
              </li>
              <li className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus autem harum repudiandae voluptas rem officia?
              </li>
            </ul>
          </div>
          <div className="w-[500px] mt-11 ml-[100px] ">
            <h1 className="text-gray-700 text-2xl font-bold">
              4. How does Martex handle my privacy?
            </h1>
            <ul>
              <li className="mt-4 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci quos est quasi, eum iusto explicabo.
              </li>
              <li className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                quibusdam praesentium vero excepturi delectus asperiores"{" "}
              </li>
            </ul>
            <h1 className="text-gray-700 text-2xl font-bold mt-6">
              5. I have an issue with my account
            </h1>
            <p className="text-gray-500 mt-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut quos
              ad laboriosam repellat est porro? Deserunt, unde. Nisi, sed?
            </p>
            <h1 className="text-gray-700 text-2xl font-bold mt-6">
              6. Can I cancel at anytime?
            </h1>
            <p className="text-gray-500 mt-6 ">
              Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur
              adipisicing elit Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ipsum aut quos ad laboriosam repellat est porro?
              Deserunt, unde.
            </p>
          </div>
        </div>
        <div className="border-gray-200 bg-gray-200 text-xl border-2 rounded-2xl w-[370px] h-[50px] ml-[500px] mt-[60px] flex">
          <p className="p-3 pl-8">Have any questions?</p>
          <u className="p-3 text-[#FF3277] font-bold text-xl hover:text-black pl-0">
            <p>Get in touch</p>
          </u>
        </div>
      </div>
      <div className="bg-purple-800 w-[1150px] h-[400px] ml-[100px] mt-[100px] rounded-2xl">
        <h1 className="text-white font-bold text-5xl ml-[250px] pt-[70px]">
          Starting with martex is easy,
        </h1>
        <h1 className="text-white font-bold text-5xl ml-[400px] mt-4">
          fast and free
        </h1>
        <p className="text-white text-xl ml-[370px] pt-4">
          It takes only a few clicks to get started
        </p>
        <button className="bg-[#FF3277] ml-[420px] w-[250px] mt-10 font-bold text-white duration-500 ease in out hover:bg-transparent border border-[#FF3277] hover:border-white py-2 px-5 rounded-md  ">
          Get started-it's free
        </button>
        <p className="text-white mt-[20px] text-lg ml-[390px]">
          Free for 14 days-no credit card required.
        </p>
      </div>
      <div className="container flex mt-24 ">
        <div className="ml-[100px]">
          <img src={blacklogo} width="150px" alt="" />
        </div>
        <div className="ml-[150px]">
          <h1 className="text-gray-700 text-xl font-bold">Company</h1>
          <ul className="list-none">
            <a href="#">
              <li className="mt-4 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                About us
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Our blog
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Customers
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Community
              </li>
            </a>
          </ul>
        </div>
        <div className="ml-[100px]">
          <h1 className="text-gray-700 text-xl font-bold ">Product</h1>
          <ul className="list-none">
            <a href="#">
              <li className="mt-4 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Integration
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                What's new
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Pricing
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Help center
              </li>
            </a>
          </ul>
        </div>
        <div className="ml-[50px]">
          <h1 className="text-gray-700 text-xl font-bold w-[100px]">Legal</h1>

          <ul className="list-none">
            <a href="#">
              <li className="mt-4 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Terms of use
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Privacy policy
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Cookie policy
              </li>
            </a>
            <a href="#">
              <li className="mt-2 text-gray-500 hover:text-black hover:cursor-pointer text-md">
                Site map
              </li>
            </a>
          </ul>
        </div>
        <div className="ml-[80px]">
          <h1 className="text-gray-700 text-xl font-bold">Follow the best</h1>
          <input
            className="bg-gray-200 w-[250px] h-[40px]  mt-[20px] text-black pl-2 text-lg border border-gray-200 p-6"
            type="email"
            placeholder="Email Adress"
          ></input>
        </div>
      </div>
      <div className="container flex border-t-2 mt-20 m-auto">
        <p className="p-9">© 2023 Martex. All Rights Reserved</p>
        <a href="#">
          <li className="p-9 pr-2 pl-[800px] list-none">
            <img src={fb} width="20px" alt="" />
          </li>
        </a>
        <a href="">
          <li className="p-8 pl-2 pr-2 list-none">
            <img src={twitter} width="28px" alt="" />
          </li>
        </a>
        <a href="">
          <li className="p-9 pl-2 pr-2 list-none">
            <img src={inta} width="20px" alt="" />
          </li>
        </a>
        <a href="">
          <li className="p-9 pl-2 pr-2 list-none">
            <img src={yt} width="25px" alt="" />
          </li>
        </a>
      </div>
      <div></div>
    </>
  );
}
