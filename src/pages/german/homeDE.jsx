import React from "react";
import { Link } from "react-router-dom";
import { FooterDE } from "../../components/footer/FooterDE";

export const HomeDE = () => {
  return (
    <>
      <h2>hello this homeDE</h2>
      <h3>hello this homeDE</h3>
      <button>
        <Link to="/">to homeEN</Link>
      </button>
      <button>
        <Link to="/de/organicShop">to organicShopDE</Link>
      </button>
      <FooterDE />
    </>
  );
};
