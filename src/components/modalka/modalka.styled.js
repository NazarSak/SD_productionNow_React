import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundCircle from "../../assets/img/backgroundCircle.png";


export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #000;
  display: flex;
  justify-content: center;
`; 

export const TitleHThree = styled.h3`
  color: #50d13b;
`;

export const TitleHTwo = styled.h2`
  color: var(--02-dark-color-white, #fff);
  font-weight: 700;
`;

export const TitleSpan = styled.span`
  font-family: "Poppins", sans-serif;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke: 1.5px #fff;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  width: 527px;
  color: #a1a1a1;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const Input = styled.input`
  display: flex;
  width: 495px;
  color: white;
  padding: 16px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--grey-C, #cfcfcf);
  background-color: transparent;
  outline: none;
`;

export const InputComment = styled.input`
  display: flex;
  width: 495px;
  color: white;
  padding: 16px 24px 100px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 26px;
  border: 1px solid var(--grey-C, #cfcfcf);
  background-color: transparent;
  outline: none;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 545px;
  height: 50px;
  padding: 12px var(--Spacing---2xl, 24px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 39px;
  background: var(
    --purple-linear,
    linear-gradient(90deg, #bd00ff -1.03%, #4200ff 98.22%)
  );
  color: var(--white, var(--02-dark-color-white, #fff));
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  margin-top: 32px;
`;

export const ImgContainer = styled.div`
  margin-top: 98px;
  background-image: url(${BackgroundCircle});
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;
  width: 800px;
  height: 800px;
`;

export const CloseButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: border-color 0.3s ease;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 2px solid var(--grey-B, #595959);
  position: absolute;
  top: 80px;
  margin-left: 1000px;
  &:hover {
    border-color: white;
  }
`;
