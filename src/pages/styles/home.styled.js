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
`

export const SectionHero = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&::before {
		position: absolute;
		margin-top: -75px;
		margin-left: 350px;
		content: '';
		display: block;
		width: 75px;
		height: 75px;
		border-radius: 75px;
		border: 1.5px solid #fff;
		background: rgba(217, 217, 217, 0.2);
		backdrop-filter: blur(10px);
		animation: 2s ease-in-out 2s infinite alternate ${sectionHeroAnimation};
	}
`

export const HeroBackground = styled.img`
  position: absolute;
  top: 40px;
  width: 800px;
  height: 800px;
  z-index: -1;
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
`;

export const ImgHero = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 640px;
  height: auto;
  object-fit: cover;
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
`;

export const ProjectsCards = styled.div`
  margin-top: 103px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
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
`;

export const ProjectsFragmentInfo1 = styled.div`
  width: 320px;
  margin-top: -41px;
  & h4 {
    color: #50d13b;
    color: #50d13b;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;
export const ProjectContainer = styled.div`
  height: 510px;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
`;

export const ProjectImage1 = styled.img`
  width: 447px;
  top: 10px;
  right: -100px;
  /* height: 440px; */
  position: absolute;
  border-radius: 20px;
  transform: rotate(-15.637deg);
  /* background-image: url('../../assets/img/organicShop/main-page.png'); */
  background-size: cover;
  z-index: 1;
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
`;

export const ProjectsFragmentInfo2 = styled.div`
  width: 320px;
  margin-top: -41px;

  & h4 {
    color: #fc7158;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;

export const ProjectImageContainer1 = styled.div`
  display: flex;
  transform: rotate(15deg);
`;

export const ProjectImage21 = styled.img`
  position: absolute;
  background-size: cover;
  top: -1120px;
  width: 329px;
  left: -250px;
  border-radius: 20px;
`;
export const ProjectImage22 = styled.img`
  position: absolute;
  top: -50px;
  margin-left: 140px;
  background-size: cover;
  width: 329px;
  border-radius: 20px;
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
`;

export const ProjectsFragmentInfo3 = styled.div`
  width: 420px;
  margin-right: auto;
  margin-top: -41px;

  & h4 {
    color: #dfb003;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;

export const ProjectImage31 = styled.img`
  position: absolute;
  top: 424px;
  background-size: cover;
  width: 262px;
  border-radius: 8px;
`;

export const ProjectImage32 = styled.img`
  position: absolute;
  top: 312px;
  margin-left: 307px;
  background-size: cover;
  width: 262px;
  border-radius: 8px;
`;

export const ProjectContainer2 = styled.div`
  display: flex;
  gap: 100px;
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
`;

export const ProjectsFragmentInfo4 = styled.div`
  width: 420px;
  margin-right: auto;
  margin-top: -41px;

  & h4 {
    color: #4d83f0;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;

export const ProjectImage41 = styled.img`
  position: absolute;
  top: 412px;
  background-size: cover;
  width: 200px;
  border-radius: 8px;
`;

export const ProjectImage42 = styled.img`
  position: absolute;
  top: 437px;
  margin-left: 220px;
  background-size: cover;
  width: 200px;
  border-radius: 8px;
`;

export const Services = styled.section`
  margin-top: 270px;
  padding: 0;
  & h2 {
    margin: 0;
    padding: 0;

    text-align: start;

    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 32px;
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
`;

export const ServicesCards = styled.div`
  margin: 0;
  margin-top: 100px;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const ToEmailLink = styled(Link)`
  text-decoration: none;
`;

export const ServicesFragment = styled.div`
  margin: 0;
  padding: 0;
  padding: 56px 65px;

  width: 223px;
  min-height: 273px;
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

export const ServiceHeader1 = styled.h3`
  margin-right: auto;
  background: linear-gradient(119deg, #61b554 21.38%, #76a90a 129.88%);
  background-clip: text;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const ServiceHeader2 = styled.h3`
  background: linear-gradient(119deg, #bd00ff 21.38%, #3604c3 129.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const ServiceHeader3 = styled.h3`
  background: linear-gradient(119deg, #fc7057 21.38%, #f66e54 129.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  margin-left: -30px;
  z-index: 2;
`;

export const ImageBW = styled.img`
  width: 256px;
  height: 256px;
  /* position: absolute;
  z-index: 1; */
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

export const ContentUs = styled.section`
  display: flex;
  justify-content: center;
`;

export const AdoutUs = styled.div`
  display: flex;
  max-width: 640px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 136px;
  & h2 {
    color: var(--white, #fcfcfc);
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    & span {
      font-weight: 800;
      font-family: "Poppins", sans-serif;
      -webkit-text-fill-color: #000;
      -webkit-text-stroke: 1.5px #fff;
      letter-spacing: 2.5px;
    }
  }
  & p {
    color: var(--grey-C, #cfcfcf);
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.4px;
  }
`;

export const ContentUsBtn = styled(Link)`
  margin-top: 8px;
  display: flex;
  width: 199px;
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

export const Peoples = styled.div``;
const peopleBlue = keyframes`
  0% {
    margin-top: -205px;
  }
  100% {
    margin-top: -195px;
  }
`;

export const PeopleBlue = styled.div`
  position: absolute;
  margin-top: -199px;
  margin-left: -290px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleBlue};

  & p {
    background: #1570ef;
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid var(--blue-600, #1570ef);
    background: var(--blue-600, #1570ef);
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peopleRed = keyframes`
  0% {
	margin-top: -125px;
	margin-left: -595px;

  }
  100% {
	margin-top: -115px;
	margin-left: -585px;
  }
`;

export const PeopleRed = styled.div`
  position: absolute;
  margin-top: -120px;
  margin-left: -590px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleRed};

  & p {
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid #d93036;
    background: #d93036;
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peopleGreen = keyframes`
  0% {
	margin-top: -125px;
	margin-left: 15px;

  }
  100% {
	margin-top: -115px;
	margin-left: 5px;
  }
`;

export const PeopleGreen = styled.div`
  position: absolute;
  margin-top: -120px;
  margin-left: 10px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleGreen};

  & p {
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid #039855;
    background: #039855;
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peoplePink = keyframes`
  0% {
	margin-top: 125px;
	margin-left: -795px;

  }
  100% {
	margin-top: 115px;
	margin-left: -785px;
  }
`;

export const PeoplePink = styled.div`
  position: absolute;
  margin-top: 120px;
  margin-left: -790px;

  animation: 1s ease-in-out 1s infinite alternate ${peoplePink};

  & p {
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid #bf0099;
    background: #bf0099;
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peopleBLight = keyframes`
  0% {
	margin-top: 455px;
	margin-left: -295px;

  }
  100% {
	margin-top: 445px;
	margin-left: -285px;
  }
`;

export const PeopleBlueLight = styled.div`
  position: absolute;
  margin-top: 450px;
  margin-left: -290px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleBLight};

  & p {
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid #7cd4fd;
    background: #7cd4fd;
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peopleOrange = keyframes`
  0% {
	margin-top: 395px;
	margin-left: -575px;

  }
  100% {
	margin-top: 385px;
	margin-left: -565px;
  }
`;

export const PeopleOrange = styled.div`
  position: absolute;
  margin-top: 390px;
  margin-left: -570px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleOrange};

  & p {
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid #dc6803;
    background: #dc6803;
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peopleLPink = keyframes`
  0% {
	margin-top: 395px;
	margin-left: 15px;

  }
  100% {
	margin-top: 385px;
	margin-left: 5px;
  }
`;

export const PeopleLightPink = styled.div`
  position: absolute;
  margin-top: 390px;
  margin-left: 10px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleLPink};

  & p {
    color: var(--02-dark-color-white, #fff);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid var(--pink-600, #dd2590);
    background: var(--pink-600, #dd2590);
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;

const peopleYellow = keyframes`
  0% {
	margin-top: 125px;
	margin-left: 105px;

  }
  100% {
	margin-top: 115px;
	margin-left: 95px;
  }
`;

export const PeopleYellow = styled.div`
  position: absolute;
  margin-top: 120px;
  margin-left: 100px;

  animation: 1s ease-in-out 1s infinite alternate ${peopleYellow};

  & p {
    color: var(--black, #020202);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: var(--Spacing---lg, 8px);
    flex-shrink: 0;
    border-radius: 24px;
    border: 2px solid #fcff00;
    background: #fcff00;
  }
  & img {
    position: absolute;
    margin-left: -18px;
    margin-top: -3px;
    width: 25px;
    height: 25px;
  }
`;
