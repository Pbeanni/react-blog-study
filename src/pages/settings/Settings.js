import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <>
    <Header/>
    <div className="flex">
      <div className="w-full p-2 bg-white rounded-lg border-[1px] mt-0 lg:mt-0 border-[#d8d8d8] lg:gap-0 lg:ml-8 m-2 flex flex-col lg:flex-[6] ">
        <div className="flex items-center px-5  p-2 justify-between">
          <span className="text-lg font-semibold ">Atualizar conta</span>
          <span className="text-sm text-red-500 cursor-pointer ">Deletar conta</span>
        </div>
        <form className="px-5 flex-col flex gap-2">
          <label>Profile Picture</label>
          <div className="h-40 w-40">
            <img
            className='rounded-lg'
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="">
              <i className="mt-3  far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className=""
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Pedro" name="name" />
          <label>Email</label>
          <input type="email" placeholder="pedroallanbfl@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <div className="w-full flex justify-center"><button className="hover:border-green-700 hover:text-green-700 border-[2px] w-fit p-1 px-2 rounded-lg" type="submit">
            Update
          </button></div>
          
        </form>
      </div>
      <Sidebar/>
    </div>
    </>
  )
}

export default Settings