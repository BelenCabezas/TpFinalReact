import React from "react";
import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import location from "../../assets/Iconos/location.png";
import { Box, Button, Flex, Text,Img } from "@chakra-ui/react";
import "@fontsource/dm-serif-display";

const Formulario = () => {
  return (
    <Box as="Form"
    bg="#19142A"
     color="white" 
     pt="80px">

  <Flex as="Completo"
  justifyContent='space-around'>
    <Box as="Contactame"
    pl='10px'>
      <Text
      fontSize='40px'
      fontFamily='dm-serif-display'>Contactame</Text>
      <Text fontSize='20px'
      pt='20px'
      fontWeight='10px'>
        Hagamos algo nuevo,diferente y mas significativo o hamos algo mas visual o conceptual?</Text>

     <div class="Llamame">
      <Img position="relative"
              top="53px"
              right="56px"
              w="40px"
              bg="#D5223A"
              borderRadius="18px"
              p="8px" src={telefono} />
        <Text color='gray'
        fontSize='20px'>Llamame</Text>
        <Text fontSize='25px'>+541167228883</Text>
     </div>

      <div class="Email">
        <Img position="relative"
              top="53px"
              right="56px"
              w="40px"
              bg="#D5223A"
              borderRadius="18px"
              p="8px" src= {email} />
        <Text color='gray'
        fontSize='20px'>Email</Text>
        <Text fontSize='25px'>0cabezasbelen0@gmail.com</Text>
        </div>

        <div class="Direccion">
        <Img position="relative"
              top="53px"
              right="56px"
              w="40px"
              bg="#D5223A"
              borderRadius="18px"
              p="8px" src= {location} />
        <Text color='gray'
        fontSize='20px'>Direccion</Text>
        <Text fontSize='25px'>Gonzalez catan,Bs As.</Text>
      </div>
    </Box>

    <div class="Formulario">
      <h1>Dejame tu consulta</h1>
      <div class="Formulario-completo">
      <div class="NombreEmail">
      <input placeholder="Nombre" type="text" />
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
      
    </Flex>
    
    </Box>
  );
};

export { Formulario };
