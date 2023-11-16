import React from "react";
import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";

export const HomeEN = () => {
  return (
    <>
      <HeaderEN />
      <button>
        <Link to="/en/organicShop">Organic</Link>
      </button>
      <button>
        <Link to="/en/privacy">to privacy</Link>
      </button>
      <FooterEN />
    </>
  );
};
