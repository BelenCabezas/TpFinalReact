import Anillos from "../../assets/Imagenes/Anillos.png";
import React from "react";
import "@fontsource/roboto";
import { Box, Flex, Button, Stack } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box as="Header" bg="#19142A">
      <Flex justifyContent="space-around">
        <Flex justifyItems="initial" position="relative" left="-50px" w="170px">
          <img className="Anillos" src={Anillos} />
        </Flex>

        <Stack spacing={6} direction="row" align="center" border="none">
          <Button
            fontFamily="roboto"
            color="white"
            size="lg"
            bg="#19142A"
            _hover={{ bg: "#D6223B" }}
          >
            Sobre mi
          </Button>

          <Button
            fontFamily="roboto"
            color="white"
            size="lg"
            bg="#19142A"
            _hover={{ bg: "#D6223B" }}
          >
            Servicios
          </Button>

          <Button
            fontFamily="roboto"
            color="white"
            size="lg"
            bg="#19142A"
            _hover={{ bg: "#D6223B" }}
          >
            Portfolio
          </Button>

          <Button
            fontFamily="roboto"
            color="white"
            size="lg"
            bg="#19142A"
            _hover={{ bg: "#D6223B" }}
          >
            Blog
          </Button>

          <Button
            fontFamily="roboto"
            color="white"
            size="lg"
            bg="#19142A"
            _hover={{ bg: "#D6223B" }}
          >
            Contactame
          </Button>

          <Button
            fontFamily="roboto"
            color="white"
            size="lg"
            bg="#19142A"
            _hover={{ bg: "#D6223B" }}
          >
            Descargar cv
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export { Nav };
