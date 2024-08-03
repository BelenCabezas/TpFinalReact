import React from "react";
import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import location from "../../assets/Iconos/location.png";
import { Box, Button, Flex, Text, Img,Input} from "@chakra-ui/react";
import "@fontsource/dm-serif-display";

const Formulario = () => {
  return (
    <Box as="Form" bg="#19142A" color="white" pt="80px">

{/*<Flex 
         mt={{base: "30px",md:'50%',lg:"0"}}
        className="responsive" 
        align={{base:"center",md:'center',lg:'center'
        justify="space-between"
        direction={{base:"column",md:'column', lg:"row"}}>*/}

      <Flex as="Completo" 
      align={{base:"center",md:'unset',lg:'unset'}} 
      direction={{base:"column",md:'unset'}}
      justifyContent="space-around">
        <Box as="Contactame" pl={{base:'20%',md:"10px"}}
         fontFamily="dm-serif-display">
          <Text 
          fontSize={{base:'35px',md:"40px"}}>Contactame</Text>
          <Text fontSize='20px'
           pt="20px"
           fontWeight="10px">
            Hagamos algo nuevo,diferente y mas significativo o hamos algo mas
            visual o conceptual?
          </Text>

          <Img
            position="relative"
            top="53px"
            right="56px"
            w="40px"
            bg="#D5223A"
            borderRadius="18px"
            p="8px"
            src={telefono}
          />
          <Text color="gray" fontSize="20px">
            Llamame
          </Text>
          <Text fontSize="25px">+541167228883</Text>

          <Img
            position="relative"
            top="53px"
            right="56px"
            w="40px"
            bg="#D5223A"
            borderRadius="18px"
            p="8px"
            src={email}
          />
          <Text color="gray" fontSize="20px">
            Email
          </Text>
          <Text fontSize="25px">0cabezasbelen0@gmail.com</Text>

          <Img
            position="relative"
            top="53px"
            right="56px"
            w="40px"
            bg="#D5223A"
            borderRadius="18px"
            p="8px"
            src={location}
          />
          <Text color="gray" fontSize="20px">
            Direccion
          </Text>
          <Text fontSize="25px">Gonzalez catan,Bs As.</Text>
        </Box>

        <Flex
          as="Formulario"
          flexDir="column"
          mb="80px"
          fontFamily="dm-serif-display"
          align={{base:"center",md:'unset',lg:'unset'}} 
         
        >
          <Text fontSize="40px" pb="20px"
          pt={{base:'30px',md:'unset'}}>
            Dejame tu consulta
          </Text>

          <Flex m="10px" p="10px">
            <Input
              size="lg"
              border="solid gray 1px"
              variant="outline"
              placeholder="Nombre"
              type="text"
              m='10px'
            />
            <Input
              size="lg"
              border="solid gray 1px"
              variant="outline"
              placeholder="Email"
              type="email"
              m='10px'
            />
          </Flex>

          <Flex m="10px" p="10px">
            <Input
              size="lg"
              border="solid gray 1px"
              variant="outline"
              placeholder="Numero"
              type="tel"
              m='10px'
            />
            <Input
              size="lg"
              border="solid gray 1px"
              variant="outline"
              placeholder="Presupuesto"
              type="text"
              m='10px'
            />
          </Flex>

          <Flex m="10px" p="10px">
            <Input
              w={{base:'365px',md:"100%"}}
              h="120px"
              position="relative"
              border="solid gray 1px"
              variant="outline"
              placeholder="Mensaje"
              minlength="10"
              type="text"
            />
          </Flex>

          <div>
            <Button
              display="flex"
              justifyContent="start"
              mt={{base:'15px',md:"40px"}}
              bg="#1D182F"
              color="white"
              _hover={{ bg: "#D6223B" }}
              px='15%'
              py="8%"
              p={{base:'30px',md:'unset'}}
              position="relative"
              left={{base:'-130px',md:"18px"}}
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
