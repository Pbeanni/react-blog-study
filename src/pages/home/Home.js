import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col lg:flex lg:flex-row'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home