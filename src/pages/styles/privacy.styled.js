import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleHThree = styled.h3`
  color: #50d13b;
`;

export const TitleHTwo = styled.h2`
  color: var(--02-dark-color-white, #fff);
`;

export const Container = styled.section`
  width: 1180px;
  margin-top: 48px;
  @media screen and (max-width: 1199px) {
    width: 672px;
    padding: 0 48px;
  }
  @media screen and (max-width: 767px) {
    width: 343px;
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  margin-top: 100px;
  @media screen and (max-width: 767px) {
    /* margin-top: 48px; */
  }
`;
export const Line = styled.div`
  width: 12px;
  height: 1px;
  background: #cfcfcf;
  position: absolute;
`;

export const Br = styled.br`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
export const TitleSpan = styled.span`
  font-family: "Poppins", sans-serif;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke: 1.5px #fff;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  color: var(--grey-C, #cfcfcf);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.4px;
  margin: 0;
`;

export const ParagraphLine = styled.p`
  color: var(--grey-C, #cfcfcf);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.4px;
  margin: 0;
  margin-left: 23px;
`;

export const ParagraphSpan = styled.span`
  color: #9a00d0;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.4px;
`;

export const ParagraphSpanWithUnderLine = styled.span`
  color: #9a00d0;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.4px;
  text-decoration: underline;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BackButton = styled(Link)`
  margin-top: 48px;
  color: var(--grey-C, #cfcfcf);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  gap: 8px;
  & p {
    margin: 0;
    padding: 0;
    transition: all 0.5s;
  }
  & svg {
    transition: all 0.5s;
  }
  path {
    transition: transform 0.5s, stroke 0.5s;
  }

  &:hover {
    & p {
      color: #bd00ff;
    }

    & svg path {
      transform: translateX(-5px);
      stroke: #bd00ff;

    }
  }
`;

export const BackButtonArrow = styled.img`
&:hover {
    & p {
      color: #bd00ff;
    }

    & svg path {
      transform: translateX(5px);
      stroke: #bd00ff;
    }
  }
`

export const FooterContainer = styled.div`
  margin-top: 100px;
`;

export const ArrowL = styled.img`
  width: 14px;
  height: 8px;
`;
