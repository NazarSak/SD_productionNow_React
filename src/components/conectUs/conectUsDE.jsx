import React, { useState, useEffect } from "react";
import { ModalkaDE } from "../modalka/ModalkaDE";
import CursorBlue from "../../assets/svg/contactUs/CursorBlue.svg";
import CursorRed from "../../assets/svg/contactUs/CursorRed.svg";
import CursorGreen from "../../assets/svg/contactUs/CursorGreen.svg";
import CursorPink from "../../assets/svg/contactUs/CursorPink.svg";
import CursorBLigh from "../../assets/svg/contactUs/CursorBlueLight.svg";
import CursorLPink from "../../assets/svg/contactUs/CursorLightPink.svg";
import CursorYellow from "../../assets/svg/contactUs/CursorYellow.svg";
import CursorOrange from "../../assets/svg/contactUs/CursorOrange.svg";
import {
  ContentUs,
  AdoutUs,
  ContainerPC,
  ContainerMobile,
  ContentUsBtn,
  Peoples,
  PeopleBlue,
  PeopleRed,
  PeopleGreen,
  PeoplePink,
  PeopleBlueLight,
  PeopleOrange,
  PeopleLightPink,
  PeopleYellow,
} from "./conectUs.styled"; 

export const ConectUsDE = () => {
  const [openModal, setOpenModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.position = "fixed";
  };

  return (
    <ContentUs id="contactus">
      <AdoutUs>
        <ContainerPC>
          <h2>
          Bestellen <span>Sie Ihr</span> Projekt jetzt
          </h2>
        </ContainerPC>
        <ContainerMobile>
          <h2>Order your Project Now</h2>
        </ContainerMobile>
        {windowWidth > 1200 ? (
          <p>
             Wir sind ein multidisziplinäres Team, das die besten Websites für
            unsere Kunden erstellt. Vertrauen Sie uns die Zukunft Ihres
            Unternehmens an und wir werden Ihnen zeigen, wie Ihr Unternehmen
            wachsen wird!
          </p>
        ) : (
          <p>
                     Wir sind ein multidisziplinäres Team, das die besten Websites für
            unsere Kunden erstellt.
          </p>
        )}
        <ContentUsBtn onClick={handleOpenModal}>Kontakt</ContentUsBtn>
        {openModal && <ModalkaDE setOpenModal={setOpenModal} />}
      </AdoutUs>
      <Peoples>
        <PeopleBlue>
          <img src={CursorBlue} alt="" />
          <p>Dmytro</p>
        </PeopleBlue>
        <PeopleRed>
          <img src={CursorRed} alt="" />
          <p>Roman</p>
        </PeopleRed>
        <PeopleGreen>
          <img src={CursorGreen} alt="" />
          <p>Serhii</p>
        </PeopleGreen>
        <PeoplePink>
          <img src={CursorPink} alt="" />
          <p>Roman</p>
        </PeoplePink>
        <PeopleBlueLight>
          <img src={CursorBLigh} alt="" />
          <p>Matvej</p>
        </PeopleBlueLight>
        <PeopleOrange>
          <img src={CursorOrange} alt="" />
          <p>Natasha</p>
        </PeopleOrange>
        <PeopleLightPink>
          <img src={CursorLPink} alt="" />
          <p>Nazar</p>
        </PeopleLightPink>
        <PeopleYellow>
          <img src={CursorYellow} alt="" />
          <p>Bohdan</p>
        </PeopleYellow>
      </Peoples>
    </ContentUs>
  );
};
