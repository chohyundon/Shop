import React from "react";
import Products from "./Products";
import Banner from "./Banner";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Banner />
      <Products />
    </div>
  );
}
