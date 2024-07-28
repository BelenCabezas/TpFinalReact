import React from "react";
import  facebookC  from "../../assets/Iconos/facebook.svg";
import  twitterC  from "../../assets/Iconos/twitterC.svg";
import instagramC from '../../assets/Iconos/instagramC.svg'

const Footer =()=>{
    return(
    <footer>
    <div class="Di-hola">
            <h1>Dime hola</h1>
            <a href="mailto:0cabezasbelen0@gmail,com"><p>0cabezasbelen0@gmail.com</p></a>
            <div class="IconFinal">
                <a href="https://www.facebook.com/profile.php?id=100011000144769"><img src={facebookC} /></a>
                <a href="https://x.com/be3elu"><img src= {twitterC} /></a>
                <a href="https://ar.linkedin.com/"><img src= {instagramC} /></a>
            </div>
        </div>
        <div class="Copy">
            {/*<!--Icono copy-->*/}
            <i class="bi bi-c-circle"></i>
            <p>2022-Form|Todos los derechos resevados</p>
            <h2></h2>
        </div>
      </footer>
)
}

export {Footer}