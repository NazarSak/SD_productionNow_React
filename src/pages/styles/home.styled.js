import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const sectionHeroAnimation = keyframes`
  0% {
		margin-left: 400px;

  }
  100% {
		margin-left: 300px;
  }
`;

export const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    margin-top: -15px;
    margin-left: 350px;
    content: "";
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 75px;
    border: 1.5px solid #fff;
    background: rgba(217, 217, 217, 0.2);
    backdrop-filter: blur(10px);
    animation: 2s ease-in-out 2s infinite alternate ${sectionHeroAnimation};
  }
  @media screen and (max-width: 767px) {
    position: relative;
    overflow: hidden;
    &::before {
      width: 48px;
      height: 48px;
      margin-top: -227px;
      margin-right: 550px;
    }
  }
`;

export const HeroBackground = styled.img`
  position: absolute;
  top: 40px;
  width: 800px;
  height: 800px;
  z-index: -1;

  @media screen and (max-width: 767px) {
    width: 507px;
    height: 507px;
    position: absolute;
    top: -10px;
  }
`;
export const HeroBlock = styled.div`
  margin-top: 152px;
  margin-bottom: 117px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeroContend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    width: 800px;
    color: #fff;
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
  }
  & p {
    margin-top: 24px;
    margin-bottom: 52px;
    color: #e2e2e2;
    text-align: center;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
  }
  & span {
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    -webkit-text-fill-color: #000;
    -webkit-text-stroke: 1.5px #fff;
    letter-spacing: 2.5px;
  }
  @media screen and (max-width: 767px) {
    & h2 {
      width: 343px;
      font-size: 56px;
    }
  }
`;

export const ContainerPC = styled.div`
  margin-right: auto;
  @media screen and (max-width: 767px) {
    display: none;
    overflow: hidden;
  }
`;

export const ContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const ButtonHeader = styled(Link)`
  text-decoration: none;
  padding: 16px 91px;
  border-radius: 1000px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: var(--02-dark-color-white, #fff);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(119deg, #bd00ff 21.38%, #3604c3 129.88%);
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: all 0.5s;
  &:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    width: 279px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10000px;
    background: var(
      --purple-linear,
      linear-gradient(90deg, #bd00ff -1.03%, #4200ff 98.22%)
    );
    margin-top: 108px;
  }
`;

export const ImgHeroDiv = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    margin-top: 30px;
  }
`;

export const ImgHero = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 640px;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    width: 343px;
  }
