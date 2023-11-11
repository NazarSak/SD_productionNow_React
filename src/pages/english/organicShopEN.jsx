import React from "react";
import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";

export const OrganicShopEN = () => {
  return (
    <>
      <HeaderEN />
      <h2>hello this organicShopEN</h2>
      <h3>hello this organicShopEN</h3>
      <button>
        <Link to="/">to homeEN</Link>
      </button>
    </>
  );
};
