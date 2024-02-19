import React from "react";

import { RouterProvider } from "react-router-dom";

import "./App.css";
import router from "./routes/Routes";
import CombineProviders from "./globalContext/index";

function App() {
  return (
    <CombineProviders>
      <RouterProvider router={router} />{" "}
    </CombineProviders>
  );
}

export default App;
