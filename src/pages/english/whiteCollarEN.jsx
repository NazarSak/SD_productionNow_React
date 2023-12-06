import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
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
  TitleInTwoLine,
  TitleHTwo,
  TitleSpan,
  ImageFirst,
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

export const WhiteCollarEN = () => {
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
      <HeaderEN name={"/de/whiteCollar"} />
      <ScrollTrigger onEnter={handleEnterViewport}>
        <FirstSection className={`${isVisible ? "visible" : ""}`}>
          <TitleHThree>Business website</TitleHThree>
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
            <TitleInTwoLine>
              About <TitleSpan>Project</TitleSpan>
            </TitleInTwoLine>
            <ParagraphAbProject>
              Developing and implementing Agile methods in the strategic
              management of a corporation is crucial in today's rapidly changing
              business environment. Traditional strategic management approaches
              often struggle to keep pace with the dynamic nature of markets,
              customer preferences, and emerging technologies.
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
                Consider website architecture for maximum conversion.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>
                Properly arrange content on the site for easy perception by the
                user.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>
                Select high-quality visual and text content.
              </ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Increase the number of new users of the product using the
                website.
              </ParagraphGoals>
            </Li>
          </List>
        </ThirdSection>
      </ScrollTrigger>
      <OptimisatorImg src={ImagePeople} alt="image" ImageType={ImageFirst} />

      <FourthSection>
        <TitleHTwo>
          Main <TitleSpan>Page</TitleSpan>
        </TitleHTwo>
        <ConatinerImg>
          <OptimisatorImg src={Banner} alt="image" ImageType={NaturalFoodImg} />
          <OptimisatorImg
            src={screnshot}
            alt="image"
            ImageType={SecondNaturalFoodImg}
          />
        </ConatinerImg>
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <FifthSection>
        <FirstConatinerInternalImg>
          <TitleHTwo>
            Internal <TitleSpan>Pages</TitleSpan>
          </TitleHTwo>

          <OptimisatorImg
            src={InternalOne}
            alt="image"
            ImageType={InternalImgOne}
          />
          <OptimisatorImg
            src={InternalTwo}
            alt="image"
            ImageType={InternalImgSecond}
          />
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
          <OptimisatorImg
            src={InternalThree}
            alt="image"
            ImageType={InternalImgThree}
          />
          <OptimisatorImg
            src={InternalFour}
            alt="image"
            ImageType={InternalImgFour}
          />
          <OptimisatorImg
            src={InternalFive}
            alt="image"
            ImageType={InternalImgFive}
          />
        </SecondConatinerInternalImg>
      </FifthSection>

      <SixthSection>
        <LinkArrow to="/en/organicShop" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Previous
        </LinkArrow>

        <LinkArrow to="/en/briliniStudio" onClick={handleClick}>
          Next
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsEN />
      <FooterEN />
    </main>
  );
};