`;
export const Project = styled.section`
  margin-top: 118px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & h2 {
    width: 494px;
    margin-right: auto;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    animation: 2s show ease;
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & span {
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    -webkit-text-fill-color: #000;
    -webkit-text-stroke: 1.5px #fff;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;

    & h2 {
      width: 343px;
      color: var(--02-dark-color-white, #fff);
      font-family: Montserrat;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const ProjectsCards = styled.div`
  margin-top: 103px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
  @media screen and (max-width: 1199px) {
    gap: 80px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 48px;
    gap: 80px;
  }
`;

export const ProjectsFragment1 = styled.div`
  margin-top: 70px;
  border-radius: 40px;
  background: var(--grey-A, #1c1c1c);
  height: 280px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  transition: all 0.9s;
  padding: 80px;
  overflow: hidden;
  @media screen and (max-width: 1199px) {
    padding: 64px;
    height: 228px;
  }
  @media screen and (max-width: 767px) {
    background: transparent;
    border-radius: 0px;
    padding: 0px;
    margin-top: 0px;
    height: 508px;
  }
`;

export const ProjectsFragmentInfo1 = styled.div`
  width: 320px;
  & h4 {
    color: #50d13b;
    color: #50d13b;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-bottom: 16px;
  }

  & h3 {
    color: var(--white, #fcfcfc);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & p {
    color: var(--grey-C, #cfcfcf);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.4px;
    margin: 32px 0;
  }
  @media screen and (max-width: 1199px) {
    & h4 {
      margin-bottom: 8px;
    }
    & p {
      margin: 16px 0;
      width: 182px;
    }
  }
  @media screen and (max-width: 767px) {
    & h4 {
      margin-bottom: 16px;
    }
    & p {
      width: 343px;
    }
  }
`;

export const ButtonProject1 = styled(Link)`
  display: flex;
  width: 41px;
  height: 20px;
  padding: 16px 111px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--02-dark-color-white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10000px;
  background: linear-gradient(119deg, #61b554 21.38%, #76a90a 129.88%);
  @media screen and (max-width: 1199px) {
    padding: 12px 78px;
  }
  @media screen and (max-width: 767px) {
    width: 279px;
    padding: 16px 32px;
    gap: 10px;
    margin-top: 304px;
  }
`;
export const ProjectContainer = styled.div`
  height: 510px;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1199px) {
    height: 420px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 0px;
    height: 508px;
  }
`;

export const ProjectImage1Container = styled.div`
  @media screen and (max-width: 767px) {
    height: 255px;
    position: relative;
    margin-top: -356px;
    overflow: hidden;
  }
`;

export const ProjectImage1 = styled.img`
  width: 447px;
  top: 10px;
  right: -100px;
  position: absolute;
  border-radius: 20px;
  transform: rotate(-15.637deg);
  background-size: cover;
  z-index: 1;
  @media screen and (max-width: 1199px) {
    width: 264px;
  }
  @media screen and (max-width: 767px) {
    transform: rotate(15deg);
    right: 178px;
    top: 16px;
    width: 240px;
  }
`;

export const ProjectsFragment2 = styled.div`
  border-radius: 20px;
  background: var(--grey-A, #1c1c1c);
  height: 330px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  transition: all 0.9s;
  padding: 55px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1199px) {
    padding: 64px;
    height: 228px;
  }
  @media screen and (max-width: 767px) {
    background: transparent;
    height: 508px;
    padding: 0px;
    border-radius: 0px;
    justify-content: start;
  }
`;

export const ProjectsFragmentInfo2 = styled.div`
  width: 320px;

  & h4 {
    color: #fc7158;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-bottom: 16px;
  }

  & h3 {
    color: var(--white, #fcfcfc);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & p {
    color: var(--grey-C, #cfcfcf);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.4px;
    margin: 32px 0;
  }
  @media screen and (max-width: 1199px) {
    width: 182px;
    & h4 {
      font-size: 16px;
      margin-bottom: 8px;
    }
    & h3 {
      font-size: 24px;
    }
    & p {
      margin: 16px 0;
    }
  }
  @media screen and (max-width: 767px) {
    width: 285px;
    & h4 {
      font-size: 24px;
    }
    & h3 {
      font-size: 32px;
    }
  }
`;

export const ButtonProject2 = styled(Link)`
  display: flex;
  width: 41px;
  height: 20px;
  padding: 16px 111px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--02-dark-color-white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10000px;
  background: linear-gradient(119deg, #fc7057 21.38%, #f66e54 129.88%);
  @media screen and (max-width: 1199px) {
    padding: 12px 78px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 300px;
    width: 279px;
    padding: 16px 32px;
    gap: 10px;
  }
`;

export const ProjectImageContainer1 = styled.div`
  display: flex;
  transform: rotate(15deg);
  @media screen and (max-width: 767px) {
    height: 240px;
    position: absolute;
    top: 162px;
    width: 100%;
    overflow: hidden;
    transform: rotate(0deg);
  }
`;

export const ProjectImage21 = styled.img`
  position: absolute;
  background-size: cover;
  top: -1120px;
  width: 329px;
  left: -250px;
  border-radius: 20px;
  @media screen and (max-width: 1199px) {
    top: -550px;
    left: -280px;
    width: 264px;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    transform: rotate(-15deg);
    top: 0;
    left: -40px;
  }
`;
export const ProjectImage22 = styled.img`
  position: absolute;
  top: -50px;
  margin-left: 140px;
  background-size: cover;
  width: 329px;
  border-radius: 20px;
  @media screen and (max-width: 1199px) {
    width: 264px;
    margin-left: 20px;
  }
  @media screen and (max-width: 767px) {
    transform: rotate(-15deg);
    width: 240px;
    margin-left: 208px;
    top: 8px;
  }
`;

export const ProjectsFragment3 = styled.div`
  border-radius: 40px;
  display: flex;
  background: var(--grey-A, #1c1c1c);
  width: 420px;
  height: 654px;
  display: flex;
  justify-content: space-between;
  transition: all 0.9s;
  padding: 73px 60px;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 1199px) {
    margin: 0 auto;
    margin-top: 40px;
    height: 228px;
    width: 544px;
    padding: 64px;
    position: unset;
  }
  @media screen and (max-width: 767px) {
    background: transparent;
    padding: 0;
    border-radius: 0px;
    height: 508px;
    width: 100%;
  }
`;

export const ProjectsFragmentInfo3 = styled.div`
  width: 420px;
  margin-right: auto;
  & h4 {
    color: #dfb003;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-bottom: 16px;
  }

  & h3 {
    color: var(--white, #fcfcfc);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & p {
    color: var(--grey-C, #cfcfcf);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.4px;
    margin: 32px 0 50px 0;
  }
  @media screen and (max-width: 1199px) {
    width: 182px;
    & h4 {
      font-size: 16px;
      margin-bottom: 8px;
    }
    & h3 {
      font-size: 24px;
    }
    & p {
      margin: 16px 0;
      margin-bottom: 23px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 285px;
    & h4 {
      font-size: 24px;
    }
    & h3 {
      font-size: 32px;
    }
  }
`;

export const ButtonProject3 = styled(Link)`
  width: 41px;
  height: 20px;
  padding: 16px 111px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--02-dark-color-white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10000px;
  background: linear-gradient(88deg, #d5b105 0%, #f1ad00 93.39%);
  @media screen and (max-width: 1199px) {
    padding: 12px 78px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 274px;
    width: 279px;
    padding: 16px 32px;
    gap: 10px;
  }
`;

export const ProjectImage3Container = styled.div`
  @media screen and (max-width: 767px) {
    height: 230px;
    width: 100%;
    position: absolute;
    top: 192px;
    right: 0px;
    overflow: hidden;
  }
`;

export const ProjectImage31 = styled.img`
  position: absolute;
  top: 424px;
  background-size: cover;
  width: 262px;
  border-radius: 8px;
  @media screen and (max-width: 1199px) {
    width: 264px;
    top: -40px;
    left: 302px;
    background-size: cover;
  }
  @media screen and (max-width: 767px) {
    transform: rotate(15deg);
    left: -45px;
    top: 10px;
    width: 240px;
  }
`;

export const ProjectImage32 = styled.img`
  position: absolute;
  top: 312px;
  margin-left: 307px;
  background-size: cover;
  width: 262px;
  border-radius: 8px;
  @media screen and (max-width: 1199px) {
    width: 264px;
    top: 40px;
    left: 302px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ProjectContainerImg = styled.div`
  @media screen and (max-width: 1199px) {
    margin-top: -40px;
    height: 390px;
    border-radius: 40px;
    position: relative;
    overflow: hidden;
  }
  @media screen and (max-width: 767px) {
    height: 508px;
    border-radius: 0px;
  }
`;

export const ContainerMoreProject = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-top: -76px;
    & button {
      color: var(--02-dark-color-white, #fff);
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      background: transparent;
      border: none;
    }
  }
`;

export const ProjectContainer2 = styled.div`
  display: flex;
  gap: 100px;
  @media screen and (max-width: 1199px) {
    display: block;
  }
`;

export const ProjectsFragment4 = styled.div`
  border-radius: 40px;
  display: flex;
  background: var(--grey-A, #1c1c1c);
  width: 420px;
  height: 654px;
  display: flex;
  justify-content: space-between;
  transition: all 0.9s;
  padding: 73px 60px;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 1199px) {
    margin: 0 auto;
    margin-top: 80px;
    margin-top: 40px;
    height: 228px;
    width: 544px;
    padding: 64px;
    position: relative;
  }
  @media screen and (max-width: 767px) {
    background: transparent;
    border-radius: 0px;
    height: 508px;
    width: 100%;
    padding: 0;
    margin-top: 80px;
  }
`;

export const ProjectsFragmentInfo4 = styled.div`
  width: 420px;
  margin-right: auto;

  & h4 {
    color: #4d83f0;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-bottom: 16px;
  }

  & h3 {
    color: var(--white, #fcfcfc);
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & p {
    color: var(--grey-C, #cfcfcf);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.4px;
    margin: 32px 0 50px 0;
  }
  @media screen and (max-width: 1199px) {
    width: 182px;
    margin-right: unset;
    margin-left: auto;
    & h4 {
      font-size: 16px;
      margin-bottom: 8px;
    }
    & h3 {
      font-size: 24px;
    }
    & p {
      margin: 16px 0;
      margin-bottom: 23px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: initial;
    width: 343px;
    & h4 {
      font-size: 24px;
    }
    & h3 {
      font-size: 32px;
    }
  }
`;

export const ButtonProject4 = styled(Link)`
  width: 41px;
  height: 20px;
  padding: 16px 111px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--02-dark-color-white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10000px;
  background: linear-gradient(88deg, #4d83f0 0%, #4d83f0 93.39%);
  @media screen and (max-width: 1199px) {
    padding: 12px 78px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 300px;
    width: 279px;
    padding: 16px 32px;
    gap: 10px;
  }
`;

export const ProjectImage4Container = styled.div`
  @media screen and (max-width: 767px) {
    height: 224px;
    top: 175px;
    width: 100%;
    position: absolute;
    overflow: hidden;
  }
`;

export const ProjectImage41 = styled.img`
  position: absolute;
  top: 412px;
  background-size: cover;
  width: 200px;
  border-radius: 8px;
  @media screen and (max-width: 1199px) {
    width: 158px;
    top: 96px;
    left: 212px;
  }
  @media screen and (max-width: 767px) {
    width: 165px;
    top: 29px;
    left: 140px;
    transform: rotate(15deg);
  }
`;

export const ProjectImage42 = styled.img`
  position: absolute;
  top: 437px;
  margin-left: 220px;
  background-size: cover;
  width: 200px;
  border-radius: 8px;
  @media screen and (max-width: 1199px) {
    width: 177px;
    top: 48px;
    left: 0;
    margin: 0;
  }
  @media screen and (max-width: 767px) {
    width: 200px;
    top: -135px;
    left: -83px;
    transform: rotate(15deg);
  }
`;

export const Services = styled.section`
  margin-top: 270px;
  padding: 0;
  & h2 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
  }
  & span {
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    -webkit-text-fill-color: #000;
    -webkit-text-stroke: 1.5px #fff;
    letter-spacing: 2.5px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 25px;
    & h2 {
      font-size: 40px;
    }
  }
`;

export const ServicesCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-top: 100px;
  padding: 0;
  gap: 60px;
  @media screen and (max-width: 1199px) {
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    gap: 24px;
    margin-top: 40px;
  }
`;

export const ServicesCardsContainer = styled.div`
  display: flex;
  gap: 60px;
  @media screen and (max-width: 1199px) {
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ToEmailLink = styled(Link)`
  text-decoration: none;
`;

export const ServicesFragment = styled.div`
  margin: 0;
  padding: 0;
  padding: 56px 65px;

  width: 223px;
  height: 339px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  border-radius: 40px;
  border: 1px solid transparent;
  background: #181818;
  &:hover {
    border: 1px solid #bd00ff;
  }
  & ul {
    margin: 0;
    padding: 0;
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    gap: 14px;
  }
  & li {
    margin: 0;
    padding: 0;
    width: 220px;
    height: 29px;

    color: #cfcfcf;
    list-style-type: none;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 0;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 1px;
      background: #cfcfcf;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 1199px) {
    width: 223px;
    padding: 56px 51.5px;
    & li {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 238px;
    height: 327px;
  }
  & li {
    font-size: 18px;
  }
`;

export const ServicesFragment3 = styled.div`
  margin: 0;
  padding: 0;
  padding: 56px 65px;
  position: relative;
  width: 223px;
  height: 339px;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  border-radius: 40px;
  border: 1px solid transparent;
  background: #181818;
  &:hover {
    border: 1px solid #bd00ff;
  }
  & ul {
    margin: 0;
    padding: 0;
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    gap: 14px;
  }
  & li {
    margin: 0;
    padding: 0;
    width: 220px;
    height: 29px;

    color: #cfcfcf;
    list-style-type: none;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 0;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 1px;
      background: #cfcfcf;
      margin-right: 8px;
    }
  }
  @media screen and (max-width: 1199px) {
    display: flex;
    width: 572px;
    height: 97px;
    padding: 56px 50px;
    flex-direction: column;
    align-items: flex-start;
    & ul {
      flex-direction: row;
      gap: 80px;
    }
    & li {
      width: auto;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 241px;
    height: 186px;
    & ul {
      flex-direction: column;
      align-items: start;
      gap: 14px;
    }

    & li {
      font-size: 18px;
    }
  }
`;

export const ServiceButton = styled.div`
  margin-right: auto;
  display: flex;
  margin-top: auto;
  align-items: center;
  & p {
    padding: 0;
    margin: 0;
    color: #ffffff;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    transition: all 0.5s;
  }

  & svg {
    margin-left: 12px;
    height: 8px;
    width: 20px;
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
      transform: translateX(5px);
      stroke: #bd00ff;
    }
  }
`;
export const ServiceButton3 = styled.div`
  margin-right: auto;
  display: flex;
  margin-top: auto;
  align-items: center;
  & p {
    padding: 0;
    margin: 0;
    color: #ffffff;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    transition: all 0.5s;
  }

  & svg {
    margin-left: 12px;
    height: 8px;
    width: 20px;
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
      transform: translateX(5px);
      stroke: #bd00ff;
    }
  }
  @media screen and (max-width: 1199px) {
    position: absolute;
    margin-top: 61.5px;
    right: 53px;
  }
  @media screen and (max-width: 767px) {
    right: 146px;
    margin-top: 175px;
  }
`;

export const ServiceHeader1 = styled.h3`
  margin-right: auto;
  background: linear-gradient(119deg, #61b554 21.38%, #76a90a 129.88%);
  background-clip: text;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;
export const ServiceHeader2 = styled.h3`
  background: linear-gradient(119deg, #bd00ff 21.38%, #3604c3 129.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;
export const ServiceHeader3 = styled.h3`
  background: linear-gradient(119deg, #fc7057 21.38%, #f66e54 129.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

export const OurTeam = styled.section`
  position: relative;
  margin-top: 314px;
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 442px;
  & h2 {
    color: #fcfcfc;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
  }
  & span {
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    -webkit-text-fill-color: #000;
    -webkit-text-stroke: 1.5px #fff;
    letter-spacing: 2.5px;
  }
  @media screen and (max-width: 1199px) {
    width: 672px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SliderName = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 140px;
`;

export const SwiperButtonContainer = styled.div`
  display: flex;
  gap: 44px;
`;

export const SwiperImgContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 1000px;
  border: 2px solid var(--grey-B, #595959);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    border-color: #fcfcfc;
  }
`;

export const SwiperButtonPrev = styled.img`
  width: 24px;
  height: 24px;
`;
export const SwiperButtonNext = styled.img`
  width: 24px;
  height: 24px;
`;

export const MySwiperBox = styled.div`
  margin-left: auto;
  z-index: 10;
  width: 374px;
  height: 240px;
  display: flex;
  border-radius: 32px;
  background: linear-gradient(119deg, #bd00ff 21.38%, #3604c3 129.88%);
  padding: 40px 28px;
`;

export const SocialImg = styled.img``;

export const SwiperWrapper = styled.div`
  position: relative;
  display: flex;
`;
const sliderAnimation = keyframes`
  0%
  {
    opacity: 0;
  }
  100% 
  {
    opacity: 1;
  }
`;

export const SwiperSlide = styled.div`
  display: none;
  border-radius: 100px;
  animation: ${sliderAnimation} 0.5s ease-in-out;
  &.active {
    display: flex;
  }
`;

export const Contend = styled.div`
  display: block;
  & h2 {
    margin-right: auto;
    margin-top: 72px;
    width: 100px;
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    text-align: left;
  }

  & h3 {
    margin-top: 16px;
    width: 158px;
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;
export const ContainerImageBW = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.5s ease 0s;
  margin-left: -10px;
  z-index: 2;
  @media screen and (max-width: 1199px) {
    margin-left: 0;
  }
`;

export const ImageBW = styled.img`
  width: 256px;
  height: 256px;
`;

export const ImageC = styled.img`
  margin-top: -63px;
  margin-left: -60px;
  width: 343px;
  height: 343px;
`;

export const ContainerImg = styled.div`
  width: 100%;
  top: 300px;
  overflow: hidden;
  position: absolute;
`;
