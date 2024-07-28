import React from "react";

const Cuadrados=()=>{
    return(
        <section className="a">
        <div className="Cuadrados">
          <div className="Premio">
          {/*<!--Primer cuadrado-->*/}
            <i className="bi bi-trophy"></i>
         <h1>0+</h1>
         <h2>Premios</h2>
          </div>
          
      <div className="Clientes">
        {/*<!--Segundo cuadrado-->*/}
            <i className="bi bi-people"></i>
        <h1>0+</h1>
        <h2>Clientes</h2>
      </div>
         
       <div className="Exp">
        {/*<!--Tercer cuadrado-->*/}
        <i className="bi bi-person-lines-fill"></i>
        <h1>01+</h1>
        <h2>Meses de experiencia</h2>
       </div>
        
      <div className="Proyectos">
        {/*<!--Cuarto cuadrado-->*/}
        <i className="bi bi-pc-display"></i>
        <h1>04+</h1>
        <h2>Proyectos</h2>
      </div>
        
        </div>
        </section>
    )
}

export {Cuadrados}