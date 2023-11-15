import React from "react";
import { HeaderDE } from "../../components/header/HeaderDE";
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
  InternalImg,
  SecondConatinerInternalImg,
  InternalImgLast,
  Arrow,
  LinkArrow,
} from "../styles/organicShop.styled";

export const OrganicShopDE = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <HeaderDE name={"/en/organicShop"} />

      <FirstSection>
        <TitleHThree>Online Geschäft</TitleHThree>
        <TitleHTwo>
          Bio<TitleSpan>Laden</TitleSpan>
        </TitleHTwo>
      </FirstSection>

      <OptimisatorImg src={ImgPictire} alt="image" ImageType={ImageFirst} />

      <SecondSection>
        <div>
          <TitleHTwo>
            Über <TitleSpan>Projekt</TitleSpan>
          </TitleHTwo>
          <ParagraphAbProject>
            Organick ist ein Online-Shop für Bio-Obst, -Gemüse und -Beeren. Der
            Kunde ist ein Landwirt aus England. Organick hat seine Farmen in
            Sheffield. Die Gesamtmenge der Felder ist mehr als 27770m^2 und mehr
            als 5 tausend zufriedene Kunden jährlich.
          </ParagraphAbProject>
        </div>

        <Line />

        <OptimisatorImg src={OrganicSvg} alt="image" ImageType="img" />
      </SecondSection>

      <ThirdSection>
        <TitleHTwo>
          Ziele und<TitleSpan>Zielsetzungen</TitleSpan>
        </TitleHTwo>
        <List>
          <Li>
            <NumberOfList>1</NumberOfList>
            <ParagraphGoals>
              Erstellen Sie ein stilvolles und verkaufsförderndes Website-Design
              im Öko-Stil.
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

      <OptimisatorImg src={handshake} alt="image" ImageType={ImageFirst} />

      <FourthSection>
        <TitleHTwo>
          Haupt <TitleSpan>Seite</TitleSpan>
        </TitleHTwo>
        <ConatinerImg>
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
      </FourthSection>

      <video width="100%" autoPlay muted loop>
        <source src={VideoOrgainc} type="video/mp4" />
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
        </FirstConatinerInternalImg>

        <SecondConatinerInternalImg>
          <OptimisatorImg
            src={InternalThree}
            alt="image"
            ImageType={InternalImg}
          />
          <OptimisatorImg
            src={InternalFour}
            alt="image"
            ImageType={InternalImg}
          />
          <OptimisatorImg
            src={InternalFive}
            alt="image"
            ImageType={InternalImgLast}
          />
        </SecondConatinerInternalImg>
      </FifthSection>

      <SixthSection>
        <LinkArrow to="/de/pagesShop" onClick={handleClick}>
          <OptimisatorImg src={LeftArrow} alt="image" ImageType={Arrow} />
          Vorherige
        </LinkArrow>

        <LinkArrow to="/de/whiteCollar" onClick={handleClick}>
        Weiter
          <OptimisatorImg src={RightArrow} alt="image" ImageType={Arrow} />
        </LinkArrow>
      </SixthSection>
    </main>
  );
};
