import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Feed } from "./Feed";
import { Controller } from "./Controller";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <main>
      <CssBaseline />
      <Header />
      <Feed />
      <Controller />
    </main>
  );
};

export default App;
