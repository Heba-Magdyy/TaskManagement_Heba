import React from 'react'

export default function Settings() {
  return (
    <>
    <h1 className='text-darkest mt-4 font-bold text-lg'> Settings</h1>
    <h4 className='text-darkest mb-5'>Profile information</h4>
    <div className='flex ml-4 p-2 '>
        <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg class="absolute w-15 h-15 text-darkest -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
        <button className='bg-darkest text-white rounded-lg p-2 mr-2 ml-4'>Change Photo</button>
        <button className='bg-whiteblue text-darkest rounded-lg p-2'>delete Photo</button>
    </div>

    </>
  )
}
