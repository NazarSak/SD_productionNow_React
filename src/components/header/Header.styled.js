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
  @media (max-width: 767px) {
    width: 343px;
    padding: 0 16px;
    margin: auto;

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

export const StyledLink = styled.a`
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
    width: 180px;
    & svg {
      margin: 15px 0 0 60px;
    }
    & svg.open {
      transform: rotate(180deg);
      margin: 8px 0 0 60px;
    }
  }
  @media (max-width: 767px) {
    & svg {
      display: none;
    }

    & svg.open {
      display: none;
    }
  }
`;

export const ChangeLanguageUl = styled.ul`
  margin: 0;
  display: flex;
  padding: 12px 24px;
  gap: 16px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #000;
  transition: all 0.9s;
  @media (max-width: 767px) {
    display: none;
  }
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
  & h3 {
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

export const HamburgerMenuNav = styled.div``;

export const HamburgerMenuNavButton = styled.button`
  display: none;

  @media (max-width: 1199px) {
    display: block;
    background: transparent;
    outline: none;
    border: none;
    margin-left: 30px;
  }
  @media (max-width: 767px) {
    margin-left: 125px;
  }
`;

export const HamburgerMenuNavImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const HamburgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: 1199px) {
    display: block;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #000;
    transform: ${(props) =>
      props.isopen === "true" ? "translateX(0)" : "translateX(100%)"};
    transition: transform 1s ease-in-out;
  }
`;

export const HamburgerMenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  margin-top: 126px;
  @media (max-width: 767px) {
    margin-top: 69px;
  }
`;

export const MenuList = styled.ul`
  @media (max-width: 1199px) {
    list-style: none;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 0;
  }
  @media (max-width: 767px) {
    padding: 0;
    gap: 64px;
  }
`;

export const CloseButton = styled.button`
  @media (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 40px;
    height: 40px;
    transition: border-color 0.3s ease;
    border-radius: 100px;
    border: 1px solid var(--grey-C, #cfcfcf);
    position: absolute;
    top: 64px;
    right: 64px;
    &:hover {
      border-color: white;
    }
    @media (max-width: 767px) {
      top: 32px;
      right: 16px;
    }
  }
`;

export const ImgClose = styled.img`
  @media (max-width: 1199px) {
    width: 24px;
    height: 24px;
  }
`;

export const ContainerLogo = styled.div`
  @media (max-width: 767px) {
    & img {
      display: none;
    }
  }
`;

export const HeroLink = styled(Link)`
  @media (max-width: 1199px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: block;
    transition: all 0.9s;
    text-align: center;
    align-items: center;
    margin: 0;
    color: #fcfcfc;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: #7d3bd1;
    }
  }
`;

export const ChangeLanguageMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    & a {
      color: var(--02-dark-color-white, #fff);
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-decoration: none;
    }

    & div {
      display: block;
      width: 1px;
      height: 20px;
      background: #181818;
    }
  }
`;
