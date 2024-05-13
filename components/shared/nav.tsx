import React from 'react'

const Nav = () => {
  return (
    <div className='w-full flex items-center gap-20'>
        <div className='flex items-center'>
            <span className='font-bold text-3xl text-white '>room</span>
        </div>
        <ul className='flex items-center gap-5'>
            <li className='text-white font-medium text-lg hover:border hover:border-bottom-2 py-4 cursor-pointer hover:border-white'>home</li>
            <li className='text-white font-medium text-lg hover:border hover:border-bottom-2 py-4 cursor-pointer hover:border-white'>shop</li>
            <li className='text-white font-medium text-lg hover:border hover:border-bottom-2 py-4 cursor-pointer hover:border-white'>about</li>
            <li className='text-white font-medium text-lg hover:border hover:border-bottom-2 py-4 cursor-pointer hover:border-white'>contact</li>
        </ul>
    </div>
  )
}

export default Nav