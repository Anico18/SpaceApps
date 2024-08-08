import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import NameComponent from './components/NameComponent/NameComponent'
import TechsComponent from './components/TechsComponent/TechsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <NameComponent></NameComponent>
      <h1 style={{fontSize: "2rem", paddingTop: "5rem", paddingBottom: "2rem", paddingLeft: "2rem"}}>Tecnologías que conozco:</h1>
      <TechsComponent></TechsComponent>
      <h1 style={{fontSize: "2rem", paddingTop: "5rem", paddingBottom: "2rem", paddingLeft: "2rem"}}>Mis Pasatiempos</h1>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
