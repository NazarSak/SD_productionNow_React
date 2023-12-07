import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderDE } from "../../components/header/HeaderDE";
import { ConectUsDE } from "../../components/conectUs/conectUsDE";
import { FooterDE } from "../../components/footer/FooterDE";
import BackgroundOne from "../../assets/img/abi/BackgroundOne.png";
import BackgroundTwo from "../../assets/img/abi/BackgroundTwo.png";
import Logo from "../../assets/svg/abi/logo.svg";
import OptimisatorImg from "../../technical/OptimisatorImg";
import Video from "../../assets/video/abi.mp4";
import InternalOne from "../../assets/img/abi/InternalOne.png";
import InternalTwo from "../../assets/img/abi/InternalTwo.png";
import InternalThree from "../../assets/img/abi/InternalThree.png";
import InternalFour from "../../assets/img/abi/InternalFour.png";
import InternalFive from "../../assets/img/abi/InternalFive.png";
import RightArrow from "../../assets/img/rightArrow.png";
import LeftArrow from "../../assets/img/leftArrow.png";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FifthSection,
  SixthSection,
} from "../styles/General/section.styled";
import {
  TitleHThree,
  TitlePage,
  TitleHTwo,
  TitleSpan,
  AppTitle,
  ImageFirst,
  ImageFirstHandShake,
  ParagraphAbProject,
  SvgImgContainer,
  SvgImg,
  ParagraphGoals,
  List,
  Li,
  NumberOfList,
  Line,
  ContainerLine,
  FirstConatinerInternalImg,
  InternalImgOne,
  InternalImgSecond,
  InternalImgThree,
  InternalImgFour,
  InternalImgFive,
  SecondConatinerInternalImg,
  Arrow,
  LinkArrow,
  VideoContainer,
} from "../styles/abi.styled";

export const AbiDE = () => {
  const {
    isVisible,
    isVisibleOne,
    isVisibleTwo,
    isVisibleThree,
    isVisibleFour,
    isVisibleFive,
    isVisibleSix,
    isVisibleSeven,
    isVisibleEight,
    isVisibleNine,
    isVisibleTen,
    isVisiblePartOne,
    isVisiblePartTwo,
    handleEnterViewport,
    handleEnterViewportOne,
    handleEnterViewportTwo,
    handleEnterViewportThree,
    handleEnterViewportFour,
    handleEnterViewportFive,
    handleEnterViewportSix,
    handleEnterViewportSeven,
    handleEnterViewportEight,
    handleEnterViewportNine,
    handleEnterViewportTen,
    handleEnterViewportPartOne,
    handleEnterViewportPartTwo,
  } = AnimationState();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderDE name={"/en/abi"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Mobile App</TitleHThree>
          <TitlePage>Abi</TitlePage>
        </FirstSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <ImageFirst
          className={`${isVisibleOne ? "visible" : ""}`}
          src={BackgroundOne}
          alt="image"
        />
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportTwo}>
        <SecondSection className={`${isVisibleTwo ? "visible" : ""}`}>
          <div>
            <TitleHTwo>
              Über <TitleSpan>Projekt</TitleSpan>
            </TitleHTwo>
            <ParagraphAbProject>
              Die mobile Präsentations-App, angereichert mit KI-Funktionen,
              bietet eine einzigartige Erfahrung bei der Gestaltung perfekter
              Präsentationen. Sie müssen nicht mehr viel Zeit damit verbringen,
              Folien von Grund auf neu zu erstellen, da eine reichhaltige
              Sammlung von vorgefertigten Vorlagen zur Verfügung steht.
            </ParagraphAbProject>
          </div>
          <ContainerLine>
            <Line />
          </ContainerLine>
          <SvgImgContainer>
            <OptimisatorImg src={Logo} alt="image" ImageType={SvgImg} />
          </SvgImgContainer>
        </SecondSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportThree}>
        <ThirdSection className={`${isVisibleThree ? "visible" : ""}`}>
          <TitleHTwo>
            Ziele und <TitleSpan>Zielsetzungen</TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <NumberOfList>1</NumberOfList>
              <ParagraphGoals>
                Erstellen Sie eine elegante Anwendung.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>
                Entwickeln Sie Präsentationsvorlagen.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>
                Schaffen Sie ein einfach zu verwendendes Produkt.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Entwickeln Sie Themen für jeden Benutzerwunsch.
              </ParagraphGoals>
            </Li>
          </List>
        </ThirdSection>
      </ScrollTrigger>

      <ScrollTrigger onEnter={handleEnterViewportFour}>
        <ImageFirstHandShake
          className={`${isVisibleTwo ? "visible" : ""}`}
          src={BackgroundTwo}
          alt="image"
        />
      </ScrollTrigger>
      <FifthSection>
        <FirstConatinerInternalImg>
          <ScrollTrigger onEnter={handleEnterViewportFive}>
            <AppTitle className={`${isVisibleTwo ? "visible" : ""}`}>
              App <TitleSpan>Seiten</TitleSpan>
            </AppTitle>
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportSix}>
            <InternalImgOne
              className={`${isVisibleSix ? "visible" : ""}`}
              src={InternalOne}
              alt="image"
            />
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportSeven}>
            <InternalImgSecond
              className={`${isVisibleSeven ? "visible" : ""}`}
              src={InternalTwo}
              alt="image"
            />
          </ScrollTrigger>
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
          <ScrollTrigger onEnter={handleEnterViewportEight}>
            <InternalImgThree
              className={`${isVisibleEight ? "visible" : ""}`}
              src={InternalThree}
              alt="image"
            />
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportNine}>
            <InternalImgFour
              className={`${isVisibleNine ? "visible" : ""}`}
              src={InternalFour}
              alt="image"
            />
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportTen}>
            <InternalImgFive
              className={`${isVisibleTen ? "visible" : ""}`}
              src={InternalFive}
              alt="image"
            />
          </ScrollTrigger>
        </SecondConatinerInternalImg>
      </FifthSection>
      <VideoContainer>
        <video width="100%" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </VideoContainer>
      <SixthSection>
        <LinkArrow to="/de/briliniStudio" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/pagesShop" onClick={handleClick}>
          Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsDE />
      <FooterDE />
    </main>
  );
};
