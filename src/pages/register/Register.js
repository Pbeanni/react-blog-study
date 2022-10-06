import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <Header/>
    <div className="flex ">
    <div className="w-full p-4 bg-white rounded-lg items-center h-fit gap-3 border-[1px] mt-0 lg:mt-0 border-[#d8d8d8]  lg:ml-8 m-2  flex flex-col lg:flex-[6] ">
      <span className="text-lg font-semibold">Register</span>
      <div className="flex flex-col gap-2">
      <form className="flex flex-col gap-3">
        <label>Username</label>
        <input className="border-2 rounded-lg px-3" type="text" placeholder="Nome de usuario" />
        <label>Email</label>
        <input className="border-2 rounded-lg px-3" type="text" placeholder="Email" />
        <label>Password</label>
        <input className="border-2 rounded-lg px-3" type="password" placeholder="Senha" />
        <button className="p-1 px-2 rounded-lg border-2 bg-green-700 text-white font-semibold border-green-700 hover:border-green-500">Cadastrar</button>
      </form>
        <Link to="/login"><button className="p-1 px-2 rounded-lg border-2 hover:border-green-700">Login</button></Link>
        </div>
    </div>
    <Sidebar/>
    </div>
    </>
  )
}

export default Register