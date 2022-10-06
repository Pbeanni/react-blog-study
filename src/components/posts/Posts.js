import React, { useContext } from 'react'
import PostsThumb from '../postsThumb/PostsThumb'
import BlogTodo from '../../context/blogtodo'
const Posts = () => {
  const Blogtodo = useContext(BlogTodo);
  return (
    <div className=' m-2 mt-0 mr-2 lg:ml-8 lg:gap-4 flex flex-col lg:flex-[6] lg:flex-row flex-wrap lg:justify-around'>
      {Blogtodo.map((todo) => <PostsThumb img="https://agropecuariadomane.com.br/img/post/g_aranha-lobo-lycosa-erythrognatha.jpg" title={todo.title} disc={todo.disc} status={todo.status} postId={todo.postId}/> )}
  
    </div>
  )
}

export default Posts