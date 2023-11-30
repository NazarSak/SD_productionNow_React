import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ContentUs = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    margin-top: 250px;
    margin-bottom: 79px;
  }
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
    @media (max-width: 1199px) {
      font-size: 56px;
    }
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
  @media (max-width: 1199px) {
    max-width: 628px;
    & p {
      width: 316px;
    }
  }

  & h4 {
    display: none;
    @media (max-width: 1199px) {
      color: var(--grey-C, #cfcfcf);
      display: block;
      text-align: center;
      width: 316px;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.4px;
      margin: 0;
    }
  }
  @media (max-width: 767px) {
    & h2 {
      font-size: 40px;
    }
    & p {
      width: 253px;
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

export const Peoples = styled.div`
  @media (max-width: 1199px) {
    position: absolute;
  }
`;

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
  @media (max-width: 1199px) {
    margin-left: 72px;
  }
  @media (max-width: 767px) {
    margin-left: 30px;
    top: 58px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesRed = keyframes`
  0% {
    margin-top: -125px;
    margin-left: 230px;
  }
  100% {
    margin-top: -115px;
    margin-left: 220px;
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
  @media (max-width: 1199px) {
	/* top: auto;
    right: auto; */
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesRed};
  }
  @media (max-width: 767px) {
    top: 46px;
    right: -173px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesGreen = keyframes`
  0% {
    margin-top: -205px;
    margin-left: -120px;
  }
  100% {
    margin-top: -195px;
    margin-left: -110px;
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
  @media (max-width: 1199px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesGreen};
  }
  @media (max-width: 767px) {
    top: 63px;
    left: 50px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesPink = keyframes`
  0% {
    margin-top: -125px;
    margin-left: -290px;
  }
  100% {
    margin-top: -115px;
    margin-left: -280px;
  }

`;

const mediaQueryStylesPinkMob = keyframes`
  0% {
    margin-top: -115px;
    margin-left: -280px;
  }
  100% {
	margin-top: -125px;
    margin-left: -290px;

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
  @media (max-width: 1199px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesPink};
  }
  @media (max-width: 767px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesPinkMob};

    top: 32px;
    left: 142px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesBLight = keyframes`
  0% {
    margin-top: 425px;
    margin-left: -120px;
  }
  100% {
    margin-top: 415px;
    margin-left: -110px;
  }

`;

const mediaQueryStylesBLightMob = keyframes`
  0% {
    margin-top: 405px;
    margin-left: 0px;
  }
  100% {
    margin-top: 395px;
    margin-left: -110px;
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
  @media (max-width: 1199px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesBLight};
  }
  @media (max-width: 767px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesBLightMob};
    top: 33px;
    right: -2px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesOrange = keyframes`
  0% {
    margin-top: 425px;
    margin-left: 105px;
  }
  100% {
    margin-top: 415px;
    margin-left: 95px;
  }

`;

const mediaQueryStylesOrangeMob = keyframes`
   0% {
	   margin-top: 415px;
	   margin-left: 95px;
  }
  100% {
	margin-top: 425px;
    margin-left: 105px;
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
  @media (max-width: 1199px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesOrange};
  }
  @media (max-width: 767px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesOrangeMob};

    right: -121px;
    top: 22px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesLPink = keyframes`
  0% {
    margin-top: 365px;
    margin-left: 235px;
  }
  100% {
    margin-top: 355px;
    margin-left: 225px;
  }

`;

const mediaQueryStylesLPinkMob = keyframes`
  0% {
    margin-top: 365px;
    margin-left: 235px;
  }
  100% {
    margin-top: 355px;
    margin-left: 225px;
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
  @media (max-width: 1199px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesLPink};
  }
  @media (max-width: 767px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesLPinkMob};

    top: 30px;
    right: -165px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
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

const mediaQueryStylesYellow = keyframes`
  0% {
    margin-top: 365px;
    margin-left: -290px;
  }
  100% {
    margin-top: 355px;
    margin-left: -280px;
  }

`;

const mediaQueryStylesYellowMob = keyframes`
  0% {
    margin-top: 335px;
    margin-left: -290px;
  }
  100% {
    margin-top: 345px;
    margin-left: -280px;
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
  @media (max-width: 1199px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesYellow};
  }
  @media (max-width: 767px) {
    animation: 1s ease-in-out 1s infinite alternate ${mediaQueryStylesYellowMob};
    top: 35px;
    right: 83px;
    & p {
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      padding: 6px 9px;
    }
  }
`;
