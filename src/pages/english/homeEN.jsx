import React from "react";
import { Link } from "react-router-dom";

export const HomeEN = () => {
  return (
    <>
      <h2>Hello this is homeEN</h2>
      <h3>Hello this is homeEN</h3>
      <button>
        <Link to="/de">to homeDE</Link>
      </button>
      <button>
        <Link to="/en/organicShop">to organicShop</Link>
      </button>
    </>
  );
};
