import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Write = () => {
  return (
    <>
        <Header/>
    <div className="flex">
    <div className=" w-full bg-white rounded-lg border-[1px] mt-0 lg:mt-0 border-[#d8d8d8] lg:gap-0 lg:ml-8 m-2  flex flex-col lg:flex-[6] ">
    <img
      className="rounded-t-lg h-60 object-cover border-b-[1px] w-full"
      src="https://agropecuariadomane.com.br/img/post/g_aranha-lobo-lycosa-erythrognatha.jpg"
      alt=""
    />
    <form className="flex h-full flex-col gap-6 justify-between p-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
        <input
          className="border-2 rounded-lg p-2"
          placeholder="  Titulo"
          type="text"
        />
      </div>
      <div className="w-full">
        <textarea
          className="w-full h-40 border-2 p-2 rounded-lg"
          placeholder="  Comece a escrever..."
          type="text"
        />
      </div>
      <div className='flex justify-center'>  <button className="border-2 px-4 py-1 rounded-lg" type="submit">
        Postar
      </button></div>
    
    </form>
  </div>
  <Sidebar/>
  </div>
  </>
  )
}

export default Write