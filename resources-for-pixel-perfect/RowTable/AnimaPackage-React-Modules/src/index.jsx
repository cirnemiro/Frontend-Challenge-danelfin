import React from "react";
import ReactDOMClient from "react-dom/client";
import { RowTableScreen } from "./screens/RowTableScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RowTableScreen />);
