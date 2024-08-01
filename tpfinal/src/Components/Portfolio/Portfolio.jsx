import React from "react";
import tpo1 from "../../assets/Imagenes/tpo 1.png";
import tpo1b from "../../assets/Imagenes/tpo 1b.png";
import tpoa from "../../assets/Imagenes/tpo a.png";
import tpob from "../../assets/Imagenes/tpo b.png";
import "@fontsource/cactus-classical-serif";
import '@fontsource/roboto';
import {
  Tabs,
  TabPanels,
  TabPanel,
  Image,
  Tab,
  TabList,
  Flex,
  Box,
  Text,
  Button,
  TabIndicator,
} from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Box><Flex flexDirection='column'
    bg="#19142A"
    color="white"
    p="40px"
    fontFamily="cactus-classical-serif"
    fontWeight='lighter'
    as="Portafolio">
        <Text fontSize="50px">Portafolio</Text>
        <Text margin="20px 0px" fontSize="20px">
          Estos son algunos de mis trabajos
        </Text>
      </Flex>
    <Flex
      justifyContent="space-around"
      bg="#19142A"
      color="white"
      p="40px"
      fontFamily="cactus-classical-serif"
    >
      

      <Tabs variant='unstyled'  >
        <TabList >
          <Tab p='10px' fontSize='20px' bg='#1D182F' _selected={{ color: "white", bg: "#D6223B" }}>
            Todos los trabajos
          </Tab>
          <Tab p='10px' fontSize='20px' bg='#1D182F' _selected={{ color: "white", bg: "#D6223B" }}>
            Proyecto personal
          </Tab>
          <Tab p='10px' fontSize='20px' bg='#1D182F' isDisabled>Proyecto profesional</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <Flex justifyContent='center'
            flexWrap='wrap'>
            < Image p='10px 5px' alt="Primer pagina web" boxSize="xl"  src={tpo1} />
            <Image p='10px 5px' alt="Seccion de arte" boxSize="xl"  src={tpo1b} />
            <Image p='10px 5px' alt="Copia de servicios" boxSize="xl"  src={tpoa} />
            <Image p='10px 5px' alt="Copia de registro" boxSize="xl"  src={tpob} /></Flex>
          </TabPanel>
          <TabPanel>
          <Flex justifyContent='center'
            flexWrap='wrap'>
            <Image p='10px 5px' alt="Copia de servicios" boxSize="xl"  src={tpoa} />
            <Image p='10px 5px' alt="Copia de registro" boxSize="xl"  src={tpob} /></Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
   </Flex>
    <Flex justifyContent='center'
    bg="#19142A">
      <Button _hover={{ bg: "#D6223B" }} color='white'
      fontFamily='roboto'
      bg= "#D6223B"
      fontSize='30px'
      fontWeight='lighter'
      p='40px'
      mt='55px'
      mb='70px'
      >Ver todos</Button>
      </Flex>
  </Box>
  );
};

export { Portfolio };
