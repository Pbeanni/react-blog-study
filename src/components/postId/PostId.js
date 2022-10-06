import React from 'react'

const PostId = ({className}) => {
  return (
    <div className={`${className}  bg-white rounded-lg border-[1px] mt-0 lg:mt-2 border-[#d8d8d8] lg:ml-8 m-2  flex flex-col lg:flex-[6] lg:flex-row flex-wrap lg:justify-center    `}>
        <div className=" relative flex w-full items-center justify-center relative">
     <div className=" flex gap-2 flex-col bg-white rounded-t-lg items-center font-medium text-xl p-3 px-6">
        <span className=""> A vida das aranhas</span>
        <div className="text-sm font-light italic border-t-[1px] gap-4 flex">
          <span className="postCat">Entomologia</span>
          <span className="postCat">Aracnideos</span>
        </div>
        </div>
        <div className="absolute gap-4 flex right-4 top-3 lg:top-8 lg:top-[] lg:right-12">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon text-red-600 far fa-trash-alt"></i>
          </div>
      </div>
      <img
        className="w-full h-80 object-cover border-y-[1px] border-[#DBDBDB]"
        src="https://agropecuariadomane.com.br/img/post/g_aranha-lobo-lycosa-erythrognatha.jpg"
        alt=""
      />
      <div className=" rounded-b-lg bg-white p-3">
      <p className="leading-6  font-normal ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
          <div className='border-t-[1px] justify-between content-center pt-2 border-[#DBDBDB] flex mt-3'>
      <span className=' text-sm font-semibold '>Pedro Lemos</span>
      <span className="text-sm font-normal ">1 hour ago</span>
      </div>
      </div>
      
    </div>
  )
}

export default PostId