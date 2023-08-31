import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, description, category, price },
    },
  } = useLocation();

  return <div>ProductDetail</div>;
}
