import React from "react";
import { Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container
      sx={{
        backgroundImage: `url("/ai-girl.png")`,
        backgroundSize: "10rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: 500,
      }}
    ></Container>
  );
};

export default Home;
