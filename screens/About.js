import React from "react";
import { Text, Flex, Box, SimpleGrid, Image } from "@chakra-ui/core";

const About = () => (
  <Flex width="100%" height="100%" padding={12}>
    <Box flex={1} justifyItems="center">
      <Image src="about.jpg" height="90%" />
    </Box>
    <Box flex={1} display="flex" flexDirection="column">
      <Box width={220}>
        <Text
          fontSize={24}
          fontWeight={700}
          borderBottom="2px solid"
          borderColor="primary.300"
          marginBottom={12}
        >
          SOBRE NOSOTROS
        </Text>
      </Box>
      <Box>
        <Text>
          Somos un grupo de trabajadores de la psicologia social y otros ambitos
          relacionados con la salud mental (Operadores Socio Terapeuticos,
          Acompañantes Terapeuticos, Operadores Comunitarios, Sociólogos y
          Terapistas) que decidimos crear un sindicato con el fin de defender
          nuestros derechos laborales, propiciando condiciones optimas que nos
          permitan desarrollar nuestra labor sin ningun tipo de incoveniente.
          Tenemos como objetivo principal, jerarquizar nuestra profesion
          brindando a nuestros afiliados todo tipo de beneficios que sirvan para
          dignificarlos.
        </Text>
      </Box>
      <Box marginTop={12}>
        <Text fontSize={24} fontWeight={600}>
          Porque elegirnos a nosotros?
        </Text>
        <SimpleGrid columns={2} marginTop={6} spacing={2}>
          <Box>
            <Text>Razon Numero 1</Text>
          </Box>
          <Box>
            <Text>Razon Numero 1</Text>
          </Box>
          <Box>
            <Text>Razon Numero 1</Text>
          </Box>
          <Box>
            <Text>Razon Numero 1</Text>
          </Box>
          <Box>
            <Text>Razon Numero 1</Text>
          </Box>
          <Box>
            <Text>Razon Numero 1</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  </Flex>
);

export default About;
