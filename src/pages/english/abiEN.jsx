import React from "react";
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
  TitleHTwo,
  TitleSpan,
  ImageFirst,
  ParagraphAbProject,
  ParagraphGoals,
  List,
  Li,
  NumberOfList,
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

export const AbiEN = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderEN name={"/de/abi"} />
      <FirstSection>
        <TitleHThree>Mobile App</TitleHThree>
        <TitleHTwo>Abi</TitleHTwo>
      </FirstSection>

      <OptimisatorImg src={BackgroundOne} alt="image" ImageType={ImageFirst} />

      <SecondSection>
        <div>
          <TitleHTwo>
            About <TitleSpan>Project</TitleSpan>
          </TitleHTwo>
          <ParagraphAbProject>
            The mobile presentation app, enriched with AI capabilities, provides
            a unique experience in designing perfect presentations. You no
            longer need to spend a lot of time creating slides from scratch, as
            a rich collection of ready-made templates is provided.
          </ParagraphAbProject>
        </div>

        <Line />

        <OptimisatorImg src={Logo} alt="image" ImageType="img" />
      </SecondSection>

      <ThirdSection>
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

      <OptimisatorImg src={BackgroundTwo} alt="image" ImageType={ImageFirst} />

      <FifthSection>
        <FirstConatinerInternalImg>
          <TitleHTwo>
            App <TitleSpan>Pages</TitleSpan>
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
