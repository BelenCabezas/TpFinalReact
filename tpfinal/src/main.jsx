import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Nav} from "./Components/Nav/Nav.jsx"
import { Hero } from './Components/Hero/Hero.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Nav/>
  <Hero/>
  </React.StrictMode>,
)
