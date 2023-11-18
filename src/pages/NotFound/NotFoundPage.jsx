import React from "react";
import ErorImg from "../../assets/img/notFound/eror.png";
import { Container,Button } from "./notFound.styled";

const NotFound = () => {
  return (
    <Container>
      <img src={ErorImg} alt="ErorImg" />
      <Button to='/'>Back to main</Button>
    </Container>
  );
};

export default NotFound;
