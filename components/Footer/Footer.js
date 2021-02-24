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
      marginTop={0}
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
            <Image
              src="https://icongr.am/material/phone.svg?size=128&color=ababab"
              width={16}
              height={16}
              marginRight={8}
            />
          </a>
          <a href="mailto:example@example.com?Subject=Contact%SUPSOCS">
            <Image
              src="https://icongr.am/material/email-outline.svg?size=128&color=ababab"
              width={16}
              height={16}
            />
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
            <Image
              src="https://icongr.am/material/instagram.svg?size=128&color=ababab"
              width={16}
              height={16}
              marginRight={8}
            />
          </a>
          <a href="facebook.com">
            <Image
              src="https://icongr.am/material/facebook.svg?size=128&color=ababab"
              width={16}
              height={16}
              marginRight={8}
            />
          </a>
          <a href="twitter.com">
            <Image
              src="https://icongr.am/material/twitter.svg?size=128&color=ababab"
              width={16}
              height={16}
            />
          </a>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Footer;
