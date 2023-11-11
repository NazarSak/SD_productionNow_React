import styled from "styled-components";

export const TitleHThree = styled.h3`
  color: #50d13b;
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
  max-height: 514px;
`;

export const ParagraphAbProject = styled.p`
  width: 480px;
  color: var(--grey-C, #cfcfcf);
`;

export const ParagraphGoals = styled.p`
  width: 200px;
  color: var(--grey-C, #cfcfcf);
`;

export const List = styled.ul`
  display: flex;
  gap: 27px;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
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
`;
