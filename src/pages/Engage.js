import React from 'react'
import engage from '../images/engage.png'
export default function Engage() {
  return (
   <>
   <div className="container flex bg-white border-t-2 w-full">
          <div className='m-28'>
            <img src={engage} width="605.26" height="700.17"  alt=""/>
          </div>
          <div className='mt-48'>
            <h2 className=' text-gray-500 font-bold text-md'>ENHANCE ENGAGEMENT</h2>
            <h1 className='mt-[20px] text-5xl font-bold text-gray-700 w-[450px]'>Engage your most valuable visitors</h1>
            <p className='w-[500px] mt-[30px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aut ullam, ad cupiditate quas tempora praesentium asperiores voluptatibus quasi possimus.</p>
            <h2 className='text-2xl mt-[20px] font-bold text-gray-700 '>Digits that define growth:</h2>
            <ul className='list-disc w-[500px] m-4 text-gray-500'>
                <li className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas odio consequuntur iste corporis maiores repellat rem eveniet possimus quod.</li>
                <li className='m-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sunt amet illum fugit ab eveniet?</li>
            </ul>
          </div>
   </div>
   </>
  )
}
