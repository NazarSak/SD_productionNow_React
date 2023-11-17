import React from "react";
import { HeaderEN } from "../../components/header/HeaderEN";
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
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderEN name={"/en/pagesShop"} />

      <FirstSection>
        <TitleHThree>Online Geschäft</TitleHThree>
        <TitleHTwo>
          Pages <TitleSpan>shop</TitleSpan>
        </TitleHTwo>
      </FirstSection>

      <OptimisatorImg src={homeOne} alt="image" ImageType={ImageFirst} />

      <SecondSection>
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
              Erstellen Sie ein stilvolles und werbewirksames Website-Design im
              IKEA-Stil.
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
              Entwicklung einer angepassten Version für die Bestellung über ein
              Smartphone.
            </ParagraphGoals>
          </Li>
        </List>
      </ThirdSection>

      <OptimisatorImg src={homeTwo} alt="image" ImageType={ImageFirst} />

      <FourthSection>
        <TitleHTwo>
          Haupt <TitleSpan>Seite</TitleSpan>
        </TitleHTwo>
        <ConatinerImg>
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
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <FifthSection>
        <FirstConatinerInternalImg>
          <TitleHTwo>
            Interne <TitleSpan>Seiten</TitleSpan>
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
          <OptimisatorImg
            src={InternalThree}
            alt="image"
            ImageType={InternalImgThree}
          />
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
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
        <LinkArrow to="/de/abi" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/organicShop" onClick={handleClick}>
          Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
    </main>
  );
};
