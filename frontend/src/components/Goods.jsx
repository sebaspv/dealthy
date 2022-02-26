import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoAuth from "./NoAuth";
import Loading from "./Loading";
import { Button, Text } from "@mantine/core";

const Goods = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <NoAuth />;

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text size="xl" weight={700}>
        Good habits
      </Text>
      <img src="/water.png" alt="water" width={280} />
      <Text size="xl" weight={700}>
        Drink 2L of water daily
      </Text>
      <Button color="pink">Remind me to drink water</Button>
    </section>
  );
};

export default Goods;
