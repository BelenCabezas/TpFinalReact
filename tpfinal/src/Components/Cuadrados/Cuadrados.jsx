import React from "react";
import "@fontsource/roboto";
import { Box, Flex } from "@chakra-ui/react";

const Cuadrados = () => {
  return (
    <Flex
      class="Cuadrados"
      justifyContent="space-around"
      fontFamily="roboto"
      color="white"
      pt="60px"
      pb="60px"
      bg="#2A2344"
      direction={{base:'column',md:'unset'}}
      alignItems={{base:'center',md:'unset'}}
    >
      <Box
        className="Premio"
        border="3px dashed #D5223A"
        borderTopRightRadius="45px"
        m="30px 0px"
        w={{base:'250px',lg:"350px"}}
        fontSize="30px"
        textAlign="center"
        pb="40px"
      >
        {/*!--Primer cuadrado--*/}
        <Box
          position="relative"
          top="-23px"
          left="45px"
          bg="#D5223A"
          width="45px"
          p="10px"
        >
          <i class="bi bi-trophy"></i>
        </Box>
        <h1>0+</h1>
        <h2>Premios</h2>
      </Box>

      <Box
        className="Clientes"
        border="3px solid #D5223A"
        borderTopRightRadius="45px"
        m="30px 0px"
        w={{base:'250px',lg:"350px"}}
        fontSize="30px"
        textAlign="center"
        pb="40px"
      >
        {/*!--Segundo cuadrado--*/}
        <Box
          position="relative"
          top="-23px"
          left="45px"
          bg="#D5223A"
          width="45px"
          p="10px"
        >
          <i class="bi bi-people"></i>
        </Box>
        <h1>0+</h1>
        <h2>Clientes</h2>
      </Box>

      <Box
        className="Exp"
        border="3px dashed #D5223A"
        borderTopRightRadius="45px"
        m="30px 0px"
        w={{base:'250px',lg:"350px"}}
        fontSize="30px"
        textAlign="center"
        pb="40px"
      >
        {/*!--Tercer cuadrado--*/}
        <Box
          position="relative"
          top="-23px"
          left="45px"
          bg="#D5223A"
          width="45px"
          p="10px"
        >
          <i className="bi bi-person-lines-fill"></i>
        </Box>
        <h1>01+</h1>
        <h2>Meses de experiencia</h2>
      </Box>

      <Box
        className="Proyectos"
        border="3px dashed #D5223A"
        borderTopRightRadius="45px"
        m="30px 0px"
        w={{base:'250px',lg:"350px"}}
        fontSize="30px"
        textAlign="center"
        pb="40px"
      >
        {/*!--Cuarto cuadrado--*/}
        <Box
          position="relative"
          top="-23px"
          left="45px"
          bg="#D5223A"
          width="45px"
          p="10px"
        >
          <i className="bi bi-pc-display"></i>
        </Box>
        <h1>04+</h1>
        <h2>Proyectos</h2>
      </Box>
    </Flex>
  );
};

export { Cuadrados };
