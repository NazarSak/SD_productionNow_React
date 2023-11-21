import React, { useState } from "react";
import { ModalkaEN } from "../modalka/ModalkaEN";
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

export const ConectUsEN = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <ContentUs>
      <AdoutUs>
        <h2>
          Order <span>Your</span> Project Now
        </h2>
        <p>
          We are a multi-disciplinary team creating the best websites for our
          clients. Trust the future of your business to us and we will show you
          how your business will grow!
        </p>
        <h4>
          We are a multi-disciplinary team creating the best websites for our
          clients.
        </h4>
        <ContentUsBtn onClick={handleOpenModal}>Contact</ContentUsBtn>
        {openModal && <ModalkaEN setOpenModal={setOpenModal} />}
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
