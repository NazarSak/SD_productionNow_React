import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  width: 940px;
  height: 100px;
  margin: 40px auto 0;
  padding: 10px 120px;
  justify-content: space-between;
  flex-shrink: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  border-radius: 40px;
  background: #181818;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  @media (max-width: 1199px) {
    width: 672px;
    background: transparent;
    padding: 0 48px;
    margin: 0;
  }
`;

export const Navigator = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  list-style: none;
`;
export const NavigatorLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.9s;
  display: block;
  text-align: center;
  align-items: center;

  color: #fcfcfc;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  &:hover {
    color: #7d3bd1;
  }
  /* &.active {
		font-weight: 700;
	} */
`;

export const ChangeLanguage = styled.div`
  height: auto;
  width: 58px;
  transition: all 0.9s;
  display: flex;

  & svg {
    position: absolute;
    transition: all 0.9s;
    margin: 11px 0 0 60px;
    cursor: pointer;
  }

  & svg.open {
    transform: rotate(180deg);
  }
  @media (max-width: 1199px) {
    width: 106px;
  }
`;

export const ChangeLanguageUl = styled.ul`
  margin: 0;
  display: flex;
  padding: 12px 24px;
  gap: 16px;
  border-radius: 10px;
  /* position: absolute; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #000;
  transition: all 0.9s;
`;

export const ChangeLanguageLi = styled.li`
  transition: all 0.9s;
  padding-right: 24px;
  &.show {
    display: flex;
    flex-direction: column;
    transition: 800ms;
  }

  &.hide {
    transition: 0.9s;

    display: none;
  }

  & a {
    transition: 800ms;
    text-decoration: none;
    color: inherit;
    display: block;
    text-align: center;
    align-items: center;
    color: #fcfcfc;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    cursor: pointer;
  }
  & a:hover {
    color: #7d3bd1;
  }
  & p {
    text-decoration: none;
    color: inherit;
    transition: all 0.9s;
    display: block;
    text-align: center;
    align-items: center;

    color: #fcfcfc;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin: 0;
  }
`;
