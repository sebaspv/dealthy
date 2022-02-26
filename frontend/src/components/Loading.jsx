import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <section
      style={{
        display: "flex",
      }}
    >
      <Loader
        style={{
          margin: "0 auto",
        }}
        color="pink"
        size="xl"
      />
    </section>
  );
};

export default Loading;
