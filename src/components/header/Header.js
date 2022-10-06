import React from 'react'

const Header = ({className}) => {
  return (
    <div className={` rounded-lg bg-white border-[#DBDBDB] border-[1px] m-2 lg:mx-8 h-20 font-mono font-extrabold flex justify-center items-center ${className}`}>
        <span className=' text-4xl text-green-700 text-center '>LycosiDev Blog</span>
    </div>
  )
}

export default Header