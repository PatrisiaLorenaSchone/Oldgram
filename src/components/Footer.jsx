import React from 'react'
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
// import { GoGift } from "react-icons/go";
import { GoInfo } from "react-icons/go";

function Footer() {
  return (
    <footer>
    <div className="footer-icons">
      <Link  to="/">
        <GoHome className='footer-icon'/>
      </Link>
      <Link to="search">
        <GoSearch className='footer-icon'/>
      </Link>
      <Link to="canva">
        <GoPlusCircle className='footer-icon'/>
      </Link>
      <Link to="info">
        <GoInfo className='footer-icon'/>
      </Link>
      <Link to="authentification">
        <GoPerson className='footer-icon'/>
      </Link>
    </div>
    </footer>
  )
}

export default Footer
