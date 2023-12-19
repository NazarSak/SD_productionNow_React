import React, { useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";

import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
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
  TitleMain,
  TitlePage,
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
import useSmoothScroll from "../../components/smoooth-scroll/smoth-scroll";

export const PagesShopEN = () => {
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
      <HeaderEN name={"/de/pagesShop"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Online Shop</TitleHThree>
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
              About <TitleSpan>Project</TitleSpan>
            </TitleHTwo>
            <ParagraphAbProject>
              Literary paradise in the online world! The company specializes in
              selling books of all genres and genres. The collection includes
              thousands of works from classics to modern bestsellers.
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
            Goals and <TitleSpan>Objectives</TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <NumberOfList>1</NumberOfList>
              <ParagraphGoals>
                Create a stylish and selling website design in IKEA style.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>
                Increase the number of new clients using the website.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>
                Emphasize the high level of the brand using the website
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Develop an adapted version for ordering from a smartphone.
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
            Main <TitleSpan>Page</TitleSpan>
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
              Internal <TitleSpan>Pages</TitleSpan>
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
        <LinkArrow to="/en/abi" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Previous
        </LinkArrow>

        <LinkArrow to="/en/organicShop" onClick={handleClick}>
          Next
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsEN />
      <FooterEN />
    </main>
  );
};
