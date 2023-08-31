import React from "react";
import { styled } from "styled-components";

const Img = styled.img`
  width: 30px;
  border-radius: 50%;
`;

const Title = styled.h3`
  display: flex;
`;

export default function Login({ user: { photoURL, displayName } }) {
  return (
    <>
      <Img src={photoURL} alt={displayName}></Img>
      <Title>{displayName}</Title>
    </>
  );
}
