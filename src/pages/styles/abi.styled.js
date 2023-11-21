import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleHThree = styled.h3`
  color: #4d83f0;
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
`;

export const ParagraphGoals = styled.p`
  width: 200px;
  color: var(--grey-C, #cfcfcf);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 27px;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const NumberOfList = styled.span`
	text-align: center;
	font-family: Montserrat;
	font-size: 64px;
	font-style: normal;
	font-family: 'Poppins', sans-serif;
	-webkit-text-fill-color: #000;
	-webkit-text-stroke: 1.5px #fff;
	font-weight: 600;
	margin-right: 16px;
	&:after {
		content: '.';
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
`

export const Line = styled.div`
  width: 1px;
  height: 200px;
  background: radial-gradient(
    4979852.87% 58.76% at 50% 49.67%,
    rgba(163, 163, 163, 0.7) 0%,
    rgba(117, 117, 117, 0) 89.9%
  );
`;

export const FirstConatinerInternalImg = styled.div``;

export const SecondConatinerInternalImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;
`;

export const InternalImgOne = styled.img`
  width: 365px;
  height: 2536px;
  flex-shrink: 0;
  border-radius: 40px;
  margin-top: 56px;
  border: 5px solid var(--grey-B, #595959);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const InternalImgSecond = styled.img`
  width: 365px;
  height: 802px;
  flex-shrink: 0;
  margin-top: 180px;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const InternalImgThree = styled.img`
  width: 365px;
  height: 802px;
  flex-shrink: 0;
  margin-top: 151px;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const InternalImgFour = styled.img`
  width: 365px;
  height: 966px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const InternalImgFive = styled.img`
  width: 365px;
  height: 1002px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 5px solid var(--grey-B, #595959);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
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

export const VideoContainer = styled.div`
  margin-top: 140px;
  width: 100%;
`;
