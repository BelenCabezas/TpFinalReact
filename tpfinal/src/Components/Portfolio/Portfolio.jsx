import React from "react";

import tpo1 from "../../assets/Imagenes/tpo 1.png";
import tpo1b from "../../assets/Imagenes/tpo 1b.png";
import tpoa from "../../assets/Imagenes/tpo a.png";
import tpob from "../../assets/Imagenes/tpo b.png";

const Portfolio =()=>{
    return(
        <section>
          <div className="Portafolio-Proyecto">
        <div className="Portafolio">
            <h2>Portafolio</h2>
            <p>Estos son algunos de mis trabajos</p>
        </div>
        <div className="Proyectos2">
            <a href="">Todos los trabajos</a>
            <a href="">Proyecto personal</a>
            <a href="">Proyecto profesional</a>
        </div>
          </div>  
        

        <div className="Trabajos">
            {/*<!--Tpo 1-->*/}
            <img src= {tpo1}/>
           { /*<!--Tpo 2-->*/}
            <img src={tpo1b}/>
            {/*<!--Tpo 3-->*/}
            <img src={tpoa}/>
           { /*<!--Tpo 4-->*/}
            <img src={tpob}/>
        </div>
        <div className="Btn">
          <button>Ver todos</button>
        </div>
        
        </section>
    )
}

export {Portfolio}