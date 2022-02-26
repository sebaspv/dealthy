import React from "react";
import { Text, Center, Button } from "@mantine/core";
import { Link } from "wouter";
import hero from "../hero.png";

const Welcome = () => {
  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15px",
      }}
    >
      <img
        src={hero}
        alt="hero"
        width={270}
        style={{
          marginBottom: "2rem",
        }}
      />
      <Text align="center" weight={700} size="xl">
        Professional medic help in your home
      </Text>
      <Text align="center" size="lg">
        Develop better habits, seek information, report your symptoms and let's
        take care of each other.
      </Text>
      <Link href="/covid">
        {" "}
        <Button
          size="md"
          style={{
            marginTop: "1rem",
          }}
          color="pink"
          component="a"
        >
          Get started
        </Button>
      </Link>
    </Center>
  );
};

export default Welcome;
