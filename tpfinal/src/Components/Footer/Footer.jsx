import React from "react";
import { Box, Flex, Link, Image, Divider, Center } from "@chakra-ui/react";
import fbcolor from "../../assets/Iconos/fbcolor.svg";
import twcolor from "../../assets/Iconos/twcolor.svg";
import igcolor from "../../assets/Iconos/igcolor.svg";
import "@fontsource/dm-serif-display";

const Footer = () => {
  return (
    <Flex as="Footer" bg="#2A2344">
      <Box as="Di-hola">
        <Flex
          justifyContent="center"
          color="white"
          fontSize="60px"
          fontFamily="dm-serif-display"
          pt="100px"
          pb="20px"
        >
          <h1>Dime hola</h1>
        </Flex>

        <Link
          display="flex"
          justifyContent="center"
          color="white"
          href="mailto:0cabezasbelen0@gmail,com"
        >
          0cabezasbelen0@gmail.com
        </Link>

        <Flex as="IconFinal" pb="60px">
          <a href="https://www.facebook.com/profile.php?id=100011000144769">
            <Image p="30px 20px" src={fbcolor} />
          </a>
          <a href="https://x.com/be3elu">
            <Image p="30px 20px" src={twcolor} />
          </a>
          <a href="https://ar.linkedin.com/">
            <Image p="30px 20px" src={igcolor} />
          </a>
        </Flex>
      </Box>

      <Flex
        as="Copy"
        justifyContent="center"
        fontSize="20px"
        color="white"
        py="40px"
      >
        {/*<!--Icono copy-->*/}
        <i class="bi bi-c-circle"></i>
        <p>2022-Form|Todos los derechos resevados</p>
      </Flex>
    </Flex>
  );
};

export { Footer };
