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
        <Text pt="80px" fontSize="40px" fontWeight="lighter">
          Mi Experiencia
        </Text>
        <Text fontSize="20px" fontWeight="lighter" mt="20px" mb="30px">
          Cronograma sobre mis estudios y experiencia en el mundo it
        </Text>
      </Box>

      {/*<!--Linea de tiempo-->*/}

      <Flex as="Lineas2" justifyContent="space-around" padding="15px">
        <Flex as="Linea1" flexDirection="column">
          <Box as="LineaA" borderLeft="solid 3px #D5223A" pl="30px">
            <h1>Paso 01</h1>
            <Text fontSize="20px">Estudio Java en RIET</Text>{" "}
          </Box>
          <Box
            as="Año"
            bg="#D5223A"
            mt="60px"
            textAlign="center"
            padding="20px"
            fontSize="20px"
            borderRadius="3px"
            mb="50px"
          >
            <h2>2023</h2>
          </Box>
        </Flex>

        <Flex as="Linea2" flexDirection="column">
          <Box as="LineaB" borderLeft="solid 3px #D5223A" pl="30px">
            <h1>Paso 02</h1>
            <Text fontSize="20px">Estudio Full stack en UTN</Text>
          </Box>

          <Box
            as="Año"
            bg="#D5223A"
            mt="60px"
            textAlign="center"
            padding="20px"
            fontSize="20px"
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
