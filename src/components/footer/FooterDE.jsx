import React from "react";
import { useNavigate } from "react-router-dom";

import deviderLine from "../../assets/svg/deviderLine.svg";
import { handleClickTop } from "../../helperFunction/ScrollTop";
import {
  Section,
  TitleLink,
  List,
  Footer,
  LinkToPrivacy,
  Context,
  LineTablet,
  SecondListDE,
} from "./footer.styled";
import Logo from "../../assets/svg/logo.svg";

export const FooterDE = ({ showImg }) => {
  const navigate = useNavigate();

  const handle = (hash) => {
    const element = document.getElementById(hash);

    if (hash && element) {
      element.scrollIntoView({ behavior: "smooth" });

      navigate(window.location.pathname);
    }
  };

  return (
    <Section>
      {!showImg && (
        <LineTablet
          src={deviderLine}
          alt="deviderLine"
          height="165px"
          width="640px"
        />
      )}

      <Footer>
        <img src={Logo} alt="Logo" />
        <List>
          <li>
            <TitleLink onClick={() => handle("projects")} to="/de/#projects">
              Projekte
            </TitleLink>
          </li>
          <li>
            <TitleLink onClick={() => handle("team")} to="/de/#team">
              Team
            </TitleLink>
          </li>
          <li>
            <TitleLink onClick={() => handle("services")} to="/de/#services">
              Dienste
            </TitleLink>
          </li>
          <li>
            <TitleLink onClick={() => handle("contactus")} to="/de/#contactus">
              Kontakt us
            </TitleLink>
          </li>
        </List>

        <SecondListDE>
          <li>
            <LinkToPrivacy to="/de/privacy" onClick={handleClickTop}>
              Datenschutzrichtlinie
            </LinkToPrivacy>
          </li>
          <li>
            <Context>© 2023 Alle Rechte vorbehalten.</Context>
          </li>
        </SecondListDE>
      </Footer>
    </Section>
  );
};
