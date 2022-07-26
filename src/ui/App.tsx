import React from "react";
import "./App.css";
import { useSocketSubscriptions } from "./common/hooks";
import { Box, Container } from "@mui/material";
import { Chat } from "./modules";
import { Route, Routes } from "react-router-dom";

export function App() {
  useSocketSubscriptions();

  return (
    <div className="App">
      <Box height={"60px"} bgcolor={"primary"}>
        <Container fixed></Container>
      </Box>
      <Box mt={4}>
        <Container maxWidth="sm">
          <Routes>
            <Route index element={<Chat />} />
          </Routes>
        </Container>
      </Box>
    </div>
  );
}
