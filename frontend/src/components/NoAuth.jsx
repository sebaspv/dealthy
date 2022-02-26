import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center, Text } from "@mantine/core";

const NoAuth = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <Center
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text align="center" weight={700} size="xl">
        You need to be authenticated to use this
      </Text>
      <Button size="lg" color="pink" onClick={() => loginWithPopup()}>Login</Button>
    </Center>
  );
};

export default NoAuth;
