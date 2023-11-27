import React, { useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../assets/svg/HamburgerMenu.svg";
import ButtonClose from "../../assets/svg/emailPage/Close.svg";

import {
  ContainerLogo,
  HeroLink,
  ChangeLanguage,
  ChangeLanguageLi,
  ChangeLanguageUl,
  Header,
  Navigator,
  NavigatorLi,
  StyledLink,
  HamburgerMenuNav,
  MenuList,
  HamburgerMenuNavButton,
  HamburgerMenuNavImg,
  HamburgerMenuWrapper,
  HamburgerMenuContent,
  ChangeLanguageMobile,
  ImgClose,
  CloseButton,
} from "./Header.styled";

export const HeaderDE = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };

  const handleListClick = (event) => {
    event.stopPropagation();
  };

  const handleSvgClick = () => {
    if (!isClicked) setIsClicked(true);
    else setIsClicked(false);
  };

  return (
    <Header>
      <div>
        <Link to="/de">
          <img src={Logo} alt="logo" />
        </Link>
      </div> 

      <Navigator>
        <NavigatorLi>
          <StyledLink href="../../SD_productionNow_React/#projects">
          Projekte
          </StyledLink>
        </NavigatorLi>
        <NavigatorLi>
          <StyledLink href="../../SD_productionNow_React/#services">
          Dienste
          </StyledLink>
        </NavigatorLi>
        <NavigatorLi>
          <StyledLink href="../../SD_productionNow_React/#team">
          Team
          </StyledLink>
        </NavigatorLi>
        <NavigatorLi>
          <StyledLink href="../../SD_productionNow_React/#contactus">
          Kontakt
          </StyledLink>
        </NavigatorLi>
      </Navigator>
      <ChangeLanguage>
        <ChangeLanguageUl>
          <ChangeLanguageLi>
            <h3>DE</h3>
          </ChangeLanguageLi>
          <ChangeLanguageLi className={isClicked ? "show" : "hide"}>
            <Link to={name}>EN</Link>
          </ChangeLanguageLi>
        </ChangeLanguageUl>
        <HamburgerMenuNav>
          <HamburgerMenuNavButton onClick={handleMenuOpen}>
            <HamburgerMenuNavImg src={HamburgerMenu} alt="" />
          </HamburgerMenuNavButton>

          <HamburgerMenuWrapper
            onClick={handleMenuClose}
            isopen={isOpen ? "true" : "false"}
          >
            <HamburgerMenuContent>
              <ContainerLogo>
                <Link to="/de">
                  <img src={Logo} alt="logo" />
                </Link>
                <HeroLink to="/de">Hero</HeroLink>
              </ContainerLogo>
              <CloseButton>
                <ImgClose src={ButtonClose} alt="Button" />
              </CloseButton>
              <MenuList onClick={handleListClick}>
                <li>
                  <StyledLink
                    href="../../SD_productionNow_React/#projects"
                    onClick={handleMenuClose}
                  >
                    Projekte
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    href="../../SD_productionNow_React/#services"
                    onClick={handleMenuClose}
                  >
                    Dienste
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    href="../../SD_productionNow_React/#team"
                    onClick={handleMenuClose}
                  >
                    Team
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    href="../../SD_productionNow_React/#contactus"
                    onClick={handleMenuClose}
                  >
                    Kontakt
                  </StyledLink>
                </li>
                <li>
                  <ChangeLanguageMobile>
                    <Link  onClick={handleMenuClose}>DE</Link>
                    <div />
                    <Link to={name}>EN</Link>
                  </ChangeLanguageMobile>
                </li>
              </MenuList>
            </HamburgerMenuContent>
          </HamburgerMenuWrapper>
        </HamburgerMenuNav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={handleSvgClick}
          className={isClicked ? "open" : "close"}
        >
          <path
            d="M19 13L12 7L5 13"
            stroke="#FCFCFC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ChangeLanguage>
    </Header>
  );
};
