import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import NoAuth from "./NoAuth";
import useSWR from "swr";
import {
  Modal,
  Alert,
  Textarea,
  Select,
  Input,
  InputWrapper,
  Button,
  Card,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useLocation } from "wouter";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Results = () => {
  const { data } = useSWR(
    `https://medisearch.deta.dev/get_illness${window.location.search}`,
    fetcher
  );

  if (!data) return <Loading />;

  return (
    <>
      <section
        style={{
          margin: "20px auto",
          fontFamily: "sans-serif",
        }}
      >
        {data.emergency && (
          <Alert
            title="You need to go to emergencies!"
            color="red"
            variant="filled"
            style={{
              width: "60%",
              minWidth: "300px",
              margin: "20px auto",
            }}
          >
            Your current diagnosis tells us you might need to get emergency
            attention.
          </Alert>
        )}
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          You might have
        </p>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {data.illnesses[0].name}
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",

            fontWeight: "bold",
          }}
        >
          You need to go to a {data.specialist.name}
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {data.illnesses[0].description}
        </p>
      </section>
    </>
  );
};

const Checker = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [ready, setReady] = useState(false);
  const [location, setLocation] = useLocation();

  const form = useForm({
    initialValues: {
      prompt: "",
      sex: "",
      age: 1,
    },
  });

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <NoAuth />;

  if (!ready)
    return (
      <form
        onSubmit={form.onSubmit((values) => {
          setLocation(
            `/tools/checker?prompt=${values.prompt}&sex=${values.sex}&age=${values.age}`
          );
          setReady(true);
        })}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px auto",
        }}
      >
        <Textarea
          placeholder="Describe your symptoms and how you feel"
          label="Describe how you feel"
          description="Describe your symptoms and how you feel"
          size="md"
          required
          style={{
            margin: "20px",
          }}
          {...form.getInputProps("prompt")}
        />
        <Select
          transition="pop-top-left"
          transitionDuration={200}
          transitionTimingFunction="ease"
          placeholder="Select your sex"
          label="What is your sex?"
          description="We need this for the most accurate results"
          size="md"
          required
          data={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          style={{
            margin: "20px",
          }}
          {...form.getInputProps("sex", { type: "select" })}
        />
        <InputWrapper
          style={{
            margin: "20px",
          }}
          id="input-age"
          required
          label="Your age"
          description="Your age help us to determinate your possible illness"
          size="md"
        >
          <Input
            id="input-age"
            {...form.getInputProps("age", { type: "number" })}
            placeholder="Your age"
            size="md"
          />
        </InputWrapper>
        <Button
          type="submit"
          color="red"
          size="md"
          style={{
            margin: "0 auto",
          }}
        >
          Search
        </Button>
      </form>
    );

  return <Results />;
};

export default Checker;
