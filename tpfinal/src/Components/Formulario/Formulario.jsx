import React from "react";
import './Formulario.css'
import telefono from '../../assets/Iconos/telefono.png'
import email from '../../assets/Iconos/email.png'
import location from '../../assets/Iconos/location.png'
import fbcolor from '../../assets/Iconos/fbcolor.svg';
import twcolor from '../../assets/Iconos/twcolor.svg';
import igcolor from '../../assets/Iconos/igcolor.svg';

const Formulario=()=>{
    return(
      <section className="Form">
      <div className="Completo">
      <div className="Contactame">
        <h1>Contactame</h1>
        <h2>Hagamos algo nuevo,diferente y mas significativo o hamos algo mas visual o conceptual?</h2>

       <div className="Llamame">
        <img src= {telefono} />
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
        <input placeholder="Nombre" type="text" />
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
    

      <div className="Di-hola">
      <h1>Dime hola</h1>
      <a href="mailto:0cabezasbelen0@gmail,com"><p>0cabezasbelen0@gmail.com</p></a>
      <div className="IconFinal">
       <a href="https://www.facebook.com/profile.php?id=100011000144769"><img src= {fbcolor} /></a>
       <a href="https://x.com/be3elu"><img src= {twcolor} /></a>
       <a href="https://ar.linkedin.com/"><img src= {igcolor} /></a>
       </div>
      </div>
    </section>
        
           
           
    )
}

export {Formulario}