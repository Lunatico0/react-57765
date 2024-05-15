import React from 'react'

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='navMenu'>
        <li className='navItem'><a className='navLink' href="#">Inicio</a></li>
        <li className='navItem'><a className='navLink' href="#">Buscar</a></li>
        <li className='navItem'><a className='navLink' href="#">Ingresar</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
