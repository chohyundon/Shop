import React from "react";
import { getData } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { styled } from "styled-components";

const Box = styled.div`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export default function Products() {
  const { isLoading, error, data: products } = useQuery(["products"], getData);
  return (
    <Box>
      {isLoading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Box>
  );
}
