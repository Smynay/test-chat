import React from "react";
import "./App.css";
import { useSocketSubscriptions } from "./common/hooks";
import { Box, Container } from "@mui/material";
import { Auth, Chat } from "./modules";
import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/organisms";

export function App() {
  useSocketSubscriptions();

  return (
    <div className="App">
      <AppHeader />
      <Box mt={4}>
        <Container maxWidth="sm">
          <Routes>
            <Route index element={<Auth />} />
            <Route path={"chat"} element={<Chat />} />
          </Routes>
        </Container>
      </Box>
    </div>
  );
}
