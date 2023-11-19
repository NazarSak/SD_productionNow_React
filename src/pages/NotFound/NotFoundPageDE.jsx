import React from "react";
import ErorImg from "../../assets/img/notFound/eror.png";
import { HeaderDE } from "../../components/header/HeaderDE";
import { Container, Button } from "./notFound.styled";

const NotFoundDE = () => {
  return (
    <>
      <HeaderDE name='/*'/>
      <Container>
        <img src={ErorImg} alt="ErorImg" />
        <Button to="/de">Zurück zum Thema</Button>
      </Container>
    </>
  );
};

export default NotFoundDE;
