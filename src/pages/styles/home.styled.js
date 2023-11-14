import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'


const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
		animation-name: leftRight;

		animation-duration: 3s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
`

export const HeroBackground = styled.img`
	position: absolute;
	top: 40px;
	width: 800px;
	height: 800px;
	z-index: -1;
`
export const HeroBlock = styled.div`
	margin-top: 152px;
	margin-bottom: 117px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
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
		font-family: 'Poppins', sans-serif;
		-webkit-text-fill-color: #000;
		-webkit-text-stroke: 1.5px #fff;
		letter-spacing: 2.5px;
	}
`
export const ButtonHeader = styled.a`
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
  transition: all .5s;
  &:hover{
    opacity: 0.6;
  }
`

export const ImgHero = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 640px;
	height: auto;
	object-fit: cover;
`
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
		font-family: 'Poppins', sans-serif;
		-webkit-text-fill-color: #000;
		-webkit-text-stroke: 1.5px #fff;
	}
`

export const ProjectsCards = styled.div`
  margin-top: 103px;
  display: flex;
  flex-direction: column;
  gap: 98px
`

export const ProjectsFragment1 = styled.div`
	border-radius: 40px;
	background: var(--grey-A, #1c1c1c);
	height: 360px;
	overflow: hidden;
	display: flex;
	justify-content: space-between;
	transition: all 0.9s;
	padding: 80px;
  position: relative;
  overflow: hidden;
`

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
`

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
`

export const ProjectImage1 = styled.img`
	width: 447px;
  top: -50px;
  right: -100px;
	/* height: 440px; */
  position: absolute;
  border-radius: 20px;
	transform: rotate(-15.637deg);
	/* background-image: url('../../assets/img/organicShop/main-page.png'); */
	background-size: cover;
  z-index: 10;
`