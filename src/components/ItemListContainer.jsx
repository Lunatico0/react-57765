import React, { useRef } from 'react'

const ItemListContainer = (props) => {
  const clas = "productsContainer";
  const darkMode = () => {
    props.darkMode === 'claro' ? props.setDarkMode('oscuro') : props.setDarkMode('claro');
  }

  return (
    <div className={props.darkMode === "claro" ? "claro productsContainer" : "oscuro productsContainer"} >
      <p>{props.greeting}</p>
      <hr />
      <button onClick={darkMode}>Cambiar modo de color</button>
    </div>
  )
}

export default ItemListContainer
