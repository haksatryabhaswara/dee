import React from "react";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1 class="fade-in-text" style={{ fontSize: "3.5rem" }}>
          Hi, congrats you can clone me! 💮
        </h1>
        <h3
          class="fade-in-text1"
          style={{ marginTop: "-1.25rem", color: "gray" }}
        >
          From: Haksa Ganteng 😎
        </h3>
        <h3
          class="fade-in-text2"
          style={{ marginTop: "-0.75rem", color: "gray" }}
        >
          To: You who read this message 😁
        </h3>
      </div>
    </div>
  );
}

