import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
import ImgPictire from "../../assets/img/organicShop/Background.png";
import OrganicSvg from "../../assets/svg/organicShop/organicLogo.svg";
import OptimisatorImg from "../../technical/OptimisatorImg";
import handshake from "../../assets/img/organicShop/Photo.png";
import PageOne from "../../assets/img/organicShop/pageOne.png";
import PageTwo from "../../assets/img/organicShop/pageTwo.png";
import VideoOrgainc from "../../assets/video/organic_shop.mp4";
import InternalOne from "../../assets/img/organicShop/InternalOne.png";
import InternalTwo from "../../assets/img/organicShop/InternalTwo.png";
import InternalThree from "../../assets/img/organicShop/InternalThree.png";
import InternalFour from "../../assets/img/organicShop/InternalFour.png";
import InternalFive from "../../assets/img/organicShop/InternalFive.png";
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
  TitleInTwoLine,
  TitleInternal,
  TitleMain,
  TitleHTwo,
  TitleSpan,
  ImageFirst,
  ImageHandshake,
  ParagraphAbProject,
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
  InternalImg,
  InternalImgFour,
  SecondConatinerInternalImg,
  InternalImgLast,
  Arrow,
  LinkArrow,
} from "../styles/organicShop.styled";

export const OrganicShopEN = () => {
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
      <HeaderEN name={"/de/organicShop"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Online Shop</TitleHThree>
          <TitlePage>
            Organic <TitleSpan>shop</TitleSpan>
          </TitlePage>
        </FirstSection>
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <ImageFirst
          className={`${isVisibleOne ? "visible" : ""}`}
          src={ImgPictire}
          alt="image"
        />
      </ScrollTrigger>
      <ScrollTrigger onEnter={handleEnterViewportTwo}>
        <SecondSection className={`${isVisibleTwo ? "visible" : ""}`}>
          <div>
            <TitleInTwoLine>
              About <TitleSpan>Project</TitleSpan>
            </TitleInTwoLine>
            <ParagraphAbProject>
              Organick is an online store of organic fruits, vegetables and
              berries. The customer is a farmer from England. Organick has its
              farms in Sheffield. The total amount of fields is more than 27770m{" "}
              <sup>2</sup> and more than 5 thousand satisfied customers
              annually.
            </ParagraphAbProject>
          </div>

          <ContainerLine>
            <Line />
          </ContainerLine>

          <OptimisatorImg src={OrganicSvg} alt="image" ImageType={SvgImg} />
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
                Create a stylish and selling website design in eco style.
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
          src={handshake}
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
              src={PageOne}
              alt="image"
              ImageType={NaturalFoodImg}
            />
            <OptimisatorImg
              src={PageTwo}
              alt="image"
              ImageType={SecondNaturalFoodImg}
            />
          </ConatinerImg>
        </ScrollTrigger>
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={VideoOrgainc} type="video/mp4" />
      </video>

      <FifthSection>
        <FirstConatinerInternalImg>
          <ScrollTrigger onEnter={handleEnterViewportSeven}>
            <TitleInternal className={`${isVisibleSeven ? "visible" : ""}`}>
              Internal <TitleSpan>Pages</TitleSpan>
            </TitleInternal>
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
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
          <ScrollTrigger onEnter={handleEnterViewportTen}>
            <InternalImg
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
            <InternalImgLast
              className={`${isVisiblePartTwo ? "visible" : ""}`}
              src={InternalFive}
              alt="image"
            />
          </ScrollTrigger>
        </SecondConatinerInternalImg>
      </FifthSection>

      <SixthSection>
        <LinkArrow to="/en/pagesShop" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Previous
        </LinkArrow>

        <LinkArrow to="/en/whiteCollar" onClick={handleClick}>
          Next
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsEN />
      <FooterEN />
    </main>
  );
};
