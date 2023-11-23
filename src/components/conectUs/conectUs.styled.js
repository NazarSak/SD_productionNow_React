import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ContentUs = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  display: none;
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
    @media (max-width: 1199px) {
      display: none;
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

export const Peoples = styled.div`display: none;`;

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
    margin-left: -252px;
  }
`;

const peopleRed = keyframes`
  0% {
	margin-top: -125px;
	margin-left: -595px;
  @media (max-width: 1199px) {
    margin-top: -220px;
    margin-left: -427px;
  }
  }
  100% {
	margin-top: -115px;
  margin-left: -585px; 
    @media (max-width: 1199px) {
    margin-top: -200px;
    margin-left: -427px;
  }
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
