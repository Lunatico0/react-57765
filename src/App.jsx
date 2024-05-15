import './style.css'
import ItemListContainer from './components/ItemListContainer'
import Header from './components/header/Header'
import { useState } from 'react';

function App() {

  const saludo = "Hola! En este lugar se muestran las 'Cards' del e-commerce.";
  const [darkMode, setDarkMode] = useState("claro"); 

  return (
    <>
      <Header darkMode={darkMode} />
      <ItemListContainer greeting={saludo} darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default App
