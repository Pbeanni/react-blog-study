import React from 'react'
import Header from '../../components/header/Header'
import PostId from '../../components/postId/PostId'
import Sidebar from '../../components/sidebar/Sidebar'

const SinglePost = () => {
  return (
    <div className='flex flex-col lg:flex lg:flex-row'>
        <PostId className={"order-2 lg:order-1"}/>
        <div className="flex-[2] order-1">
        <Header className={"lg:ml-2"}/>
        <Sidebar/>
        </div>
    </div>
  )
}

export default SinglePost