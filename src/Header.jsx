import React from 'react'
import Logo from "./assets/logo.svg";
import Button from "./Button"
import Nav from './Nav';
function Header() {
  return (
    <>
      <div className="flex px-[15px] py-[10px] bg-[#1E1E1E] justify-between items-center">
          <div className="flex justify-start items-center">
            <img src={Logo} alt="" />
            <Nav />
          </div>
          <div className="">
            <Button />
          </div>
      </div>
    </>
  )
}

export default Header