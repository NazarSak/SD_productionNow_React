import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleHThree = styled.h3`
  color: #4d83f0;
`;

export const TitleHTwo = styled.h2`
  color: var(--02-dark-color-white, #fff);
`;

export const TitlePage = styled.h2`
  color: var(--02-dark-color-white, #fff);
  @media screen and (max-width: 1199px) {
    font-size: 64px;
  }
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

export const TitleSpan = styled.span`
  font-family: "Poppins", sans-serif;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke: 1.5px #fff;
  font-weight: 600;
`;

export const AppTitle = styled.h2`
  color: var(--02-dark-color-white, #fff);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(-350px);
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media screen and (max-width: 767px) {
    width: max-content;
  }
`;

export const ImageFirst = styled.img`
  width: 100%;
  max-height: 583px;
  object-fit: cover;

  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
  }
`;

export const ImageFirstHandShake = styled.img`
  width: 100%;
  max-height: 583px;
  object-fit: cover;

  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
  }
`;

export const ParagraphAbProject = styled.p`
  width: 480px;
  color: var(--grey-C, #cfcfcf);
  @media screen and (max-width: 1199px) {
    width: 285px;
  }
`;

export const SvgImgContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 343px;
    display: flex;
    justify-content: center;
  }
`;

export const SvgImg = styled.img`
  @media screen and (max-width: 1199px) {
    width: 285px;
    height: 150px;
  }
  @media screen and (max-width: 767px) {
    width: 87px;
    height: 87px;
    margin-top: -30px;
    margin-bottom: -20px;
  }
`;

export const ParagraphGoals = styled.p`
  width: 200px;
  color: var(--grey-C, #cfcfcf);
  @media screen and (max-width: 1199px) {
    width: 227px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 27px;
  padding: 0;
  @media screen and (max-width: 1199px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    gap: 24px;
    justify-content: start;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1199px) {
    width: 320px;
  }
  @media screen and (max-width: 767px) {
    height: 78px;
  }
`;

export const NumberOfList = styled.span`
  text-align: center;
  font-family: Montserrat;
  font-size: 64px;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke: 1.5px #fff;
  font-weight: 600;
  margin-right: 16px;
  &:after {
    content: ".";
    text-align: center;
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    margin-left: 4px;
    line-height: normal;
    background: var(
      --purple-linear,
      linear-gradient(90deg, #bd00ff -1.03%, #4200ff 98.22%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: transparent;
  }
`;

export const ContainerLine = styled.div`
  @media screen and (max-width: 767px) {
    width: 343px;
    display: flex;
    justify-content: center;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 200px;
  background: radial-gradient(
    4979852.87% 58.76% at 50% 49.67%,
    rgba(163, 163, 163, 0.7) 0%,
    rgba(117, 117, 117, 0) 89.9%
  );
  @media screen and (max-width: 1199px) {
    width: 1px;
    height: 250px;
  }
  @media screen and (max-width: 767px) {
    width: 203px;
    height: 1px;
    background: radial-gradient(
      circle,
      rgba(163, 163, 163, 0.7) 0%,
      rgba(0, 0, 0, 0) 89.9%
    );
  }
`;
export const FirstConatinerInternalImg = styled.div`
  @media screen and (max-width: 767px) {
    width: 121px;
    margin-right: 39px;
  }
`;

export const SecondConatinerInternalImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  @media screen and (max-width: 1199px) {
    gap: 48px;
  }
  @media screen and (max-width: 767px) {
    gap: 32px;
  }
`;

export const InternalImgOne = styled.img`
  width: 490px;
  height: 2546px;
  flex-shrink: 0;
  border-radius: 40px;
  margin-top: 121px;
  border: 5px solid var(--grey-B, #595959);

  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(-350px);
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 2050px;
    border-radius: 40px;
    margin-top: 24px;
    border: 5px solid var(--grey-B, #595959);
  }
  @media screen and (max-width: 767px) {
    width: 121px;
    height: 803px;
    border-radius: 20px;
    border: 1px solid var(--grey-B, #595959);
  }
`;

export const InternalImgSecond = styled.img`
  width: 490px;
  height: 1020px;
  margin-top: 180px;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(-350px);
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 636px;
    margin-top: 48px;
  }
  @media screen and (max-width: 767px) {
    width: 121px;
    height: 259px;
    border-radius: 20px;
    border: 1px solid var(--grey-B, #595959);
  }
`;

export const InternalImgThree = styled.img`
  width: 490px;
  height: 1306px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(350px);
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 800px;
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
    width: 151px;
    height: 322px;
    margin-top: 85px;
    border-radius: 20px;
    border: 1px solid var(--grey-B, #595959);
  }
`;

export const InternalImgFour = styled.img`
  width: 490px;
  height: 976px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(350px);
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 705px;
  }
  @media screen and (max-width: 767px) {
    width: 151px;
    height: 386px;
    border-radius: 20px;
    border: 1px solid var(--grey-B, #595959);
  }
`;

export const InternalImgFive = styled.img`
  width: 490px;
  height: 1012px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  opacity: 0;
  transition: opacity 1.5s ease, transform 1.5s ease;
  transform: translateX(350px);
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 730px;
  }
  @media screen and (max-width: 767px) {
    width: 151px;
    height: 400px;
    border-radius: 20px;
    border: 1px solid var(--grey-B, #595959);
  }
`;

export const Arrow = styled.img`
  margin-top: 2px;
  width: 20px;
  height: 20px;
`;

export const LinkArrow = styled(Link)`
  display: flex;
  gap: 16px;
  text-decoration: auto;
  color: var(--grey-C, #cfcfcf);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
export const VideoContainer = styled.div`
  margin-top: 140px;
  width: 100%;
`;
