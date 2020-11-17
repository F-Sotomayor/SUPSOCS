import React from "react";
import {
  Stack,
  Heading,
  Box,
  Text,
  Flex,
  Container,
  Button,
} from "@chakra-ui/core";

const Landing = () => (
  <Stack width="100%" height="125vh">
    <Heading
      width="100%"
      height={["45vh", "45vh", "25vh", "15vh"]}
      padding={[1, 2, 4, 6]}
      position={{ base: "relative", lg: "sticky" }}
      backgroundColor="white"
      zIndex={2}
    >
      <Flex
        width="100%"
        justifyContent={[
          "space-between",
          "space-between",
          "space-evenly",
          "space-between",
        ]}
        height="100%"
        alignItems={["center", "center", "center", "center"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box display="flex" flex={1} height="100%" alignItems="center">
          <Text padding={[2, 4, 6, 12]} fontSize={[36, 36, 24, 48]}>
            SUPS<span style={{ color: "#6495ED" }}>OCS</span>
          </Text>
        </Box>
        <Box
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
          height="100%"
          color="black"
          display="flex"
          flex={1.1}
          fontSize={18}
          justifyContent={[
            "center",
            "center",
            "space-between",
            "space-between",
          ]}
          paddingRight={[0, 0, 0, 12]}
          fontWeight={300}
        >
          <Box>
            <a href="#">SOBRE NOSOTROS</a>
          </Box>
          <Box>
            <a href="#">ESTATUTO</a>
          </Box>
          <Box>
            <a href="#">SERVICIOS AFILIADOS</a>
          </Box>
          <Box>
            <a href="#">COMISION DIRECTIVA</a>
          </Box>
        </Box>
      </Flex>
    </Heading>
    <Container
      padding={{ base: 2, lg: 6 }}
      height="100%"
      width="100%"
      backgroundColor="primary.600"
      maxWidth="100%"
      backgroundImage="url(bg3.jpg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex flex={1} height="100%" padding={6} marginTop={{ base: 4, lg: 16 }}>
        <Box
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            marginTop={{ base: 0, lg: -60 }}
            height={{ base: "100%", lg: "60%" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            textAlign="center"
            backgroundColor="rgba(0,50,75,0.7)"
            borderRadius={20}
            color="white"
            padding={6}
          >
            <Text fontSize={24} fontWeight={500} marginBottom={6}>
              Disfruta de nuestro servicio de afiliados con los siguientes
              beneficios:
            </Text>
            <Text fontSize={18}>Legalizacion del titulo y jura</Text>
            <Text fontSize={18}>Matricula Internacional</Text>
            <Text fontSize={18}>
              Capacitaciones (con certificados abalados por el Sindicato)
            </Text>
            <Text fontSize={18}>Obra Social y mas!</Text>
            <Button colorScheme="blue">CLICK ACA PARA AFILIARTE</Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Stack>
);

export default Landing;
