import React from "react";
import telefono from '../../assets/Iconos/telefono.png'
import email from '../../assets/Iconos/email.png'
import location from '../../assets/Iconos/location.png'
const Formulario=()=>{
    return(
        <div className="Completo">
          <div className="Contactame">
            <h1>Contactame</h1>
            <h2>Hagamos algo nuevo,diferente y mas significativo o hamos algo mas visual o conceptual?</h2>

           <div className="Llamame">
            <img src={telefono} />
              <h3>Llamame</h3>
              <p>+541167228883</p>
           </div>

            <div className="Email">
              <img src= {email} />
              <h3>Email</h3>
              <p>0cabezasbelen0@gmail.com</p>
              </div>

              <div className="Direccion">
              <img src= {location} />
              <h3>Direccion</h3>
              <p>Gonzalez catan,Bs As.</p>
            </div>
          </div>

          <div className="Formulario">
            <h1>Dejame tu consulta</h1>
            <div className="Formulario-completo">
            <div className="NombreEmail">
            <input placeholder="Nombre" type="text"/>
            <input placeholder="Email" type="email"/>
          </div>
          <div className="NumeroPresupuesto">
            <input placeholder="Numero" type="tel"/>
            <input placeholder="Presupuesto" type="text"/>
          </div>

          <input className="Mensaje" placeholder="Mensaje" minlength="10" type="text"/> 
          <div className="Boton">
             <button>Enviar</button>
          </div>
         
            </div>
            
          </div>
          </div> 
        
           
           
    )
}

export {Formulario}