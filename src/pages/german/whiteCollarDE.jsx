import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderDE } from "../../components/header/HeaderDE";
import { ConectUsDE } from "../../components/conectUs/conectUsDE";
import { FooterDE } from "../../components/footer/FooterDE";
import handshakes from "../../assets/img/whiteCollar/handshakes.png";
import Logo from "../../assets/svg/whiteCollar/Logo.svg";
import OptimisatorImg from "../../technical/OptimisatorImg";
import ImagePeople from "../../assets/img/whiteCollar/ImagePeople.png";
import Banner from "../../assets/img/whiteCollar/Banner.png";
import screnshot from "../../assets/img/whiteCollar/screnshot.png";
import Video from "../../assets/video/white_collar.mp4";
import InternalOne from "../../assets/img/whiteCollar/internalOne.png";
import InternalTwo from "../../assets/img/whiteCollar/internalTwo.png";
import InternalThree from "../../assets/img/whiteCollar/internalThree.png";
import InternalFour from "../../assets/img/whiteCollar/internalFour.png";
import InternalFive from "../../assets/img/whiteCollar/internalFive.png";
import RightArrow from "../../assets/img/rightArrow.png";
import LeftArrow from "../../assets/img/leftArrow.png";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from "../styles/General/section.styled";
import {
  TitleHThree,
  TitlePage,
  TitleHTwo,
  TitleMain,
  TitleSpan,
  TitleInternal,
  ImageFirst,
  ImageFirstHandShake,
  ParagraphAbProject,
  SvgImgContainer,
  SvgImg,
  ParagraphGoals,
  List,
  Li,
  NumberOfList,
  ContainerLine,
  Line,
  NaturalFoodImg,
  SecondNaturalFoodImg,
  ConatinerImg,
  FirstConatinerInternalImg,
  InternalImgOne,
  InternalImgSecond,
  InternalImgThree,
  InternalImgFour,
  InternalImgFive,
  SecondConatinerInternalImg,
  Arrow,
  LinkArrow,
} from "../styles/whiteCollar.styled";
import useSmoothScroll from "../../components/smoooth-scroll/smoth-scroll";

export const WhiteCollarDE = () => {
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

  useSmoothScroll()
  
  return (
    <main>
      <HeaderDE name={"/en/whiteCollar"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Geschäftliche Website</TitleHThree>
          <TitlePage>
            White <TitleSpan>Collar</TitleSpan>
          </TitlePage>
        </FirstSection>
      </ScrollTrigger>

      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <ImageFirst
          className={`${isVisibleOne ? "visible" : ""}`}
          src={handshakes}
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
              Die Entwicklung und Umsetzung agiler Methoden für das strategische
              Management eines Unternehmens ist in der heutigen, sich schnell
              verändernden Geschäftswelt von entscheidender Bedeutung.
              Traditionelle strategische Managementansätze haben oft
              Schwierigkeiten, mit der Dynamik der Märkte, den Kundenpräferenzen
              und den neuen Technologien Schritt zu halten.
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
                Berücksichtigen Sie die Website-Architektur für eine maximale
                Konversion.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>
                Ordnen Sie die Inhalte auf der Website so an, dass sie für den
                Nutzer leicht zu erkennen sind.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>
                Wählen Sie hochwertige Bild- und Textinhalte aus.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Erhöhung der Zahl der neuen Nutzer des Produkts auf der Website.
              </ParagraphGoals>
            </Li>
          </List>
        </ThirdSection>
      </ScrollTrigger>

      <ScrollTrigger onEnter={handleEnterViewportFour}>
        <ImageFirstHandShake
          className={`${isVisibleTwo ? "visible" : ""}`}
          src={ImagePeople}
          alt="image"
        />
      </ScrollTrigger>
      <FourthSection>
        <ScrollTrigger onEnter={handleEnterViewportFive}>
          <TitleMain className={`${isVisibleTwo ? "visible" : ""}`}>
            Haupt <TitleSpan>Seite</TitleSpan>
          </TitleMain>
        </ScrollTrigger>

        <ScrollTrigger onEnter={handleEnterViewportSix}>
          <ConatinerImg className={`${isVisibleSix ? "visible" : ""}`}>
            <OptimisatorImg
              src={Banner}
              alt="image"
              ImageType={NaturalFoodImg}
            />
            <OptimisatorImg
              src={screnshot}
              alt="image"
              ImageType={SecondNaturalFoodImg}
            />
          </ConatinerImg>
        </ScrollTrigger>
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <FifthSection>
        <FirstConatinerInternalImg>
          <ScrollTrigger onEnter={handleEnterViewportSeven}>
            <TitleInternal className={`${isVisibleSeven ? "visible" : ""}`}>
              Interne <TitleSpan>Seiten</TitleSpan>
            </TitleInternal>
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportEight}>
            <InternalImgOne
              className={`${isVisibleSeven ? "visible" : ""}`}
              src={InternalOne}
              alt="image"
            />
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportNine}>
            <InternalImgSecond
              className={`${isVisibleNine ? "visible" : ""}`}
              src={InternalTwo}
              alt="image"
            />
          </ScrollTrigger>
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
          <ScrollTrigger onEnter={handleEnterViewportTen}>
            <InternalImgThree
              className={`${isVisibleTen ? "visible" : ""}`}
              src={InternalThree}
              alt="image"
            />
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportPartOne}>
            <InternalImgFour
              className={`${isVisiblePartOne ? "visible" : ""}`}
              src={InternalFour}
              alt="image"
            />
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportPartTwo}>
            <InternalImgFive
              className={`${isVisiblePartTwo ? "visible" : ""}`}
              src={InternalFive}
              alt="image"
            />
          </ScrollTrigger>
        </SecondConatinerInternalImg>
      </FifthSection>

      <SixthSection>
        <LinkArrow to="/de/organicShop" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/briliniStudio" onClick={handleClick}>
          Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsDE />
      <FooterDE />
    </main>
  );
};
