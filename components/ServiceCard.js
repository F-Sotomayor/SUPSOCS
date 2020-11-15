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
      <Image width="50%" height="100%" src={imageSrc} />
    </Box>
    <Box justifyContent="center" display="flex">
      <Text fontWeight={600} color="white" fontSize={24}>
        {serviceName}
      </Text>
    </Box>
    <Box justifyContent="center" display="flex">
      <Text fontSize={16} color="white" textAlign="center">
        {serviceDescription}
      </Text>
    </Box>
  </Flex>
);
export default ServiceCard;