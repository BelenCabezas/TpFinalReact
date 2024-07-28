import React from "react";

const Cuadrados=()=>{
    return(
        <section class="a">
        <div class="Cuadrados">
          <div class="Premio">
          {/*<!--Primer cuadrado-->*/}
            <i class="bi bi-trophy"></i>
         <h1>0+</h1>
         <h2>Premios</h2>
          </div>
          
      <div class="Clientes">
        {/*<!--Segundo cuadrado-->*/}
            <i class="bi bi-people"></i>
        <h1>0+</h1>
        <h2>Clientes</h2>
      </div>
         
       <div class="Exp">
        {/*<!--Tercer cuadrado-->*/}
        <i class="bi bi-person-lines-fill"></i>
        <h1>01+</h1>
        <h2>Meses de experiencia</h2>
       </div>
        
      <div class="Proyectos">
        {/*<!--Cuarto cuadrado-->*/}
        <i class="bi bi-pc-display"></i>
        <h1>04+</h1>
        <h2>Proyectos</h2>
      </div>
        
        </div>
        </section>
    )
}

export {Cuadrados}