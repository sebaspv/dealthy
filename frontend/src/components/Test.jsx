// The worst way to do this

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoAuth from "./NoAuth";
import Loading from "./Loading";
import { Button, Text, Checkbox, Center } from "@mantine/core";
import { Link } from "wouter";

const Test = () => {
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState(0);
  let counter = 0;

  const handleClick = (pts) => {
    setLevel(level + pts);
    setStep(step + 1);
  };

  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <NoAuth />;

  return (
    <>
      {step === 1 && (
        <Center
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
          }}
        >
          <Text size="xl" align="center" weight={700}>
            Have you been in contact with a confirmed COVID patient?
          </Text>
          <article
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              color="pink"
              size="lg"
              onClick={() => handleClick(10)}
              style={{
                margin: "1rem",
              }}
            >
              Yes
            </Button>
            <Button
              color="pink"
              size="lg"
              onClick={() => handleClick(0)}
              style={{
                margin: "1rem",
              }}
            >
              No
            </Button>
          </article>
        </Center>
      )}
      {step === 2 && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Text size="xl" align="center" weight={700}>
            Have you had any of the following symptoms in the last 14 days?
          </Text>
          <Checkbox
            onClick={(e) => {
              counter += e.target.checked ? 10 : -10;
            }}
            label="severe difficulty breathing (e.g., struggling for each breath, speaking in single words)"
            color="pink"
            size="lg"
            style={{
              margin: "0.5rem",
            }}
          />
          <Checkbox
            onClick={(e) => {
              counter += e.target.checked ? 10 : -10;
            }}
            style={{
              margin: "0.5rem",
            }}
            label="severe chest pain"
            color="pink"
            size="lg"
          />
          <Checkbox
            onClick={(e) => {
              counter += e.target.checked ? 10 : -10;
            }}
            style={{
              margin: "0.5rem",
            }}
            label="lost consciousness"
            color="pink"
            size="lg"
          />
          <Checkbox
            onClick={(e) => {
              counter += e.target.checked ? 5 : -5;
            }}
            style={{
              margin: "0.5rem",
            }}
            label="fever"
            color="pink"
            size="lg"
          />
          <Checkbox
            onClick={(e) => {
              counter += e.target.checked ? 5 : -5;
            }}
            style={{
              margin: "0.5rem",
            }}
            label="cough"
            color="pink"
            size="lg"
          />
          <Checkbox
            onClick={(e) => {
              counter += e.target.checked ? 5 : -5;
            }}
            style={{
              margin: "0.5rem",
            }}
            label="difficulty breathing"
            color="pink"
            size="lg"
          />

          <Button onClick={() => handleClick(counter)} color="pink">
            Get results
          </Button>
        </section>
      )}
      {step === 3 && (
        <section
          style={{
            padding: "2rem",
          }}
        >
          {level > 19 && (
            <Center
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text size="xl" align="center" weight={700}>
                Your have a high risk of COVID-19. Please get isolated and
                contact your doctor.
              </Text>
              <Link href="/covid/map">
                <Button component="a" color="pink">
                  Report your covid status
                </Button>
              </Link>
            </Center>
          )}
          {level > 9 && level < 20 && (
            <Center
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text size="xl" align="center" weight={700}>
                Your have a moderate risk of COVID-19. Please get isolated and
                get a covid test.
              </Text>
              <Link href="/covid/map">
                <Button component="a" color="pink">
                  Report your covid status
                </Button>
              </Link>
            </Center>
          )}
          {level < 10 && (
            <Center
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text size="xl" align="center" weight={700}>
                Your have a low risk of COVID-19. Contact your doctor for more
                information.
              </Text>
              <Link href="/covid/map">
                <Button component="a" color="pink">
                  Report your covid status
                </Button>
              </Link>
            </Center>
          )}
        </section>
      )}
    </>
  );
};

export default Test;
