import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin-top: 276px;
`;

export const Button = styled(Link)`
  margin-top: 8px;
  display: flex;
  width: 207px;
  height: 24px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  color: var(--02-dark-color-white, #fff);

  font-family: Montserrat;

  border-radius: 1000px;
  background: linear-gradient(119deg, #bd00ff 21.38%, #3604c3 129.88%);
  transition: all 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;
