import React from 'react'
import pic1 from '../images/pic1.png';
export default function About() {
  return (
    <>
    <div class="bg-purple-500">
     <div className="container flex">
        <div className="flex items-center justify-between">
        <div className=" text-white w-[600px] ml-[100px] mt-[80px]">
                <strong> <p class="text-7xl">Content is the key to building an audience</p> </strong>
                <p class="mt-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elitbeatae iusto sapiente, nobis nesciunt distinctio, maxime assumenda doloremque.  </p>
               <button className="bg-[#FF3277] mt-10 text-white duration-500 ease in out hover:bg-transparent border border-[#FF3277] hover:border-white py-2 px-5 rounded-md  ">
                  Get started for free
               </button>
             <p className="mt-4">
                     No credit card needed 15dys free trial
             </p>
        </div>
        <div>
            <img src={pic1} width="632.36" height="775.4" className="mt-[50px]" alt="#"/>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}
