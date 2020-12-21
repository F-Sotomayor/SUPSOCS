import React from "react";
import { Stack, Flex, Box } from "@chakra-ui/core";
import { database } from "../firebase";
import "firebase/firestore";

const AdminPage = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    database
      .collection("users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setUsers((users) => users.concat(doc.data()));
        });
      });
  }, []);
  return (
    <Stack w="100%" h="auto" minHeight="100vh" padding={4}>
      <Flex direction="column" w="100%">
        <Box display="flex" w="100%" direction="row" marginBottom={2} h="10vh">
          <Box display="flex" flex={0.2} alignItems="center">
            Nombre
          </Box>
          <Box display="flex" flex={0.2} alignItems="center">
            Apellido
          </Box>
          <Box display="flex" flex={0.2} alignItems="center">
            Email
          </Box>
          <Box display="flex" flex={0.2} alignItems="center">
            DNI
          </Box>
          <Box display="flex" flex={0.2} alignItems="center">
            Oficio
          </Box>
        </Box>
        {users.map((user) => {
          return (
            <>
              <Box
                display="flex"
                w="100%"
                marginBottom={2}
                textTransform="capitalize"
              >
                <Box display="flex" flex={0.2}>
                  {user.name}
                </Box>
                <Box display="flex" flex={0.2}>
                  {user.lastname}
                </Box>
                <Box display="flex" flex={0.2}>
                  {user.email}
                </Box>
                <Box display="flex" flex={0.2}>
                  {user.dni}
                </Box>
                <Box display="flex" flex={0.2}>
                  {user.oficio}
                </Box>
              </Box>
            </>
          );
        })}
      </Flex>
    </Stack>
  );
};
export default AdminPage;
