import React from 'react'

const Carrito = ({ cantidad }) => {

  return (
    <a className='carrito' href="#">
      <span className='numerito'>{cantidad}</span>🛒
    </a>
  )
}

export default Carrito
