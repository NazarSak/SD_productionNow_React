import React from "react";
// import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";
import ImgPictire from "../../assets/img/organicShop/Background.png";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
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
  NumberOfList
} from "../styles/organicShop.styled";

export const OrganicShopEN = () => {
  return (
    <main>
      <HeaderEN />

      <FirstSection>
        <TitleHThree>Online Shop</TitleHThree>
        <TitleHTwo>
          Organic <TitleSpan>shop</TitleSpan>
        </TitleHTwo>
      </FirstSection>

      <ImageFirst src={ImgPictire} alt="aa" />

      <SecondSection>
        <TitleHTwo>
          About <TitleSpan>Project</TitleSpan>
        </TitleHTwo>
        <ParagraphAbProject>
          Organick is an online store of organic fruits, vegetables and berries.
          The customer is a farmer from England. Organick has its farms in
          Sheffield. The total amount of fields is more than 27770m&sup2 and
          more than 5 thousand satisfied customers annually.
        </ParagraphAbProject>
      </SecondSection>

      <ThirdSection>
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
    </main>
  );
};
