import React from "react";
import {
  Text,
  Stack,
  Heading,
  Box,
  Flex,
  Container,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/core";

import About from "../screens/About";
import Footer from "../components/Footer/Footer";

import Landing from "../screens/Landing";
import ServiceCard from "../components/ServiceCard";
import Team from "../screens/Team";
import Estatuo from "../screens/Estatuto";

const Index = () => (
  <Stack direction="column">
    <Landing />
    <Stack width="100%" height="auto">
      <About />
    </Stack>
    <Stack width="100%" height="auto">
      <Estatuo />
    </Stack>
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
      <Team />
    </Stack>
    <Footer />
  </Stack>
);
export default Index;
