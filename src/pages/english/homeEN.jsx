import React from "react";
import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";

export const HomeEN = () => {
  return (
    <>
      <HeaderEN />
      <button>
        <Link to="/en/organicShop">Organic</Link>
        
      </button>
    </>
  );
};
