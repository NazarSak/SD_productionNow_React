import React, { useEffect } from "react";
import SmoothScroll from 'smooth-scroll';
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
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
  ContainerLine,
  Line,
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
import useSmoothScroll from "../../components/smoooth-scroll/smoth-scroll";


export const AbiEN = () => {
  
  useEffect(() => {
    const smoothScroll = new SmoothScroll({
      // Время скролла 1000 = 1 секунда
      animationTime: 1000,
      // Размер шага в пикселях
      stepSize: 75,

      // Дополнительные настройки:

      // Ускорение
      accelerationDelta: 30,
      // Максимальное ускорение
      accelerationMax: 2,

      // Поддержка клавиатуры
      keyboardSupport: true,
      // Шаг скролла стрелками на клавиатуре в пикселях
      arrowScroll: 50,

      // Pulse (less tweakable)
      // ratio of "tail" to "acceleration"
      pulseAlgorithm: true,
      pulseScale: 4,
      pulseNormalize: 1,

      // Поддержка тачпада
      touchpadSupport: true,
    });

    return () => {
      // Зупиняємо прокрутку при видаленні компонента (чистка пам'яті)
      smoothScroll.destroy();
    };
  }, []);
  
  
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
    <main onEnter={useSmoothScroll()}>
      <HeaderEN name={"/de/abi"} />
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
              About <TitleSpan>Project</TitleSpan>
            </TitleHTwo>
            <ParagraphAbProject>
              The mobile presentation app, enriched with AI capabilities,
              provides a unique experience in designing perfect presentations.
              You no longer need to spend a lot of time creating slides from
              scratch, as a rich collection of ready-made templates is provided.
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
              <ParagraphGoals>Create a stylish application.</ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>2</NumberOfList>
              <ParagraphGoals>Develop presentation templates.</ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>3</NumberOfList>
              <ParagraphGoals>Create an easy-to-use product.</ParagraphGoals>
            </Li>
            <Li>
              <NumberOfList>4</NumberOfList>
              <ParagraphGoals>
                Develop themes for any user request.
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
              App <TitleSpan>Pages</TitleSpan>
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
        <LinkArrow to="/en/briliniStudio" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Previous
        </LinkArrow>

        <LinkArrow to="/en/pagesShop" onClick={handleClick}>
          Next
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
      <ConectUsEN />
      <FooterEN />
    </main>
  );
};
