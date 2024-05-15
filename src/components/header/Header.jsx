import React from 'react'
import NavBar from './NavBar'
import Carrito from './Carrito'

const Header = ({darkMode}) => {
  return (
    <header className={darkMode === "claro" ? "header" : "header oscuro"}>
      <div className='headerCont'>
        <NavBar />
        <h1 className='logo'>ARTEMISA</h1>
        <Carrito cantidad="3" />
      </div>
    </header>
  )
}

export default Header
