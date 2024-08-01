import React from "react";

import { Box} from "@chakra-ui/react";


const Footer = () =>{
    return(
    <Box as="Footer"
    bg='#2A2344'>
        
 
        <Box as="Copy"
        justifyContent='center'
        fontSize='20px'
        color='white'
        py='40px'>
            {/*<!--Icono copy-->*/}
            <i class="bi bi-c-circle"></i>
            <p>2022-Form|Todos los derechos resevados</p>
          
        </Box>
      </Box>
)
}

export {Footer}