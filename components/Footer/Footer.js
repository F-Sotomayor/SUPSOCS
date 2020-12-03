import React from "react";
import { Stack, Text, Box, Flex, Image } from "@chakra-ui/core";

function Footer() {
  return (
    <Stack
      width="100%"
      height={{ base: "50vh", lg: "25vh" }}
      backgroundColor="blue.800"
      padding={4}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Flex
        width="100%"
        justify="flex-start"
        alignItems="center"
        height="100%"
        direction="column"
      >
        <Text color="white" fontSize={24}>
          Contactanos!
        </Text>
        <Box display="flex" marginTop={4}>
          <a href="tel:123-456">
            <Image src="phone.png" width={16} height={16} marginRight={8} />
          </a>
          <a href="mailto:example@example.com?Subject=Contact%SUPSOCS">
            <Image src="email.png" width={16} height={16} />
          </a>
        </Box>
      </Flex>
      <Flex
        width="100%"
        justify="flex-start"
        alignItems="center"
        height="100%"
        direction="column"
      >
        <Text color="white" fontSize={24}>
          Revisa nuestras redes sociales!
        </Text>
        <Box display="flex" marginTop={4}>
          <a href="instagram.com">
            <Image src="instagram.png" width={16} height={16} marginRight={8} />
          </a>
          <a href="facebook.com">
            <Image src="facebook.png" width={16} height={16} marginRight={8} />
          </a>
          <a href="twitter.com">
            <Image src="twitter.png" width={16} height={16} />
          </a>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Footer;
