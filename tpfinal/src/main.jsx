import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Nav} from "./Components/Nav/Nav.jsx"
import { Hero } from './Components/Hero/Hero.jsx'
import { Cuadrados } from './Components/Cuadrados/Cuadrados.jsx'
import { Portfolio } from './Components/Portfolio/Portfolio.jsx'
import { LineaDeTiempo } from './Components/LineaDeTiempo/LineaDeTiempo.jsx'
import { Formulario } from './Components/Formulario/Formulario.jsx'
import { Footer } from './Components/Footer/Footer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Nav/>
  <Hero/>
  <Cuadrados/>
  <Portfolio/>
  <LineaDeTiempo/>
  <Formulario/>
  <Footer/>
  </React.StrictMode>,
)
