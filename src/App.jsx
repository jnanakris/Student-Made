import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import CategoryCard from './components/CategoryCard'
import CreatorBubble from './components/CreatorBubble'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>

      <Header/>

      <main className='p-4 grow bg-gray-100 flex flex-row'>
        <Outlet/>
      </main>

      <Footer/>
      
    </div>
  )
}

export default App
