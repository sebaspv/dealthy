import React from "react";
import useSWR from "swr";
import { Link } from "wouter";
import { Text } from "@mantine/core";
import Loading from "./Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Data = ({ title, content, emoji }) => {
  return (
    <article
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "15px",
      }}
    >
      <article>
        <h2>{title}</h2>
        <p>{parseInt(content).toLocaleString()}</p>
      </article>
      <p
        style={{
          fontSize: "2.5rem",
        }}
      >
        {emoji}
      </p>
    </article>
  );
};

const Covid = () => {
  const { data } = useSWR("https://corona.lmao.ninja/v2/all", fetcher);

  if (!data) return <Loading />;

  return (
    <section>
      <Link href="/covid/map">
        <a
          style={{
            color: "black",
          }}
        >
          <article
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#eee",
              padding: "2rem",
              margin: "1rem",
              borderRadius: "15px",
            }}
          >
            <h1
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                margin: "0",
              }}
            >
              Discover COVID cases in your zone
            </h1>
            <svg width="24" height="24">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </article>
        </a>
      </Link>
      <Data emoji={"😷"} title={"Total cases"} content={data.cases} />
      <Data emoji={"😆"} title={"Recovered cases"} content={data.recovered} />
      <Data emoji={"☠️"} title={"Deaths"} content={data.deaths} />
    </section>
  );
};

export default Covid;
