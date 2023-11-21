import React from "react";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
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
  TitleSpan,
  ImageFirst,
  ParagraphAbProject,
  SvgImg,
  ParagraphGoals,
  List,
  Li,
  NumberOfList,
  Line,
  NaturalFoodImg,
  SecondNaturalFoodImg,
  ConatinerImg,
  Arrow,
  LinkArrow,
} from "../styles/briliniStudio.styled";

export const BriliniStudioEN = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderEN name={"/de/briliniStudio"} />
      <FirstSection>
        <TitleHThree>Landing page</TitleHThree>
        <TitlePage>
          Brilini <TitleSpan>Studio</TitleSpan>
        </TitlePage>
      </FirstSection>
      <OptimisatorImg src={house} alt="image" ImageType={ImageFirst} />
      <SecondSection>
        <div>
          <TitleHTwo>
            About <TitleSpan>Project</TitleSpan>
          </TitleHTwo>
          <ParagraphAbProject>
            The interior design studio specializes in creating modern and
            laconic interiors for residential premises, apartments and houses.
            Brilini Studio pays special attention to detail and functionality to
            ensure clients feel comfortable and practical in every space we
            create.
          </ParagraphAbProject>
        </div>

        <Line />

        <OptimisatorImg src={Logo} alt="image" ImageType={SvgImg} />
      </SecondSection>
      <ThirdSection>
        <TitleHTwo>
          Goals and <TitleSpan>Objectives</TitleSpan>
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
              Increase the number of new customers through the website.
            </ParagraphGoals>
          </Li>
          <Li>
            <NumberOfList>3</NumberOfList>
            <ParagraphGoals>
              Develop a convenient adaptive version of the website.
            </ParagraphGoals>
          </Li>
          <Li>
            <NumberOfList>4</NumberOfList>
            <ParagraphGoals>
              Create a convenient and understandable website for customers of
              different ages.
            </ParagraphGoals>
          </Li>
        </List>
      </ThirdSection>
      <OptimisatorImg src={cafe} alt="image" ImageType={ImageFirst} />
      <FourthSection>
        <TitleHTwo>
          Main <TitleSpan>Page</TitleSpan>
        </TitleHTwo>
        <ConatinerImg>
          <OptimisatorImg src={Group} alt="image" ImageType={NaturalFoodImg} />
          <OptimisatorImg
            src={landing}
            alt="image"
            ImageType={SecondNaturalFoodImg}
          />
        </ConatinerImg>
      </FourthSection>
      <video width="100%" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <SixthSection>
        <LinkArrow to="/en/whiteCollar" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Previous
        </LinkArrow>

        <LinkArrow to="/en/abi" onClick={handleClick}>
          Next
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>{" "}
      <ConectUsEN />
      <FooterEN />
    </main>
  );
};
