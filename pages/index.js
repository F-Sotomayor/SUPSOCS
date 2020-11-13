  import React from "react";
  import {Text, Stack, Heading, Box, Flex, Container, Button, Image, SimpleGrid} from "@chakra-ui/core"
  
  const Landing = () => 
  <Stack>
  <Stack width="100%" height="125vh">
    <Heading width="100%" height={["45vh", "45vh", "25vh", "15vh"]} padding={[1,2,4,6]} position="fixed" backgroundColor="white" zIndex={2}  > 
  <Flex width="100%" justifyContent={["space-between", "space-between", "space-evenly","space-between"]} height="100%" alignItems={["center", "center", "center", "center"]} flexDirection={["column", "column", "column", "row"]} >
    <Box display="flex" flex={1} height="100%" alignItems="center">
      <Text padding={[2,4,6,12]} fontSize={[36,36,24,48]}>SUPS<span style={{color: "#6495ED"}}>OCS</span></Text>
    </Box>
    <Box flexDirection={["column", "column", "column", "row"]} alignItems="center" height="100%" color="black" display="flex" flex={1.10} fontSize={18} justifyContent={["center", "center", "space-between","space-between"]} paddingRight={[0,0,0,12]} fontWeight={300}>
      <Box><a href="#">SOBRE NOSOTROS</a></Box>
      <Box><a href="#">ESTATUTO</a></Box>
      <Box><a href="#">SERVICIOS AFILIADOS</a></Box>
      <Box><a href="#">COMISION DIRECTIVA</a></Box>
    </Box>
  </Flex>
    </Heading>
    <Container padding={6} height="100%" width="100%" backgroundColor="primary.600" maxWidth="100" backgroundImage="url(bg.jpg)" backgroundRepeat="no-repeat" backgroundSize="cover">
  <Heading width="100%" textAlign="center" marginTop={16} color="white" >
    <Box >
    <Text lineHeight={1.5} fontSize={50} marginTop={24}>SINDICATO UNIDO DE PSICOLOGOS SOCIALES Y OPERADORES COMUNITARIOS DE LA SALUD MENTAL</Text>
    </Box>
    <Box marginTop={12}>
      <Text>Afiliate a nuestro sindicato y disfruta de los siguientes beneficios:</Text>
    </Box>
    <Box marginTop={16} fontSize={24} textAlign="left" display="flex" flexDirection="column" alignItems="center">
    <Text>Legalizacion del titulo y jura</Text>
    <Text>Matricula Internacional</Text>
    <Text>Capacitaciones (con certificados abalados por el Sindicato)</Text>
    <Text>Obra Social y mas!</Text>
    </Box>
  </Heading>
  <Box width="100%" display="flex" justifyContent="center"
  alignItems="center" height={100}>
  <Button colorScheme="blue" size="lg">
  CLICK ACA PARA AFILIARTE!
  </Button>
  </Box>
    </Container>
  </Stack>
  <Stack width="100%" height="90vh">
  <Flex width="100%" height="100%" padding={12}>
    <Box flex={1} justifyItems="center">
      <Image src="about.jpg" height="90%"/>
    </Box>
    <Box flex={1} display="flex" flexDirection="column">
      <Box width={220}><Text fontSize={24} fontWeight={700} borderBottom="2px solid" borderColor="primary.300" marginBottom={12}>SOBRE NOSOTROS</Text></Box>
      <Box><Text>Somos un grupo de trabajadores de la psicologia social y otros ambitos relacionados con la salud mental (Operadores Socio Terapeuticos, Acompañantes Terapeuticos, Operadores Comunitarios, Sociólogos y Terapistas) 
        que decidimos crear un sindicato con el fin de defender nuestros derechos laborales, 
        propiciando condiciones optimas que nos permitan desarrollar nuestra labor sin ningun tipo 
        de incoveniente. Tenemos como objetivo principal, jerarquizar nuestra profesion brindando a 
        nuestros afiliados todo tipo de beneficios que sirvan para dignificarlos.</Text></Box>
        <Box marginTop={12}>
      <Text fontSize={24} fontWeight={600}>Porque elegirnos a nosotros?</Text>
      <SimpleGrid columns={2} marginTop={6} spacing={2}>
  <Box><Text>Razon Numero 1</Text></Box>
  <Box><Text>Razon Numero 1</Text></Box>
  <Box><Text>Razon Numero 1</Text></Box>
  <Box><Text>Razon Numero 1</Text></Box>
  <Box><Text>Razon Numero 1</Text></Box>
  <Box><Text>Razon Numero 1</Text></Box>
      </SimpleGrid>
    </Box>
    </Box>
  </Flex>
  </Stack>
  </Stack>
  export default Landing;
  