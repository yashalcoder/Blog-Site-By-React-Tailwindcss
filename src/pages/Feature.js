import React from 'react'
import feature from '../images/feature.png'
export default function Feature() {
  return (
    <>
    <div className='container flex bg-white border-t-2'>
        <img src={feature}  className="m-20" alt="" width={590} height={632}/>
        <div className='mt-44'>
            <h1 className='text-2xl mt-[20px] font-bold text-gray-700'>The smarter way to work</h1>
            <p className='w-[500px] mt-[30px] text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam praesentium officiis aperiam quis non corporis maiores tenetur! Fuga at molestias velit reiciendis. Quae non a consequatur dolore voluptatem, nihil suscipit.</p>
            <h1 className='text-2xl mt-[20px] font-bold text-gray-700'>Full access to all features</h1>
            <ul className='list-disc w-[500px] m-4 text-gray-500'>
                <li className='p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ad temporibus nemo mollitia, quibusdam harum.</li>
                <li className='p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus recusandae consequuntur! Dolorum, pariatur in.</li>
            </ul>
            <button className='Duaration-500 ease-in-out border p-2 w-[200px] font-bold border-black hover:border-[#FF3277] text-gray-600 hover:bg-[#FF3277] hover:text-white rounded-md text-md'>What's possible?</button>
        </div>
    </div>
    </>
  )
}
