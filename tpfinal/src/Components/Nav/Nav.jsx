import {Anillos} from '../../assets/Imagenes/Anillos.png'
import React from "react";


const Nav=()=> {
    return(
        
        <div>
             <img src ={Anillos} alt="Logo de anillos" />
            <button>Sobre mi</button>
            <button>Portfolio</button>
            <button>Blog</button>
            <button>Contactame</button>
            <button>Descarga Cv</button>
        </div>
    )
}

export {Nav}