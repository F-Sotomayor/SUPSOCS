import React from "react";
import { Box, Text, Heading, SimpleGrid } from "@chakra-ui/core";

import TeamCard from "../components/TeamCard";

const Team = () => (
  <Box width="100%" height="100%" display="flex" flexDirection="column">
    <Box
      marginTop={12}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      display="flex"
      flexDirection="column"
      height="15vh"
    >
      <Heading fontWeight={700}>Comision Directiva</Heading>
      <Text fontSize={20} color="rgba(0,0,0,0.6)">
        Conoce a nuestro equipo!
      </Text>
    </Box>
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      padding={8}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        width="100%"
        spacing={{ base: 16, lg: 10 }}
      >
        <TeamCard teamimage="julia.jpg" name="Julia Gomez" />
        <TeamCard teamimage="emma.jpg" name="Emma Zambaldi" />
        <TeamCard teamimage="viviana.jpg" name="Viviana Patrone" />
        <TeamCard teamimage="veronica.jpg" name="Veronica Martinez" />
        <TeamCard
          teamimage="juansebastianvidal.jpg"
          name="Juan Sebastian Vidal"
        />
        <TeamCard teamimage="adafanelli.jpg" name="Ada Fanelli" />
        <TeamCard
          teamimage="olgamarianabursik.jpg"
          name="Olga Mariana Bursik"
        />
        <TeamCard
          teamimage="stellamariscandia.jpg"
          name="Stella Maris Candia"
        />
        <TeamCard
          teamimage="hugodanielpietronave.jpg"
          name="Hugo Daniel Pietronave"
        />
        <TeamCard teamimage="graciela.jpg" name="Graciela Apellido" />
        <TeamCard teamimage="alejandro.jpg" name="Alejandro Apellido" />
        <TeamCard teamimage="celepereira.jpg" name="Cele Pereira" />
        <TeamCard teamimage="susansamora.jpg" name="Susana Zamora" />
        <TeamCard teamimage="gabysotto.jpg" name="Gabriela Sotto" />
      </SimpleGrid>
    </Box>
  </Box>
);

export default Team;
