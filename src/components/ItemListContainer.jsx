import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import data from '../data/productos.json'
import Item from './Item';

const ItemListContainer = (props) => {
  let [productos, setProductos] = useState([]);
  const darkMode = () => {
    props.darkMode === 'claro' ? props.setDarkMode('oscuro') : props.setDarkMode('claro');
  }

  const predirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    })
  }

  useEffect(() => {

    predirProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className={props.darkMode === "claro" ? "claro productsContainer" : "oscuro productsContainer"} >
      <p>{props.greeting}</p>
      {
        productos.length > 0 ? productos.map( productos => {
          return (
            <Item key={productos.id} producto={productos}/>
          )
        }) : "No hay productos"
      }
      <hr />
      <button onClick={darkMode}>Cambiar modo de color</button>
    </div>
  )
}

export default ItemListContainer
