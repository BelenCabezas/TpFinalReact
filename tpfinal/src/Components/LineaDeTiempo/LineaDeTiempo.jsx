import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import "@fontsource/cactus-classical-serif";

const LineaDeTiempo = () => {
  return (
    <Box className="Lineas" bg="#2A2344" color="white">
      {/*<!--Experciencia-->*/}
      <Box
        as="Experiencia"
        fontFamily="Cactus Classical Serif"
        textAlign="center"
      >
        <Text pt="80px" fontSize={{base:'30px',md:"40px"}} fontWeight="lighter">
          Mi Experiencia
        </Text>
        <Text fontSize={{base:'15px',md:"20px"}} fontWeight="lighter" mt="20px" mb="30px">
          Cronograma sobre mis estudios y experiencia en el mundo it
        </Text>
      </Box>

      {/*<!--Linea de tiempo-->*/}

      <Flex as="Lineas2"
       justifyContent="space-around" 
       padding="15px">
        <Flex as="Linea1" 
        flexDirection="column">
          <Box as="LineaA"
           borderLeft="solid 3px #D5223A"
           pl={{base:'15px',md:"30px"}}>
            <h1>Paso 01</h1>
            <Text fontSize={{base:'15px',md:"20px"}}>Estudio Java en RIET</Text>
          </Box>
          <Box
            as="Año"
            bg="#D5223A"
            mt="60px"
            textAlign="center"
            padding={{base:'10px',md:"20px"}}
            mr={{base:'10px',md:'unset'}}
            fontSize={{base:'15px',md:"20px"}}
            borderRadius="3px"
            mb="50px"
          >
            <h2>2023</h2>
          </Box>
        </Flex>

        <Flex as="Linea2" flexDirection="column">
          <Box as="LineaB"
           borderLeft="solid 3px #D5223A" 
           pl={{base:'15px',md:"30px"}}>
            <h1>Paso 02</h1>
            <Text fontSize={{base:'15px',md:"20px"}}>Estudio Full stack en UTN</Text>
          </Box>

          <Box
            as="Año"
            bg="#D5223A"
            mt="60px"
            textAlign="center"
            padding={{base:'10px',md:"20px"}}
            ml={{base:'10px',md:'unset'}}
            fontSize={{base:'15px',md:"20px"}}
            borderRadius="3px"
            mb="50px"
          >
            <h2>2024</h2>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export { LineaDeTiempo };
