import React, { useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../assets/svg/HamburgerMenu.svg";
import ButtonClose from "../../assets/svg/emailPage/Close.svg";

import {
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
    setIsOpen(false);
  };

  const handleSvgClick = () => {
    if (!isClicked) setIsClicked(true);
    else setIsClicked(false);
  };

  return (
    <Header>
      <div>
        <StyledLink to="/de">
          <img src={Logo} alt="logo" />
        </StyledLink>
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
         
            <HamburgerMenuWrapper isOpen={isOpen}>
              <HamburgerMenuContent>
                <StyledLink to="/">
                  <img src={Logo} alt="logo" />
                </StyledLink>
                <CloseButton onClick={handleMenuClose}>
                  <ImgClose src={ButtonClose} alt="Button" />
                </CloseButton>
                <MenuList>
                  <li>
                    <StyledLink href="../../SD_productionNow_React/#projects">
                      Projekte
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="../../SD_productionNow_React/#services">
                      Dienste
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="../../SD_productionNow_React/#team">
                      Team
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="../../SD_productionNow_React/#contactus">
                      Kontakt
                    </StyledLink>
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
