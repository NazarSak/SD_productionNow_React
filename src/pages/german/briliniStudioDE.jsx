import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderDE } from "../../components/header/HeaderDE";
import { ConectUsDE } from "../../components/conectUs/conectUsDE";
import { FooterDE } from "../../components/footer/FooterDE";
import house from "../../assets/img/briliniStudio/house.png";
import Logo from "../../assets/svg/briliniStudio/Logo.svg";
import OptimisatorImg from "../../technical/OptimisatorImg";
import cafe from "../../assets/img/briliniStudio/cafe.png";
import Group from "../../assets/img/briliniStudio/Group.png";
import landing from "../../assets/img/briliniStudio/landing.png";
import Video from "../../assets/video/brilini_studio.mp4";
import RightArrow from "../../assets/img/rightArrow.png";
import LeftArrow from "../../assets/img/leftArrow.png";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  SixthSection,
} from "../styles/General/section.styled";
import {
  TitleHThree,
  TitlePage,
  TitleHTwo,
  TitleMain,
  TitleSpan,
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
  Arrow,
  LinkArrow,
} from "../styles/briliniStudio.styled";
import useSmoothScroll from "../../components/smoooth-scroll/smoth-scroll";

export const BriliniStudioDE = () => {
  const {
    isVisible,
    isVisibleOne,
    isVisibleTwo,
    isVisibleThree,
    isVisibleFour,
    isVisibleFive,
    isVisibleSix,
    handleEnterViewport,
    handleEnterViewportOne,
    handleEnterViewportTwo,
    handleEnterViewportThree,
    handleEnterViewportFour,
    handleEnterViewportFive,
    handleEnterViewportSix,
  } = AnimationState();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useSmoothScroll()

  return (
    <main>
      <HeaderDE name={"/en/briliniStudio"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Landing page</TitleHThree>
          <TitlePage>
            Brilini <TitleSpan>Studio</TitleSpan>
          </TitlePage>
        </FirstSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <ImageFirst
          className={`${isVisibleOne ? "visible" : ""}`}
          src={house}
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
              Das Innenarchitekturstudio ist auf die Gestaltung moderner und
              lakonischer Innenräume für Wohnräume, Wohnungen und Häuser
              spezialisiert. Brilini Studio legt besonderen Wert auf Details und
              Funktionalität, um sicherzustellen, dass sich die Kunden in jedem
              von uns geschaffenen Raum wohlfühlen und praktisch sind.
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
                Create a stylish and consistent website design.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>
                die Zahl der Neukunden über die Website zu erhöhen.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>
                Entwicklung einer praktischen adaptiven Version der Website.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Erstellen Sie eine praktische Website für jeden Kunden.
              </ParagraphGoals>
            </Li>
          </List>
        </ThirdSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportFour}>
        <ImageFirstHandShake
          className={`${isVisibleFour ? "visible" : ""}`}
          src={cafe}
          alt="image"
        />
      </ScrollTrigger>
      <FourthSection>
        <ScrollTrigger onEnter={handleEnterViewportFive}>
          <TitleMain className={`${isVisibleFive ? "visible" : ""}`}>
            Haupt <TitleSpan>Seite</TitleSpan>
          </TitleMain>
        </ScrollTrigger>

        <ScrollTrigger onEnter={handleEnterViewportSix}>
          <ConatinerImg className={`${isVisibleSix ? "visible" : ""}`}>
            <OptimisatorImg
              src={Group}
              alt="image"
              ImageType={NaturalFoodImg}
            />
            <OptimisatorImg
              src={landing}
              alt="image"
              ImageType={SecondNaturalFoodImg}
            />
          </ConatinerImg>
        </ScrollTrigger>
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <SixthSection>
        <LinkArrow to="/de/whiteCollar" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/abi" onClick={handleClick}>
          Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsDE />
      <FooterDE />
    </main>
  );
};
