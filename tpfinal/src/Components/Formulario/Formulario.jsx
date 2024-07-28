import React from "react";
const Formulario=()=>{
    return(
        <div class="Completo">
          <div class="Contactame">
            <h1>Contactame</h1>
            <h2>Hagamos algo nuevo,diferente y mas significativo o hamos algo mas visual o conceptual?</h2>

           <div class="Llamame">
            <img src="icon/telefono.png"/>
              <h3>Llamame</h3>
              <p>+541167228883</p>
           </div>

            <div class="Email">
              <img src="icon/email.png"/>
              <h3>Email</h3>
              <p>0cabezasbelen0@gmail.com</p>
              </div>

              <div class="Direccion">
              <img src="icon/location.png"/>
              <h3>Direccion</h3>
              <p>Gonzalez catan,Bs As.</p>
            </div>
          </div>

          <div class="Formulario">
            <h1>Dejame tu consulta</h1>
            <div class="Formulario-completo">
            <div class="NombreEmail">
            <input placeholder="Nombre" type="text"/>
            <input placeholder="Email" type="email"/>
          </div>
          <div class="NumeroPresupuesto">
            <input placeholder="Numero" type="tel"/>
            <input placeholder="Presupuesto" type="text"/>
          </div>

          <input class="Mensaje" placeholder="Mensaje" minlength="10" type="text"/> 
          <div class="Boton">
             <button>Enviar</button>
          </div>
         
            </div>
            
          </div>
          </div> 
        
           
           
    )
}

export {Formulario}