import React from "react";

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
            <img src="img/tpo 1.png"/>
           { /*<!--Tpo 2-->*/}
            <img src="img/tpo 1b.png"/>
            {/*<!--Tpo 3-->*/}
            <img src="img/tpo a.png"/>
           { /*<!--Tpo 4-->*/}
            <img src="img/tpo b.png"/>
        </div>
        <div class="Btn">
          <button>Ver todos</button>
        </div>
        
        </section>
    )
}