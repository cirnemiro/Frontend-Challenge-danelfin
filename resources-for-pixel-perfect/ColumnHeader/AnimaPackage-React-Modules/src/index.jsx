import React from "react";
import ReactDOMClient from "react-dom/client";
import { AiScoreScreen } from "./screens/AiScoreScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AiScoreScreen />);
