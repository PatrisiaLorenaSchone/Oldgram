import React from 'react'
import logo from "../assets/images/logo.png"
import { GoKebabHorizontal } from "react-icons/go";
import { signUserOut } from '../auth'
import { useNavigate } from 'react-router';

function Header() {
  const [showMenu, setShowMenu] = React.useState(false)
  const navigate = useNavigate()

  function handleLogout(){
    signUserOut()
    navigate(`/authentification`);
  }

  return (
    <header>
      <div className='header-icons'>
      <a href="/"><img className='logo' src={logo} alt="oldgram logo"/></a>
      <GoKebabHorizontal onClick={()=>setShowMenu(!showMenu)} className='header-menu'/>
      {showMenu && <div className='drop-down' onClick={handleLogout}> Log out </div>}
      </div>
    </header>
  )
}

export default Header
