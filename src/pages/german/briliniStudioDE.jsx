import React from "react";
import { HeaderEN } from "../../components/header/HeaderEN";
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
  TitleHTwo,
  TitleSpan,
  ImageFirst,
  ParagraphAbProject,
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

export const BriliniStudioDE = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderEN name={"/en/briliniStudio"} />

      <FirstSection>
        <TitleHThree>Landing page</TitleHThree>
        <TitleHTwo>
          Brilini <TitleSpan>Studio</TitleSpan>
        </TitleHTwo>
      </FirstSection>

      <OptimisatorImg src={house} alt="image" ImageType={ImageFirst} />

      <SecondSection>
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

        <Line />

        <OptimisatorImg src={Logo} alt="image" ImageType="img" />
      </SecondSection>

      <ThirdSection>
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

      <OptimisatorImg src={cafe} alt="image" ImageType={ImageFirst} />

      <FourthSection>
        <TitleHTwo>
          Haupt <TitleSpan>Seite</TitleSpan>
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
        <LinkArrow to="/de/whiteCollar" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/abi" onClick={handleClick}>
        Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
    </main>
  );
};
