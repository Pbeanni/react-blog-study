import React from 'react';
import { Link } from 'react-router-dom';
import "./postthumb.css";

const PostsThumb = ({img,title,disc,status,postId}) => {
  return (
    <div className="border-[1px] mb-2 border-[#DBDBDB] h-fit flex flex-col lg:w-[calc(33%-0.5rem)] rounded-lg">
      <div className=" relative flex gap-2 flex-col bg-white rounded-t-lg justify-between items-center font-medium text-xl p-3 px-6">
        <Link to={`/post/${postId}`}><span className=""> {`${title}`}</span></Link> 
        <div className="text-sm font-light italic border-t-[1px] gap-4 flex">
          <span className="postCat">{`${status}`}</span>
          <span className="postCat">Aracnideos</span>
        </div>
   
      </div>
      <img
        className="h-40 object-cover border-y-[1px] border-[#DBDBDB]"
        src={img}
        alt=""
      />
      <div className=" rounded-b-lg bg-white p-3">
      <p className="leading-6  font-normal overflow-hidden text-ellipsis lineClamp ">
        {`${disc}`}
      </p>
      <div className='border-t-[1px] justify-between content-center pt-2 border-[#DBDBDB] flex mt-3'>
      <span className=' text-sm font-semibold '>Pedro Lemos</span>
      <span className="text-sm font-normal ">1 hour ago</span></div>
      </div>
    </div>
  )
}

export default PostsThumb