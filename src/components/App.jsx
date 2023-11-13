import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeEN } from "../pages/english/homeEN";
import { HomeDE } from "../pages/german/homeDE";
import { OrganicShopEN } from "../pages/english/organicShopEN";
import { WhiteCollarEN } from "../pages/english/whiteCollarEN";
import { BriliniStudioEN } from "../pages/english/briliniStudioEN";
import { AbiEN } from "../pages/english/abiEN";
import { PagesShopEN } from "../pages/english/pagesShopEN";
// DEUTCHLAND
import { OrganicShopDE } from "../pages/german/organicShopDE";
import { WhiteCollarDE } from "../pages/german/whiteCollarDE";
import { BriliniStudioDE } from "../pages/german/briliniStudioDE";
import { AbiDE } from "../pages/german/abiDE";
import { PagesShopDE } from "../pages/german/pagesShopDE";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeEN />} />
        <Route path="/de" element={<HomeDE />} />
        <Route path="/en/organicShop" element={<OrganicShopEN />} />
        <Route path="/en/whiteCollar" element={<WhiteCollarEN />} />
        <Route path="/en/briliniStudio" element={<BriliniStudioEN />} />
        <Route path="/en/abi" element={<AbiEN />} />
        <Route path="/en/pagesShop" element={<PagesShopEN />} />
        <Route path="/de/organicShop" element={<OrganicShopDE />} />
        <Route path="/de/whiteCollar" element={<WhiteCollarDE />} />
        <Route path="/de/briliniStudio" element={<BriliniStudioDE />} />
        <Route path="/de/abi" element={<AbiDE />} />
        <Route path="/de/pagesShop" element={<PagesShopDE />} />
      </Routes>
    </>
  );
}

export default App;
