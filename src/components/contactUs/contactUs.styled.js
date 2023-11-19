import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BackgroundImg from '../../assets/img/backgroundCircle.png'


export const ButtonClose = styled(Link)`
	position: absolute;
	margin-left: 662px;
	margin-top: 80px;
	border-radius: 100px;
	border: 2px solid var(--grey-B, #595959);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 56px;
	height: 56px;
	transition: 0.5s;
	&:hover {
		border: 2px solid var(--grey-B, #a1a1a1);
	}
`

export const EmailForm = styled.div`
	display: flex;
	width: 700px;
	height: 700px;
	flex-direction: column;
	align-items: center;
	background-position: center;
	background-size: cover;
	background-image: url(${BackgroundImg});

	& h1 {
		margin-bottom: 24px;
		margin-top: 98px;
		color: var(--02-dark-color-white, #fff);
		text-align: center;
		font-family: Montserrat;
		font-size: 64px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		& span {
			font-weight: 800;
			font-family: 'Poppins', sans-serif;
			-webkit-text-fill-color: #000;
			-webkit-text-stroke: 1.5px #fff;
			letter-spacing: 2.5px;
		}
	}

	& p {
		margin: 0;
		color: #a1a1a1;
		text-align: center;
		font-family: Montserrat;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: 140%;
		max-width: 527px;
		margin-bottom: 64px;
	}

	& input {
		margin-top: 24px;
		display: flex;
		padding: 16px 24px;
		align-items: center;
		gap: 10px;
		display: flex;
		padding: 16px 24px;
		align-items: center;
		gap: 10px;
		background: transparent;
		border-radius: 20px;
		border: 1px solid var(--grey-C, #cfcfcf);
		color: white;
		width: 497px;
		&.message {
			padding-bottom: 100px;
		}
	}

	& button {
		margin-top: 32px;
		display: flex;
		width: 545px;
		height: 50px;
		padding: 12px var(--Spacing---2xl, 24px);
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 39px;
		background: linear-gradient(119deg, #bd00ff 21.38%, #3604c3 129.88%);
		border: none;
		color: var(--white, var(--02-dark-color-white, #fff));
		font-family: Montserrat;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: uppercase;
		font-family: Montserrat;
		animation: 2s animationButtonShows ease;
		transition: 0.9s all;
		&:hover {
			opacity: 0.6;
		}
	}
`
