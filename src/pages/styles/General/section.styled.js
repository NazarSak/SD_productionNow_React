import styled from "styled-components";

export const FirstSection = styled.section`
  margin-top: 49px;
  margin-bottom: 72px;

  @media screen and (max-width: 1199px) {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
export const SecondSection = styled.section`
  margin-top: 122px;
  margin-bottom: 144px;
  display: flex;
  align-items: center;
  gap: 113px;

  @media screen and (max-width: 1199px) {
    gap: 50px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 48px;
    margin-bottom: 36px;
    flex-direction: column-reverse;
    gap: 24px;
    align-items: start;
  }
`;

export const ThirdSection = styled.section`
  margin-bottom: 144px;
  @media screen and (max-width: 1199px) {
    margin-bottom: 120px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
`;

export const FourthSection = styled.section`
  margin: 132px 0;
  @media screen and (max-width: 1199px) {
    margin-bottom: 120px;
  }
  @media screen and (max-width: 767px) {
    margin: 48px 0;
  }
`;

export const FifthSection = styled.section`
  margin-top: 136px;
  display: flex;
  gap: 180px;
  @media screen and (max-width: 1199px) {
    gap: 48px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 48px;
    gap: 28px;
    justify-content: center;
  }
`;

export const SixthSection = styled.section`
  margin-top: 140px;
  margin-bottom: 300px;
  display: flex;
  width: 940px;
  padding: 10px 120px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 40px;
  background: #181818;
  align-items: center;

  @media screen and (max-width: 1199px) {
    width: 672px;
    padding: 10px var(--Spacing---xl, 16px);
  }
  @media screen and (max-width: 767px) {
    margin-top: 48px;
    width: 343px;
  }
`;
