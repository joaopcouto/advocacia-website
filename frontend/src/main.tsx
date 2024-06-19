import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' 
import Appcss from './styles/App.css'

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.tsx'
import { Header } from './components/Navbar/Header.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { Expertise } from './pages/Expertise/Expertise.tsx'
import { Contact } from './pages/Contact/Contact.tsx'
import ScrollButton from './components/ScrollButton/ScrollButton.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <div className='app-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/especialidades' element={<Expertise/>} />
        <Route path='/contato' element={<Contact/>} />
      </Routes>
      </div>
      <ScrollButton/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
