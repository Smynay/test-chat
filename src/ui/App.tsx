import React from "react";
import "./App.css";
import { useSocketSubscriptions } from "./common/hooks";
import { Box, Container } from "@mui/material";
import { Chat } from "./modules";

export function App() {
  useSocketSubscriptions();

  return (
    <div className="App">
      <Box height={"60px"} bgcolor={"primary"}>
        <Container fixed></Container>
      </Box>
      <Container maxWidth="sm">
        <Box my={4} maxWidth="100%" overflow={"auto"}>
          <Chat />
        </Box>
      </Container>
    </div>
  );
}
