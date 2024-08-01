import React from "react";

import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import location from "../../assets/Iconos/location.png";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
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
            <Box
              position="relative"
              top="53px"
              right="56px"
              w="24px"
              bg="	#D5223A"
              borderRadius="18px"
              p="8px"
            >
              <img src={telefono} />
            </Box>
            <Text color="gray" fontSize="20px">
              Llamame
            </Text>
            <Text fontSize="25px">+541167228883</Text>
          </div>

          <div className="Email">
            <Box
              position="relative"
              top="53px"
              right="56px"
              w="24px"
              bg="	#D5223A"
              borderRadius="18px"
              p="8px"
            >
              <img src={email} />
            </Box>
            <Text color="gray" fontSize="20px">
              Email
            </Text>
            <Text fontSize="25px">0cabezasbelen0@gmail.com</Text>
          </div>

          <div className="Direccion">
            <Box
              position="relative"
              top="53px"
              right="56px"
              w="24px"
              bg="	#D5223A"
              borderRadius="18px"
              p="8px"
            >
              <img src={location} />
            </Box>
            <Text color="gray" fontSize="20px">
              Direccion
            </Text>
            <Text fontSize="25px">Gonzalez catan,Bs As.</Text>
          </div>
        </Box>

        <Flex as="Formulario" flexDirection="column" mb="80px">
          <Text
            fontSize="40px"
            fontWeight="lighter"
            fontFamily="dm-serif-display"
            pb="20px"
          >
            Dejame tu consulta
          </Text>
          <div className="Formulario-completo">
            <Box as="NombreEmail" >
              <Box 
                bg="	#19142A"
                color="gray"
                border="solid gray 1px"
                w="200px"
                h="40px"
                borderRadius="5px"
                m="10px"
              >
                <input placeholder="Nombre" type="text" />
              </Box>
              <Box
                bg="	#19142A"
                color="gray"
                border="solid gray 1px"
                w="200px"
                h="40px"
                borderRadius="5px"
                m="10px"
              >
                <input placeholder="Email" type="email" />
              </Box>
            </Box>
            <div className="NumeroPresupuesto">
              <Box
                bg="	#19142A"
                color="gray"
                border="solid gray 1px"
                w="200px"
                h="40px"
                borderRadius="5px"
                m="10px"
              >
                <input placeholder="Numero" type="tel" />
              </Box>
              <Box
                bg="	#19142A"
                color="gray"
                border="solid gray 1px"
                w="200px"
                h="40px"
                borderRadius="5px"
                m="10px"
              >
                <input placeholder="Presupuesto" type="text" />
              </Box>
            </div>

            <Box
              bg="	#19142A"
              color="gray"
              border="solid gray 1px"
              w="437px"
              h="107"
              borderRadius="5px"
              position="relative"
              left="7px"
            >
              <input
                className="Mensaje"
                placeholder="Mensaje"
                minlength="10"
                type="text"
              />
            </Box>

            <Button
              display="flex"
              justifyContent="start"
              mt="40px"
              bg="#D5223A"
              color="white"
              borderRadius="5px"
              py="20px"
              px="50px"
              border="none"
            >
              
              Enviar
            </Button>
          </div>
        </Flex>
      </Flex>

    </Box>
  );
};

export { Formulario };
