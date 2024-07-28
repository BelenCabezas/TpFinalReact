import React from "react";
import fbcolor from '../../assets/Iconos/fbcolor.svg';
import twcolor from '../../assets/Iconos/twcolor.svg';
import igcolor from '../../assets/Iconos/igcolor.svg';



const Footer = () =>{
    return(
    <footer>
    <div className="Di-hola">
            <h1>Dime hola</h1>
            <a href="mailto:0cabezasbelen0@gmail,com"><p>0cabezasbelen0@gmail.com</p></a>
            <div class="IconFinal">
                <a href="https://www.facebook.com/profile.php?id=100011000144769"><img src={fbcolor} /></a>
                <a href="https://x.com/be3elu"><img src= {twcolor} /></a>
                <a href="https://ar.linkedin.com/"><img src= {igcolor} /></a>
            </div>
        </div>
        <div className="Copy">
            {/*<!--Icono copy-->*/}
            <i class="bi bi-c-circle"></i>
            <p>2022-Form|Todos los derechos resevados</p>
            <h2></h2>
        </div>
      </footer>
)
}

export {Footer}