import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
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

export const HeaderEN = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'hidden';
    } 
    return () => {
      document.body.style.position = 'unset';
      document.body.style.overflowY = 'unset';
    };
  }, [isOpen]);



  const handleEnterViewport = () => {
    setIsVisible(true);
  };

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = (hash,e) => {
    if (e && e.target instanceof HTMLAnchorElement) { 
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => {
      setIsOpen(false);
   
      if (hash) {
        const element = document.getElementById(hash);
  
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        const basePath = window.location.pathname.split(
          "/SD_productionNow_React"
        )[0]; 
        const newPath = `${basePath}/#${hash}`;
  
        navigate(newPath);
      }
   
    }, 0);
  }
      document.body.style.position = 'unset';
      document.body.style.overflowY = 'unset';
  };

  const handleClose = () => { 
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

  const handle = (hash) => {
    const element = document.getElementById(hash);

    if (hash && element) {
      element.scrollIntoView({ behavior: "smooth" });

      navigate(window.location.pathname);
    }
  };
 
  return (
    <ScrollTrigger onEnter={handleEnterViewport}>
      <Header className={`${isVisible ? "visible" : ""}`}>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
 
        <Navigator>
          <NavigatorLi>
            <StyledLink onClick={() => handle("projects")} to="/#projects">
              Projects
            </StyledLink>
          </NavigatorLi>
          <NavigatorLi>
            <StyledLink onClick={() => handle("services")} to="/#services">
              Services
            </StyledLink>
          </NavigatorLi>
          <NavigatorLi>
            <StyledLink onClick={() => handle("team")} to="/#team">
              Team
            </StyledLink>
          </NavigatorLi>
          <NavigatorLi>
            <StyledLink onClick={() => handle("contactus")} to="/#contactus">
              Contact us
            </StyledLink>
          </NavigatorLi>
        </Navigator>
        <ChangeLanguage>
          <ChangeLanguageUl>
            <ChangeLanguageLi>
              <h3>EN</h3>
            </ChangeLanguageLi>
            <ChangeLanguageLi className={isClicked ? "show" : "hide"}>
              <Link to={name}>DE</Link>
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
                  <Link to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                  <HeroLink to="/">Hero</HeroLink>
                </ContainerLogo>
                <CloseButton onClick={handleClose}>
                  <ImgClose src={ButtonClose} alt="Button" />
                </CloseButton>
                <MenuList onClick={handleListClick}>
                  <li>
                    <StyledLink
                      onClick={(e) => handleMenuClose("projects",e)}
                      to="/"
                    >
                      Projects
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      onClick={(e) => handleMenuClose("services",e)}
                      to="/"
                    >
                      Services
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink onClick={(e) => handleMenuClose("team",e)} to="/">
                      Team
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink
                      onClick={(e) => handleMenuClose("contactus",e)}
                      to="/"
                    >
                      Contact us
                    </StyledLink>
                  </li>
                  <li>
                    <ChangeLanguageMobile>
                      <Link onClick={handleMenuClose}>EN</Link>
                      <div />
                      <Link to={name}>DE</Link>
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
    </ScrollTrigger>
  );
};
