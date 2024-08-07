import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import NameComponent from './components/NameComponent/NameComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <NameComponent></NameComponent>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
