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

import Landing from "../screens/Landing";
import ServiceCard from "../components/ServiceCard";
import Team from "../screens/Team";

const Index = () => (
  <Stack direction="column">
    <Landing />
    <Stack width="100%" height="90vh">
      <About />
    </Stack>
    <Stack
      padding={6}
      width="100%"
      height="100vh"
      background="linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);"
    >
      <Heading width="100%" textAlign="center" color="white" marginTop={12}>
        Servicios Afiliados
      </Heading>
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <SimpleGrid width="100%" columns={3}>
          <ServiceCard
            imageSrc="bg.jpg"
            serviceName="Lorem ipsum dolor"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
          />
          <ServiceCard
            imageSrc="bg.jpg"
            serviceName="Lorem ipsum dolor"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
          />
          <ServiceCard
            imageSrc="bg.jpg"
            serviceName="Lorem ipsum dolor"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
          />
          <ServiceCard
            imageSrc="bg.jpg"
            serviceName="Lorem ipsum dolor"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
          />
          <ServiceCard
            imageSrc="bg.jpg"
            serviceName="Lorem ipsum dolor"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
          />
          <ServiceCard
            imageSrc="bg.jpg"
            serviceName="Lorem ipsum dolor"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
          />
        </SimpleGrid>
      </Box>
    </Stack>
    <Stack width="100%" height="auto">
      <Team />
    </Stack>
  </Stack>
);
export default Index;
