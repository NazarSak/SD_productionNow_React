import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderDE } from "../../components/header/HeaderDE";
import { ConectUsDE } from "../../components/conectUs/conectUsDE";
import { FooterDE } from "../../components/footer/FooterDE";
import homeOne from "../../assets/img/pagesShop/homeOne.png";
import homeTwo from "../../assets/img/pagesShop/homeTwo.png";
import Logo from "../../assets/svg/pagesShop/Logo.svg";
import OptimisatorImg from "../../technical/OptimisatorImg";
import imageOne from "../../assets/img/pagesShop/imageOne.png";
import imageTwo from "../../assets/img/pagesShop/imageTwo.png";
import Video from "../../assets/video/pages_shop.mp4";
import InternalOne from "../../assets/img/pagesShop/InternalOne.png";
import InternalTwo from "../../assets/img/pagesShop/InternalTwo.png";
import InternalThree from "../../assets/img/pagesShop/InternalThree.png";
import InternalFour from "../../assets/img/pagesShop/InternalFour.png";
import InternalFive from "../../assets/img/pagesShop/InternalFive.png";
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
  TitleHTwo,
  TitlePage,
  TitleMain,
  InternalTitle,
  SvgImgContainer,
  SvgImg,
  TitleSpan,
  ImageFirst,
  ImageHandshake,
  ParagraphAbProject,
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
} from "../styles/pagesShop.styled";

export const PagesShopDE = () => {
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
      <HeaderDE name={"/en/pagesShop"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Online Geschäft</TitleHThree>
          <TitlePage>
            Pages <TitleSpan>shop</TitleSpan>
          </TitlePage>
        </FirstSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <ImageFirst
          className={`${isVisibleOne ? "visible" : ""}`}
          src={homeOne}
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
              Das literarische Paradies in der Online-Welt! Das Unternehmen ist
              auf den Verkauf von Büchern aller Genres und Gattungen
              spezialisiert. Die Sammlung umfasst Tausende von Werken, von
              Klassikern bis zu modernen Bestsellern.
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
                Erstellen Sie ein stilvolles und werbewirksames Website-Design
                im IKEA-Stil.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>
                Steigerung der Zahl der Neukunden, die die Website nutzen.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>
                Hervorhebung des hohen Niveaus der Marke auf der Website
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Entwicklung einer angepassten Version für die Bestellung über
                ein Smartphone.
              </ParagraphGoals>
            </Li>
          </List>
        </ThirdSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportFour}>
        <ImageHandshake
          className={`${isVisibleFour ? "visible" : ""}`}
          src={homeTwo}
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
              src={imageOne}
              alt="image"
              ImageType={NaturalFoodImg}
            />
            <OptimisatorImg
              src={imageTwo}
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
            <InternalTitle className={`${isVisibleSeven ? "visible" : ""}`}>
              Interne <TitleSpan>Seiten</TitleSpan>
            </InternalTitle>
          </ScrollTrigger>

          <ScrollTrigger onEnter={handleEnterViewportEight}>
            <InternalImgOne
              className={`${isVisibleEight ? "visible" : ""}`}
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

          <ScrollTrigger onEnter={handleEnterViewportTen}>
            <InternalImgThree
              className={`${isVisibleTen ? "visible" : ""}`}
              src={InternalThree}
              alt="image"
            />
          </ScrollTrigger>
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
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
        <LinkArrow to="/de/abi" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/organicShop" onClick={handleClick}>
          Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>{" "}
      <ConectUsDE />
      <FooterDE />
    </main>
  );
};
