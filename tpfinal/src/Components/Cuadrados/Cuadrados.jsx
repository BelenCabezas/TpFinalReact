import React from "react";
import '@fontsource/roboto';
import { Box } from "@chakra-ui/react";

const Cuadrados=()=>{
    return(
     <Box bg='#2A2344'>
       <Box as="Cuadrados"
       display='flex'
       justifyContent='space-around'
       fontFamily='roboto'
       color='white'
       pt='60px'
       pb='60px'>
    
          <Box as="Premio"
          borderStyle='dashed'
          borderColor='#D5223A'
          fontSize='30px'
          textAlign='center'>
            
          {/*<!--Primer cuadrado-->*/}
            <i className="bi bi-trophy"></i>
         <h1>0+</h1>
         <h2>Premios</h2>
          </Box>
          
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
        
        
       </Box>
        </Box>
    )
}

export {Cuadrados}