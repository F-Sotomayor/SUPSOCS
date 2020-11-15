import React from "react";
import { Flex, Text, Image } from "@chakra-ui/core";

const TeamCard = ({ teamimage, name }) => (
  <Flex direction="column" alignItems="center">
    <Image width={250} height={250} src={teamimage} borderRadius={20} />
    <Text marginTop={4} fontSize={20}>
      {name}
    </Text>
  </Flex>
);

export default TeamCard;
