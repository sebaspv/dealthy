import React from "react";
import { Link } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";
import NoAuth from "./NoAuth";
import Loading from "./Loading";

const Data = ({ title, url, emoji }) => {
  return (
    <Link href={url}>
      <a style={{
          color: "black",
          textDecoration: "none",
      }}>
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
          <h2>{title}</h2>
          <p
            style={{
              fontSize: "2.5rem",
            }}
          >
            {emoji}
          </p>
        </article>
      </a>
    </Link>
  );
};

const Tools = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <Loading />;

  if (!isAuthenticated) return <NoAuth />;

  return (
    <>
      <Data url="/tools/test" title="COVID-19 online test" emoji="🦠" />
      <Data url="/tools/good" title="Develop good habits" emoji="🌞" />
      <Data url="/tools/checker" title="Look your symptoms" emoji="🔍" />
    </>
  );
};

export default Tools;
