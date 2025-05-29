import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import MainSection from './Components/MainSection/MainSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainContainer'>
      <Navbar />
    
    <div className="main">
      <Sidebar />
     
      <MainSection />
      
      
    </div>
    </div>

      
    </>
  )
}

export default App
