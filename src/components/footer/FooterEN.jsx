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
  SecondList,
  LineTablet,
} from "./footer.styled";
import Logo from "../../assets/svg/logo.svg";

export const FooterEN = ({ showImg }) => {
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
            <TitleLink onClick={() => handle("projects")} to="/#projects">
              Projects
            </TitleLink>
          </li>
          <li>
            <TitleLink onClick={() => handle("team")} to="/#team">
              Team
            </TitleLink>
          </li>
          <li>
            <TitleLink onClick={() => handle("services")} to="/#services" >
              Services
            </TitleLink>
          </li>
          <li>
            <TitleLink onClick={() => handle("contactus")} to="/#contactus">
              Contact us
            </TitleLink>
          </li>
        </List>

        <SecondList>
          <li>
            <LinkToPrivacy to="/en/privacy" onClick={handleClickTop}>
              Privacy Policy
            </LinkToPrivacy>
          </li>
          <li>
            <Context>© 2023 All rights reserved.</Context>
          </li>
        </SecondList>
      </Footer>
    </Section>
  );
};
