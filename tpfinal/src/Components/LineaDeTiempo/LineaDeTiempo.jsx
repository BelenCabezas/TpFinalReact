import React from "react";

const LineaDeTiempo=()=>{
    return(
        <section class="Lineas">
       { /*<!--Experciencia-->*/}
         <div class="Experiencia">
         <h1>Mi Experiencia</h1>
         <h2>Cronograma sobre mis estudios y experiencia en el mundo it</h2>
         </div>

         {/*<!--Linea de tiempo-->*/}
        
          <div class="Lineas2">
          <div class="Linea1">
          <div class="LineaA">
            <h1>Paso 01</h1>
            <p>Estudio Java en RIET</p> </div>
            <div class="Año">
              <h2>2023</h2>
            </div>
            </div>
         
         <div class="Linea2">
          <div class="LineaB">
            <h1>Paso 02</h1>
            <p>Estudio Full stack en UTN</p></div>
            <div class="Año">
              <h2>2024</h2>
            </div>
            </div>
          </div>
         
        </section>

    )
}

export {LineaDeTiempo}