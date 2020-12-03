import React from "react";
import { Text, Flex, Box, SimpleGrid, Image } from "@chakra-ui/core";

const About = () => (
  <Flex
    width="100%"
    height="100%"
    padding={{ base: 2, lg: 12 }}
    direction={{ base: "column", lg: "row" }}
  >
    <Box
      flex={1}
      justifyItems="center"
      display={{ base: "none", lg: "flex" }}
      marginRight={6}
    >
      <Image src="about.jpg" height="100%" />
    </Box>
    <Box flex={1} display="flex" flexDirection="column">
      <Box width={{ base: "100%", lg: 220 }} textAlign="center">
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
      <Box
        padding={{ base: 2, lg: 0 }}
        textAlign={{ base: "center", lg: "left" }}
      >
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
        <Text
          fontSize={24}
          fontWeight={600}
          textAlign={{ base: "center", lg: "left" }}
        >
          Porque elegirnos a nosotros?
        </Text>
        <SimpleGrid
          columns={2}
          marginTop={6}
          spacing={10}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Box backgroundColor="primary.100" padding={2}>
            <Text>
              Por nuestro compromiso para la jerarquizacion de nuestra profesión
            </Text>
          </Box>
          <Box backgroundColor="primary.100" padding={2}>
            <Text>
              Porque nuestro interés es fomentar la unión, armonía solidaridad y
              la participación activa de los trabajadores de la Psicología
              Social y carreras afines en el campo de salud mental.
            </Text>
          </Box>
          <Box backgroundColor="primary.100" padding={2}>
            <Text>
              Porque nuestra lucha esta orientada a beneficiar a nuestros
              afiliados, realizando propuestas que resulten enriquecedoras tanto
              laboral como profesionalmente.
            </Text>
          </Box>
          <Box backgroundColor="primary.100" padding={2}>
            <Text>
              Porque nuestro objetivo es promover acciones tendientes a ofrecer
              servicios de calidad, trabajando colectivamente para la digna
              representación de nuestros afiliados
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  </Flex>
);

export default About;
