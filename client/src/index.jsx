// Bring React in to build a component. 
import React from "react";
import App from "./components/App.jsx";

// Bring reactDOM in to mount component to the dom.
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

root.render(<App />);