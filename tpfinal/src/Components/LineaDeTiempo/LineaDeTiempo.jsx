import React from "react";

const LineaDeTiempo=()=>{
    return(
        <section className="Lineas">
       { /*<!--Experciencia-->*/}
         <div className="Experiencia">
         <h1>Mi Experiencia</h1>
         <h2>Cronograma sobre mis estudios y experiencia en el mundo it</h2>
         </div>

         {/*<!--Linea de tiempo-->*/}
        
          <div className="Lineas2">
          <div className="Linea1">
          <div className="LineaA">
            <h1>Paso 01</h1>
            <p>Estudio Java en RIET</p> </div>
            <div className="Año">
              <h2>2023</h2>
            </div>
            </div>
         
         <div className="Linea2">
          <div className="LineaB">
            <h1>Paso 02</h1>
            <p>Estudio Full stack en UTN</p></div>
            <div className="Año">
              <h2>2024</h2>
            </div>
            </div>
          </div>
         
        </section>

    )
}

export {LineaDeTiempo}