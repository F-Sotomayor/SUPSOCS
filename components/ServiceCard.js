import React from "react";

import { Flex, Box, Image, Text } from "@chakra-ui/core";

const ServiceCard = ({ serviceName, serviceDescription, imageSrc }) => (
  <Flex
    direction="column"
    justifyContent="space-evenly"
    alignItems="center"
    padding={4}
  >
    <Box justifyContent="center" display="flex">
      <Image width={225} height={128} src={imageSrc} borderRadius={50} />
    </Box>
    <Box justifyContent="center" display="flex">
      <Text fontWeight={600} color="white" fontSize={24} marginTop={2}>
        {serviceName}
      </Text>
    </Box>
    <Box justifyContent="center" display="flex"></Box>
  </Flex>
);
export default ServiceCard;
