import React from "react";
import tpo1 from "../../assets/Imagenes/tpo 1.png";
import tpo1b from "../../assets/Imagenes/tpo 1b.png";
import tpoa from "../../assets/Imagenes/tpo a.png";
import tpob from "../../assets/Imagenes/tpo b.png";
import {
  Tabs,
  TabPanels,
  TabPanel,
  Image,
  Tab,
  TabList,
} from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <section>
      <div class="Portafolio-Proyecto">
        <div class="Portafolio">
          <h2>Portafolio</h2>
          <p>Estos son algunos de mis trabajos</p>
        </div>
      </div>

      <Tabs defaultIndex={1}>
        <TabList>
        <Tab _selected={{ color: 'white', bg:'#D6223B'}}>Todos los trabajos</Tab>
        <Tab _selected={{ color: 'white', bg:'#D6223B'}}>Proyecto personal</Tab>
        <Tab isDisabled>Proyecto profesional</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Image boxSize="200px" fit="cover" src={tpo1} />
            <Image boxSize="200px" fit="cover" src={tpo1b} />
            <Image boxSize="200px" fit="cover" src={tpoa} />
            <Image boxSize="200px" fit="cover" src={tpob} />
          </TabPanel>
          <TabPanel>
            <Image boxSize="200px" fit="cover" src={tpoa} />
            <Image boxSize="200px" fit="cover" src={tpob} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export { Portfolio };
