import React from "react";
const Hero=()=>{
    return(
        <section >
       <div class="Hero">
        <div class="Presentacion">
          <h2>Bienvenidos yo soy</h2>
           <h1>Belén Cabezas</h1>
          <h3>Diseñadora Web</h3>
        <p>Soy una persona entusiasta,motivada,responsable y trabajadora con muchas ganas de seguir aprendiendo todo lo que pueda dentro del mundo it.</p>
        </div>
        <img className="ImagenPresentacion"  src={imgportafolioeditada} alt="Imagen Personal">
        <div className="Redes">    
        <div className="sigueme">
          
          <img src="img/a.png">
         <div className="IconosRedes">
          <a href="https://www.facebook.com/profile.php?id=100011000144769"><img src="icon/facebook.svg"></a>
        <a href="https://x.com/be3elu"><img src="icon/twitter.svg"></a> 
        <a href="https://ar.linkedin.com/"> <img src="icon/linkedin.svg"></a>
         </div>
         
        </div>
      </div>
       
         </section>
    )
}

