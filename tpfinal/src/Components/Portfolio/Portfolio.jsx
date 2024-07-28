import React from "react";
import tpo1 from "../../assets/Imagenes/tpo1.png";
import tpo1b from "../../assets/Imagenes/tpo1b.png";
import tpoa from "../../assets/Imagenes/tpoa.png";
import tpob from "../../assets/Imagenes/tpob.png";

const Portfolio =()=>{
    return(
        <section>
          <div class="Portafolio-Proyecto">
        <div class="Portafolio">
            <h2>Portafolio</h2>
            <p>Estos son algunos de mis trabajos</p>
        </div>
        <div class="Proyectos2">
            <a href="">Todos los trabajos</a>
            <a href="">Proyecto personal</a>
            <a href="">Proyecto profesional</a>
        </div>
          </div>  
        

        <div class="Trabajos">
            {/*<!--Tpo 1-->*/}
            <img src= {tpo1}/>
           { /*<!--Tpo 2-->*/}
            <img src={tpo1b}/>
            {/*<!--Tpo 3-->*/}
            <img src={tpoa}/>
           { /*<!--Tpo 4-->*/}
            <img src={tpob}/>
        </div>
        <div class="Btn">
          <button>Ver todos</button>
        </div>
        
        </section>
    )
}

export {Portfolio}