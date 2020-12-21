import React from "react";
import { Stack, Text, Heading, Input, Button } from "@chakra-ui/core";
import { database } from "../firebase";
import "firebase/firestore";

const Suscribe = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dni, setDni] = React.useState(0);
  const [job, setJob] = React.useState("");
  const [mail, setMail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    database.collection("users").doc().set({
      name: name,
      lastName: lastName,
      oficio: job,
      dni: dni,
      email: mail,
    });
    window.location = "http://mpago.la/17auKct";
    setName("");
    setLastName("");
    setDni("");
    setJob("");
    setMail("");
  }
  return (
    <Stack padding={8} height="auto" minHeight="100vh">
      <Heading display="flex" justifyContent="center" marginBottom={8}>
        Llene los siguientes datos para sucribirse a nuestro sistema!
      </Heading>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text marginY={4} fontWeight={500}>
          Nombre:
        </Text>
        <Input
          type="text"
          value={name}
          w="300px"
          placeholder="Ingrese su nombre..."
          onChange={(event) => setName(event.target.value)}
        />
        <Text marginY={4} fontWeight={500}>
          Apellido:
        </Text>
        <Input
          value={lastName}
          type="text"
          w="300px"
          placeholder="Ingrese su apellido..."
          onChange={(event) => setLastName(event.target.value)}
        />
        <Text marginY={4} fontWeight={500}>
          Email:
        </Text>
        <Input
          value={mail}
          type="text"
          w="300px"
          placeholder="Ingrese su mail..."
          onChange={(event) => setMail(event.target.value)}
        />
        <Text marginY={4} fontWeight={500}>
          DNI:
        </Text>
        <Input
          type="number"
          value={dni}
          w="300px"
          placeholder="Ingrese su DNI..."
          onChange={(event) => setDni(event.target.value)}
        />
        <Text marginY={4} fontWeight={500}>
          Oficio/Profesion:
        </Text>
        <Input
          value={job}
          type="text"
          w="300px"
          placeholder="Ingrese su oficio/profesion..."
          onChange={(event) => setJob(event.target.value)}
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          colorScheme="blue"
          letterSpacing={2}
          marginTop={8}
          w="200px"
        >
          Afiliarse!
        </Button>
      </form>
    </Stack>
  );
};

export default Suscribe;
