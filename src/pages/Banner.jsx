import React from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  background-color: black;
  color: whitesmoke;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export default function Banner() {
  return (
    <Box>
      <h2>Shop with Us</h2>
      <p>Best Products</p>
    </Box>
  );
}
