import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";
import { Link } from "wouter";
import logo from "../logo.svg";

const Header = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: "1px solid rgb(204 204 204 / 31%)",
        paddingBottom: "1rem",
        padding: "5px",
        height: "15vh",
      }}
    >
      <Link href="/">
        <a>
          <img src={logo} height={70} width={60} />
        </a>
      </Link>
      <Button
        size="lg"
        color="pink"
        onClick={() => (isAuthenticated ? logout() : loginWithPopup())}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </Button>
    </header>
  );
};

export default Header;
