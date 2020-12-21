import React from "react";
import {
  Stack,
  Heading,
  Box,
  SimpleGrid,
  Flex,
  Container,
  Button,
  Text,
} from "@chakra-ui/core";

import About from "../screens/About";
import Footer from "../components/Footer/Footer";

import Landing from "../screens/Landing";
import ServiceCard from "../components/ServiceCard";
import Team from "../screens/Team";
import Estatuo from "../screens/Estatuto";

const Index = () => {
  return (
    <Stack direction="column">
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
                <a href="#about" style={{ cursor: "pointer" }}>
                  SOBRE NOSOTROS
                </a>
              </Box>
              <Box>
                <a href="#estatuto" style={{ cursor: "pointer" }}>
                  ESTATUTO
                </a>
              </Box>
              <Box>
                <a href="#servicios" style={{ cursor: "pointer" }}>
                  SERVICIOS AFILIADOS
                </a>
              </Box>
              <Box>
                <a href="#comision" style={{ cursor: "pointer" }}>
                  COMISION DIRECTIVA
                </a>
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
          <Flex
            flex={1}
            height="100%"
            padding={6}
            marginTop={{ base: 4, lg: 16 }}
          >
            <Box
              display="flex"
              flex={1}
              justifyContent={{ base: "center", lg: "flex-end" }}
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
                <Button
                  colorScheme="blue"
                  onClick={(e) => (window.location = "form")}
                >
                  CLICK ACA PARA AFILIARTE
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Stack>
      <Stack width="100%" height="auto">
        <div id="about"></div>
        <About />
      </Stack>
      <Stack width="100%" height="auto">
        <div id="estatuto"></div>
        <Estatuo />
      </Stack>
      <div id="servicios"></div>
      <Stack
        padding={6}
        width="100%"
        height="auto"
        background="linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);"
      >
        <Heading
          width="100%"
          textAlign="center"
          color="white"
          marginTop={{ base: 6, lg: 12 }}
          marginBottom={{ base: 12, lg: 12 }}
        >
          Servicios Afiliados
        </Heading>
        <Box
          width="100%"
          height="auto"
          display="flex"
          justifyContent="center"
          marginBottom={12}
        >
          <SimpleGrid
            width="100%"
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 16, lg: 4 }}
          >
            <ServiceCard
              imageSrc="obrasocial.jpg"
              serviceName="Obra Social"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
            <ServiceCard
              imageSrc="turismo.png"
              serviceName="Turismo"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
            <ServiceCard
              imageSrc="capacitaciones.jpg"
              serviceName="Capacitaciones y Cursos"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
            <ServiceCard
              imageSrc="asesoramiento.jpg"
              serviceName="Asesoramiento Juridico"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
            <ServiceCard
              imageSrc="empleo.png"
              serviceName="Bolsa de Empleo"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
            <ServiceCard
              imageSrc="actividades.jpg"
              serviceName="Actividades culturales y recreativas"
              serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </SimpleGrid>
        </Box>
      </Stack>
      <Stack width="100%" height="auto">
        <div id="comision"></div>
        <Team />
      </Stack>
      <Footer />
    </Stack>
  );
};
export default Index;
