import React from "react";
import portfolio from "../../assets/Imagenes/portfolio.png";
import barra from "../../assets/Imagenes/barra.png";
import facebook from "../../assets/Iconos/facebook.svg";
import twitter from "../../assets/Iconos/twitter.svg";
import linkedin from "../../assets/Iconos/linkedin.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box as="Hero">
      <Flex
        justifyContent="space-around"
        bg="#19142A"
        alignItems="center"
        h="100vh"
      >
        <Flex direction="column" color="white" pl="40px">
          <Text
            bg="#52182E"
            borderRadius="5px"
            fontSize="20px"
            p="16px"
            mb="15px"
            w="205px"
          >
            Bienvenidos yo soy
          </Text>

          <Text fontSize="60px">Belén Cabezas</Text>

          <Text mt="10px" fontSize="30px">
            Diseñadora Web
          </Text>

          <Text fontSize="20px" mt="30px">
            Soy una persona entusiasta,motivada,responsable y trabajadora con
            muchas ganas de seguir aprendiendo todo lo que pueda dentro del
            mundo it.
          </Text>
        </Flex>

        <Box w="100vh" position="relative" top="-35">
          <img
            className="ImagenPresentacion"
            src={portfolio}
            alt="Imagen Personal"
          />
        </Box>
        <Flex flexDirection="column" m="30px" w="50px">
          <div className="Redes">
            <div className="sigueme">
              <img src={barra} />

              <div className="IconosRedes">
                <a href="https://www.facebook.com/profile.php?id=100011000144769">
                  <img src={facebook} alt="Logo facebook" />
                </a>

                <a href="https://x.com/be3elu">
                  <img src={twitter} alt="Logo twitter" />
                </a>

                <a href="https://ar.linkedin.com/">
                  <img src={linkedin} alt="Logo linkedin" />
                </a>
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
    </Box>
  );
};

export { Hero };
