import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export default function ProductCard({
  product,
  product: { id, title, price, image },
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <Box key={id} onClick={handleClick}>
      <img src={image} style={{ width: "25  0px", height: "300px" }} />
      <h3>{title}</h3>
      <p>{price + "원"}</p>
    </Box>
  );
}
