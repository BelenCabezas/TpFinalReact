import React from "react";
import portfolio from "../../assets/Imagenes/portfolio.png";
import barra from "../../assets/Imagenes/barra.png";
import facebook from "../../assets/Iconos/facebook.svg";
import twitter from "../../assets/Iconos/twitter.svg";
import linkedin from "../../assets/Iconos/linkedin.svg";
import { Box, Flex, Text } from "@chakra-ui/react";
import "@fontsource/cactus-classical-serif";

const Hero = () => {
  return (
   
     <Box as="Hero">
      <Flex
        justifyContent="space-around"
        bg="#19142A"
        alignItems="center"
        h="100vh">

        <Flex 
         mt={{base: "30px",lg:"0"}}
        className="responsive" 
        align={{base:"center",lg:'center'}} 
        justify="space-between"
       
        direction={{base:"column", lg:"row"}}>
        
        
      
       
        <Flex direction="column" 
        color="white" pl="40px" fontFamily='cactus-classical-serif'
        >
          <Text
            bg="#52182E"
            borderRadius="5px"
            fontSize={{base:'15px',lg:'20px'}}
            p={{base:'8px', lg:'16px'}} 
            mb="15px"
            w={{base:'140px',lg:'205px'}}
          >
            Bienvenidos yo soy
          </Text>

          <Text fontSize= {{base:'40px',md:"60px"} }>Belén Cabezas</Text>

          <Text mt="10px" fontSize={{base:'25px',md:'30px'}}>
            Diseñadora Web
          </Text>

          <Text fontSize={{base:'15px',md:"20px"}} mt={{ base:'20px',md:"30px"}}>
            Soy una persona entusiasta,motivada,responsable y trabajadora con
            muchas ganas de seguir aprendiendo todo lo que pueda dentro del
            mundo it.
          </Text>
        </Flex>

        <Box 
       
        w="46%" position="relative" top={{base:'-5px',md:'-35px'}}>
          <img
            className="ImagenPresentacion"
            src={portfolio}
            alt="Imagen Personal"
          />
        </Box>
        
         
      <Flex m="30px" w="50px" flexDirection={{base:'row',md:"column"}} >
        
         
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
        
        
        </Flex>      
   

    </Box>
  );
};

export { Hero };
