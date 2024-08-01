import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import fbcolor from "../../assets/Iconos/fbcolor.svg";
import twcolor from "../../assets/Iconos/twcolor.svg";
import igcolor from "../../assets/Iconos/igcolor.svg";
import "@fontsource/dm-serif-display";

const Footer = () => {
  return (
    <Box as="Footer" bg="#2A2344">
      <Box
        as="Di-hola"
        textAlign='center'
        color='white'
      >
        <Text
       fontSize="60px"
       fontFamily="dm-serif-display"
       pt="100px"
       pb="20px"><h1>Dime hola</h1></Text>
        <a href="mailto:0cabezasbelen0@gmail,com">
          <p>0cabezasbelen0@gmail.com</p>
        </a>
        <Box as="IconFinal"
        pb='60px'>
          <a href="https://www.facebook.com/profile.php?id=100011000144769">
            <img src={fbcolor} />
          </a>
          <a href="https://x.com/be3elu">
            <img src={twcolor} />
          </a>
          <a href="https://ar.linkedin.com/">
            <img src={igcolor} />
          </a>
        </Box>
      
      </Box>

      <Box
        as="Copy"
        justifyContent="center"
        fontSize="20px"
        color="white"
        py="40px"
      >
        {/*<!--Icono copy-->*/}
        <i class="bi bi-c-circle"></i>
        <p>2022-Form|Todos los derechos resevados</p>
      </Box>
    </Box>
  );
};

export { Footer };
