import { useState } from 'react'
import { Header } from './components/Navbar/Header'
import './styles/App.css'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'


function App() {

  return (
    <>
      <div className='app-content'>
      <Header/>
      <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
