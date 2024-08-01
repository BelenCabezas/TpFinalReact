import React from "react";
import tpo1 from "../../assets/Imagenes/tpo 1.png";
import tpo1b from "../../assets/Imagenes/tpo 1b.png";
import tpoa from "../../assets/Imagenes/tpo a.png";
import tpob from "../../assets/Imagenes/tpo b.png";
import "@fontsource/cactus-classical-serif";
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
} from "@chakra-ui/react";

const Portfolio = () => {
  return (
    
    <Flex
      justifyContent="space-around"
      bg="#19142A"
      color="white"
      p="40px"
      fontFamily="cactus-classical-serif"
    >
      <Box as="Portafolio">
        <Text fontSize="50px">Portafolio</Text>
        <Text margin="20px 0px" fontSize="20px">
          Estos son algunos de mis trabajos
        </Text>
      </Box>

      <Tabs defaultIndex={2}>
        <TabList>
          <Tab _selected={{ color: "white", bg: "#D6223B" }}>
            Todos los trabajos
          </Tab>
          <Tab _selected={{ color: "white", bg: "#D6223B" }}>
            Proyecto personal
          </Tab>
          <Tab isDisabled>Proyecto profesional</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex justifyContent='center'
            flexWrap='wrap'
           
            >
            < Image p='10px 5px' alt="Primer pagina web" boxSize="md"  src={tpo1} />
            <Image p='10px 5px' alt="Seccion de arte" boxSize="md"  src={tpo1b} />
            <Image p='10px 5px' alt="Copia de servicios" boxSize="md"  src={tpoa} />
            <Image p='10px 5px' alt="Copia de registro" boxSize="md"  src={tpob} /></Flex>
          </TabPanel>
          <TabPanel>
          <Flex justifyContent='center'
            flexWrap='wrap'
            >
            <Image p='10px 5px' alt="Copia de servicios" boxSize="md"  src={tpoa} />
            <Image p='10px 5px' alt="Copia de registro" boxSize="md"  src={tpob} /></Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    
  );
};

export { Portfolio };
