import React from "react";
import ErorImg from "../../assets/img/notFound/eror.png";
import { HeaderEN } from "../../components/header/HeaderEN";
import { Container, Button,Img } from "./notFound.styled";

const NotFound = () => {
  return (
    <>
      <HeaderEN name="/de/*" />
      <Container>
        <Img src={ErorImg} alt="ErorImg" />
        <Button to="/">Back to main</Button>
      </Container>
    </>
  );
};

export default NotFound;
