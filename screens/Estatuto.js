import React from "react";
import { Stack, Box, Button } from "@chakra-ui/core";

const Estatuto = () => (
  <Stack width="100%" height="auto" direction="column" padding={4}>
    <Box
      width="100%"
      textAlign="center"
      marginTop={12}
      fontSize={32}
      fontWeight={500}
    >
      Estatuo
    </Box>
    <Stack height="100%" width="100%" spacing={4} justify="center" padding={4}>
      <Box fontSize={24} fontWeight={500}>
        Nuestro sindicato tiene los siguientes fines y objetivos:
      </Box>
      <Box fontSize={18}>
        Fomentar la union, armonia, solidaridad, participacion y agrupamiento de
        todos los trabajadores de la Psicologia Social y carreras afines
      </Box>
      <Box fontSize={18}>
        Representar a los trabajadores de la actividad, al Sindicato y sus
        componentes en toda cuestion sea individual y colectiva; de carácter
        gremial, laboral, o social ante los organismos publicos o privados,
        cualquiera sea su naturaleza.
      </Box>
      <Box fontSize={18}>
        Peticionar a las autoridades nacionales, provinciales, municipales, o
        cualquier organismo nacional o internacional en beneficio de la entidad
        sindical.
      </Box>
      <Box fontSize={18}>
        Vigilar las condiciones de trabajo, el cumplimiento de las normas de
        seguridad e impulsar su mejoramiento y la legislacion en general.
      </Box>
      <Box fontSize={18}>
        Propiciar y concretar Convenios Colectivos, proponer proyectos de
        legislacionque determinan la mejora del sector tanto en las condiciones
        de trabajo, como en las relaciones laborales en general.
      </Box>
      <Box fontSize={18}>
        Fomentar la actividad gremial, el interes y la participacion de los
        trabajadores.
      </Box>
      <Box fontSize={18}>
        Realizar actividades culturales, sociales, incentivar la educacion,
        crear espacios de estudio y capacitacion para los trabajadores del
        sector.
      </Box>
      <Box width="100%" display="flex" justifyContent="center" marginTop={8}>
        <Button colorScheme="blue" width={225}>
          <a href="https://docdro.id/h7M7f4s" target="_blank">
            CLICK ACA PARA LEER MAS
          </a>
        </Button>
      </Box>
    </Stack>
  </Stack>
);
export default Estatuto;
