import React from "react";
import '@fontsource/roboto';
import { Box, Flex } from "@chakra-ui/react";

const Cuadrados=()=>{
    return(
      <Flex class="Cuadrados"
      justifyContent='space-around'
      fontFamily='roboto'
      color='white'
      pt='60px'
      pb='60px'
      bg='#2A2344'>

        <Box class="Premio"
        border='3px dashed #D5223A'
        borderTopRightRadius='45px'
        m='30px 0px'
        w='350px'
        fontSize='30px'
        textAlign='center'
        pb='20px'
        >
       {/*!--Primer cuadrado--*/}
          <Box 
          position='relative'
          top='-23px'
          left='45px'
          bg='#D5223A'
          width='45px'
          p='10px'
          > <i class="bi bi-trophy"></i></Box>
       <h1>0+</h1>
       <h2>Premios</h2>
        </Box>
        
    <Box class="Clientes">
      {/*!--Segundo cuadrado--*/}
         <Box> <i class="bi bi-people"></i></Box>
      <h1>0+</h1>
      <h2>Clientes</h2>
    </Box>
       
     <Box class="Exp">
      {/*!--Tercer cuadrado--*/}
     <Box><i class="bi bi-person-lines-fill"></i></Box> 
      <h1>01+</h1>
      <h2>Meses de experiencia</h2>
     </Box>
      
    <Box class="Proyectos">
      {/*!--Cuarto cuadrado--*/}
      <i class="bi bi-pc-display"></i>
      <h1>04+</h1>
      <h2>Proyectos</h2>
    </Box>
      
      </Flex>
     
       
    )
}

export {Cuadrados}