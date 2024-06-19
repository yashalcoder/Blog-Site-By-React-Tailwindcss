import React from 'react'
import sol from '../images/sol.png'
export default function Solution() {
  return (
   <>
   <div className='container bg-white flex '>
        <div className='m-20'>
             <h1 className='text-2xl  font-bold text-gray-700'>Solution that grows with you</h1>
             <p className='w-[500px] mt-[30px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis sapiente rerum. Soluta beatae fuga voluptatem 
             cum facilis quisquam rem autem vel praesentium itaque. Exercitationem ab amet nemo nostrum dolorum?</p>
             <h1 className='text-2xl  font-bold mt-[20px] text-gray-700'>Connenct your data sources</h1>
             <p className='w-[500px] mt-[30px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis sapiente rerum. Soluta beatae fuga voluptatem 
             cum facilis quisquam rem autem </p>
             <ul className='list-disc w-[500px] m-4 text-gray-500'>
                <li className='p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quae minima temporibus illum qui obcaecati?</li>
                <li className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, amet cupiditate molestias ab labore deleniti!</li>
             </ul>
        </div>
        <div>
            <img src={sol} alt=""/>
        </div>
   </div>
   </>
  )
}
