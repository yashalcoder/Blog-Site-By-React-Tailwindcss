import React from 'react'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
export default function Socialmedia() {
  return (
    <>
    <section className="section-division bg-white mt-[100px] mb-[100px] ">
  
  <div className=" mt-[100px] w-[950px]  ml-[300px] text-align-center" >
        <p className="text-gray-700 text-6xl font-semibold">Research your audience through social media marketing</p>
        <p className="ml-[100px] text-bold mt-[50px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </div>
        <div className="container flex " >
           <div className='bg-gray-100 m-20 w-[550px] h-[550px] rounded-2xl '>
                <h1 className='text-2xl ml-[150px] mt-[50px] font-bold text-gray-700 '>Markiting Integrations</h1>
                <p className='text-gray-500 text-bold mt-4 ml-[80px] w-[400px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, dolor sit amet consectetur est?</p>
                <img src={s1} alt="" className="m-9" width="461.04" height='307.36' />
           </div>
           <div className='bg-gray-100 mt-20 w-[550px] h-[550px] rounded-2xl '>
                <img src={s2} alt="" className="m-12" width="461.04" height='300.36' />
                <h1 className='text-2xl ml-[150px] mt-[30px] font-bold text-gray-700 '>Enhance Engagement</h1>
                <p className='text-gray-500 text-bold mt-4 ml-[80px] w-[400px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, dolor sit amet consectetur est?</p>
           </div>
        </div>
        <div className='container flex'>
                <div>
                    <h1 className='text-5xl ml-[100px] font-bold text-gray-700'>89K</h1>
                </div>
                <div className=' ml-[30px]'>
                <p className='w-[200px] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h1 className='text-5xl ml-[90px] font-bold text-gray-700'>76%</h1>
                </div>
                <div className=' ml-[30px]'>
                <p className='w-[200px] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h1 className='text-5xl ml-[90px] font-bold text-gray-700'>4.93</h1>
                </div>
                <div className=' ml-[30px]'>
                <p className='w-[200px] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                
        </div>
</section>
    </>
  )
}
