import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./src/App.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: [0, 0.14, 1] }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
