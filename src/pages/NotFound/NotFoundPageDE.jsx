import React from "react";
import ErorImg from "../../assets/img/notFound/eror.png";
import { HeaderDE } from "../../components/header/HeaderDE";
import { Container, Button, Img } from "./notFound.styled";

const NotFoundDE = () => {
  return (
    <>
      <HeaderDE name="/*" />
      <Container>
        <Img src={ErorImg} alt="ErorImg" />
        <Button to="/de">Zurück zum Thema</Button>
      </Container>
    </>
  );
};

export default NotFoundDE;
