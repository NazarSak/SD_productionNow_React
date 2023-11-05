import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeEN } from "../pages/english/homeEN";
import { HomeDE } from "../pages/german/homeDE";
import { OrganicShopEN } from "../pages/english/organicShopEN";
import { OrganicShopDE } from "../pages/german/organicShopDE";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeEN />} />
        <Route path="/de" element={<HomeDE />} />
        <Route path="/en/organicShop" element={<OrganicShopEN/>} />
        <Route path="/de/organicShop" element={<OrganicShopDE/>} />
      </Routes>
    </>
  );
}

export default App;
