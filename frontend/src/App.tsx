import { useState } from 'react'
import './styles/App.css'

import { Header } from './components/Navbar/Header'
import { Footer } from './components/Footer/Footer'
import { Contact } from './pages/Contact/Contact'
import { Expertise } from './pages/Expertise/Expertise'
import { Home } from './pages/Home/Home'




export function App() {

  return (
    <>
      <Header/>
        <div className='app-content'>
          <Home />
        </div>
      <Footer />  
    </>
  )
}

export default App
