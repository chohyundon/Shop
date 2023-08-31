import React from "react";
import { styled } from "styled-components";
import { BsShopWindow, BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { useAuthContext } from "../context/AuthContext";

const Nav = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid;
  display: flex;
`;

const Title = styled.h1`
  color: #ff9b9b;
  font-size: 2rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;

const Products = styled.h3``;

const Carts = styled.h3``;

const Button = styled.h3``;

export default function Navbar() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuthContext();

  const handleHome = () => {
    navigate("/");
  };

  const handleProduct = () => {
    navigate("/products");
  };

  const handleCart = () => {
    navigate("/carts");
  };

  const handleNew = () => {
    navigate("/products/new");
  };

  return (
    <Nav>
      <Title onClick={handleHome}>
        <BsShopWindow />
        Shop
      </Title>
      <Content>
        <Products onClick={handleProduct}>Products</Products>
        {user && (
          <>
            <Carts onClick={handleCart}>Carts</Carts>
            <BsPencilFill onClick={handleNew} />
          </>
        )}
        {user && <Login user={user} />}
        {user && <Button onClick={logout}>Logout</Button>}
        {!user && <Button onClick={login}>Login</Button>}
      </Content>
    </Nav>
  );
}
