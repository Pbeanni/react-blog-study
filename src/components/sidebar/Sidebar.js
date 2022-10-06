import React,{useContext} from 'react';
import DropdownState from '../../context/dropdown';
import "./sidebar.css"

const Sidebar = ({searchCondition}) => {
  const {dropdownContext} = useContext(DropdownState);
  return (
    <div className={`${dropdownContext ? "sidebaranimation fixed top-[91px]  left-0 right-0 w- border-b-[1px] m-0 rounded-none " : "hidden"} lg:static border-[#DBDBDB] lg:border-[1px] rounded-lg lg:flex m-2 lg:m-0 lg:mr-8 bg-white h-[75vh] flex-[2]`}>
      <div className="p-4 text-center flex flex-col gap-12">
      <div className="">
        <span className="text-lg font-medium border-b-[1px]">SOBRE</span>
        <p className='mt-4'>
          Este é um blog que fala sobre aranhas.
        </p>
      </div>
      <div className="">
        <span className="text-lg font-medium border-b-[1px]">CATEGORIAS</span>
        <ul className="mt-4 flex gap-6 flex-wrap">
          <li className="text-lg font-light">
              Entomologia
          </li>
          <li className="text-lg font-light"> Aranhas
          </li>
          <li className="text-lg font-light"> Insetos
          </li>
          <li className="text-lg font-light"> Artropodes
          </li>
          <li className="text-lg font-light">Biodiversidade
          </li>
          <li className="text-lg font-light">Amazonia
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="text-lg font-medium border-b-[1px]">SIGA NAS REDES SOCIAIS</span>
        <div className="mt-4 text-4xl gap-3 flex justify-center">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar