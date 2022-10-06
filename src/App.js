import React,{useContext, useState} from 'react'
import Home from './pages/home/Home'
import Topbar2 from './components/topbar2/Topbar2'
import DropdownState from './context/dropdown'
import SinglePost from './pages/singlePost/SinglePost'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import User from './context/usercontext'

const App = () => {
  const user = useContext(User);
  const [dropdownContext, setdropdownContext] = useState(false)
  return (
    <>
    <DropdownState.Provider value={{ dropdownContext, setdropdownContext }}>
    <Router>
    <Topbar2/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/post/:postId" element={<SinglePost/>}/>
      <Route path="/write" element={user ? <Write/> : <Login/>}/>
      <Route path="/settings" element={user? <Settings/> : <Login/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      </Routes>
    </Router>
    </DropdownState.Provider>
    </>
  )
}

export default App