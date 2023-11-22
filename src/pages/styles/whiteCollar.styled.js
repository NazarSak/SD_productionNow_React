import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleHThree = styled.h3`
  color: #fc7158;
`;

export const TitlePage = styled.h2`
  color: var(--02-dark-color-white, #fff);
  @media screen and (max-width: 1199px) {
    text-align: center;
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export const TitleHTwo = styled.h2`
  color: var(--02-dark-color-white, #fff);
`;

export const TitleSpan = styled.span`
  font-family: "Poppins", sans-serif;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke: 1.5px #fff;
  font-weight: 600;
`;

export const ImageFirst = styled.img`
  width: 100%;
  max-height: 583px;
  object-fit: cover;
`;

export const ParagraphAbProject = styled.p`
  width: 480px;
  color: var(--grey-C, #cfcfcf);
  @media screen and (max-width: 1199px) {
    width: 285px;
  }
`;

export const SvgImg = styled.img`
  @media screen and (max-width: 1199px) {
    width: 285px;
    height: 80px;
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
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1199px) {
    width: 320px;
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
`;

export const NaturalFoodImg = styled.img`
  width: 1160px;
  height: 677px;
  margin-top: 56px;
  margin-bottom: -4px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 10px solid var(--grey-B, #595959);

  @media screen and (max-width: 1199px) {
    width: 672px;
    height: 350px;
    border-radius: 40px;
    border: 5px solid var(--grey-B, #595959);
  }
`;

export const SecondNaturalFoodImg = styled.img`
  width: 815px;
  height: 4116px;
  flex-shrink: 0;
  border-radius: 0px 0px 40px 40px;

  @media screen and (max-width: 1199px) {
    width: 464px;
    height: 2160px;
    border-radius: 0px 0px 40px 40px;
  }
`;

export const ConatinerImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FirstConatinerInternalImg = styled.div``;

export const SecondConatinerInternalImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
  @media screen and (max-width: 1199px) {
    gap: 48px;
  }
`;

export const InternalImgOne = styled.img`
  width: 490px;
  height: 875px;
  flex-shrink: 0;
  border-radius: 40px;
  margin-top: 121px;
  border: 5px solid var(--grey-B, #595959);
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 611.52px;
    border-radius: 40px;
    margin-top: 24px;
    border: 5px solid var(--grey-B, #595959);
  }
`;

export const InternalImgSecond = styled.img`
  width: 490px;
  height: 1020px;
  flex-shrink: 0;
  margin-top: 180px;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 636px;
    margin-top: 48px;
  }
`;

export const InternalImgThree = styled.img`
  width: 490px;
  height: 1306px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 800px;
    margin-top: 80px;
  }
`;

export const InternalImgFour = styled.img`
  width: 490px;
  height: 435px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 283px;
  }
`;

export const InternalImgFive = styled.img`
  width: 490px;
  height: 682px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  @media screen and (max-width: 1199px) {
    width: 302px;
    height: 418px;
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