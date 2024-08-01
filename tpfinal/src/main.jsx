import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Normalize.css'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto';
import {Nav} from "./Components/Nav/Nav.jsx"
import { Hero } from './Components/Hero/Hero.jsx'
import { Cuadrados } from './Components/Cuadrados/Cuadrados.jsx'
import { Portfolio } from './Components/Portfolio/Portfolio.jsx'
import { LineaDeTiempo } from './Components/LineaDeTiempo/LineaDeTiempo.jsx'
import { Formulario } from './Components/Formulario/Formulario.jsx'
import { Footer } from './Components/Footer/Footer.jsx'

/*default breakpoints responsive*/
const breakpoints = {
  breakpoints:{
    base: "0px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1367px",
   '2xl': "1440px",
  },
} 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      
      <Nav/>
    <Hero/>
    <Cuadrados/>

    <LineaDeTiempo/>
    </ChakraProvider>
   
  
  
  
  <Portfolio/>
  
  <Formulario/>
  <Footer/>
  </React.StrictMode>,
)
