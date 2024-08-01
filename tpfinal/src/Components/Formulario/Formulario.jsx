import React from "react";

import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import location from "../../assets/Iconos/location.png";
import fbcolor from "../../assets/Iconos/fbcolor.svg";
import twcolor from "../../assets/Iconos/twcolor.svg";
import igcolor from "../../assets/Iconos/igcolor.svg";
import { Box, Flex, Text } from "@chakra-ui/react";
import "@fontsource/dm-serif-display";

const Formulario = () => {
  return (
    <Box as="Form" bg="#19142A" color="white" pt="80px">
      <Flex as="Completo" justifyContent="space-around">
        <Box as="Contactame" pl="10px">
          <Text
            fontSize="40px"
            fontWeight="lighter"
            fontFamily="dm-serif-display"
          >
            Contactame
          </Text>
          <Text fontSize="20px" fontWeight="10px" pt="20px">
            Hagamos algo nuevo,diferente y mas significativo o hamos algo mas
            visual o conceptual?
          </Text>

          <div className="Llamame">
            <Box position='relative'
            top='53px'
            right='56px'
            w='24px'
            bg='	#D5223A'
            borderRadius='18px'
            p='8px'><img src={telefono} /></Box>
            <Text color="gray" fontSize="20px">
              Llamame
            </Text>
            <Text fontSize="25px">+541167228883</Text>
          </div>

          <div className="Email">
            <Box position='relative'
            top='53px'
            right='56px'
            w='24px'
            bg='	#D5223A'
            borderRadius='18px'
            p='8px'><img src={email} /></Box>
            <Text color="gray" fontSize="20px">
              Email
            </Text>
            <Text fontSize="25px">0cabezasbelen0@gmail.com</Text>
          </div>

          <div className="Direccion">
            <Box position='relative'
            top='53px'
            right='56px'
            w='24px'
            bg='	#D5223A'
            borderRadius='18px'
            p='8px'><img src={location} /></Box>
            <Text color="gray" fontSize="20px">
              Direccion
            </Text>
            <Text fontSize="25px">Gonzalez catan,Bs As.</Text>
          </div>
        </Box>

        <div className="Formulario">
          <h1>Dejame tu consulta</h1>
          <div className="Formulario-completo">
            <div className="NombreEmail">
              <input placeholder="Nombre" type="text" />
              <input placeholder="Email" type="email" />
            </div>
            <div className="NumeroPresupuesto">
              <input placeholder="Numero" type="tel" />
              <input placeholder="Presupuesto" type="text" />
            </div>

            <input
              className="Mensaje"
              placeholder="Mensaje"
              minlength="10"
              type="text"
            />
            <div className="Boton">
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </Flex>

      <div className="Di-hola">
        <h1>Dime hola</h1>
        <a href="mailto:0cabezasbelen0@gmail,com">
          <p>0cabezasbelen0@gmail.com</p>
        </a>
        <div className="IconFinal">
          <a href="https://www.facebook.com/profile.php?id=100011000144769">
            <img src={fbcolor} />
          </a>
          <a href="https://x.com/be3elu">
            <img src={twcolor} />
          </a>
          <a href="https://ar.linkedin.com/">
            <img src={igcolor} />
          </a>
        </div>
      </div>
    </Box>
  );
};

export { Formulario };
