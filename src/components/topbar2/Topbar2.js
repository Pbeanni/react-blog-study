import React,{useContext, useState} from 'react';
import {AiOutlineHome,AiFillEdit,AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import DropdownState from '../../context/dropdown';
import User from '../../context/usercontext';
import "./topbar2.css"


const Topbar2 = () => {
  const user = useContext(User);
  const {dropdownContext, setdropdownContext } = useContext(DropdownState);
        const [active,setActive] = useState(0);
        const handleClick=(index) => {
          if(dropdownContext === true){
            setdropdownContext(!dropdownContext);
          }
          setActive(index);
            }

  return (
    <div className="z-50 sticky top-0 lg:flex grid grid-cols-[1fr_1fr_fit-content(100%)]  bg-white border-[#DBDBDB] border-b-[1px]">
        <div className="pb-2 lg:flex-[3] lg:items-center lg:pb-0 lg:flex lg:ml-4">
        <span className="lg:pb-4 p-2 text-xl text-green-700 font-bold">LycosiDev</span>
        </div>
        <div className="row-start-2 col-span-2 lg:flex-[6] lg:justify-center lg:flex">
            <ul className='flex justify-around pl-4 pr-2 text-gray-400 lg:text-gray-500 lg:p-0 lg:gap-10 '>
            <Link to="/">
            <li onClick={() => handleClick(0)} className={`${active === 0 ? "activeElement2" : ""} h-full justify-center grid relative w-14 py-[11px]`}>
            
            <AiOutlineHome  className=" lg:hidden h-8 w-8"/>
            <a className='hidden cursor-pointer lg:block font-medium '>HOME</a>
            
            </li>
            </Link>
            <Link to='/write'>
            <li onClick={() => handleClick(1)} className={`${active === 1 ? "activeElement2" : ""} h-full justify-center grid relative w-14 py-[11px]`}>
            
            <AiFillEdit className=" lg:hidden h-8 w-8"/>
            <a className='hidden cursor-pointer lg:block font-medium '>ESCREVER</a>
            </li>
            </Link>

            <li className={`${active === 2 ? "activeElement2" : ""} lg:hidden justify-center grid relative w-14 py-[11px]`}>
            <AiOutlineSearch onClick={() => {setdropdownContext(!dropdownContext); handleClick(2)}} className=" h-8 w-8"/>
            </li>

            <Link to='/settings'>
            <li onClick={() => handleClick(3)} className={`${active === 3 ? "activeElement2" : ""} h-full justify-center grid relative w-14 py-[11px]`}>
            
            <AiFillEdit className=" lg:hidden h-8 w-8"/>
            <a className='hidden cursor-pointer lg:block font-medium '>OPÇÕES</a>
            </li>
            </Link>

            </ul>
        </div>
        {!user ? 
        <div className=" lg:flex-[3] lg:justify-end col-start-3 row-span-2 pr-4 flex items-center lg:py-1">
          <div className='flex gap-2 justify-center flex-col text-sm lg:flex-row'>
           <Link className="flex flex-col" to="/login"><button className="bg-green-700 text-white font-semibold p-1 px-2 rounded-lg border-2 border-green-700 hover:border-green-500">Login</button></Link> 
           <Link className='flex flex-col' to="/register"><button className="p-1 px-2 rounded-lg border-2 hover:border-green-700">Cadastrar</button></Link> 
          </div>
          </div>
           :  
           <div className=" lg:flex-[3] lg:justify-end col-start-3 row-span-2 pr-4 flex items-center lg:py-1">
          <div className='flex gap-2 row-start-0'>
          <Link to="/settings"><div className="w-16 h-16 rounded-full bg-gray-500 lg:mr-8 lg:w-12 lg:h-12 "></div></Link>
          </div>
          </div>
          
          
       
        
         }
    </div>
  )
}

export default Topbar2