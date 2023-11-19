import React from "react";
import { Route, Routes } from "react-router-dom";

//
import NotFound from "../pages/NotFound/NotFoundPage";
// PAGES
import { HomeEN } from "../pages/english/homeEN";
import { OrganicShopEN } from "../pages/english/organicShopEN";
import { WhiteCollarEN } from "../pages/english/whiteCollarEN";
import { BriliniStudioEN } from "../pages/english/briliniStudioEN";
import { AbiEN } from "../pages/english/abiEN";
import { PagesShopEN } from "../pages/english/pagesShopEN";
import { PrivacyEN } from "../pages/english/privacyEN";
// DEUTCHLAND
import { HomeDE } from "../pages/german/homeDE";
import { OrganicShopDE } from "../pages/german/organicShopDE";
import { WhiteCollarDE } from "../pages/german/whiteCollarDE";
import { BriliniStudioDE } from "../pages/german/briliniStudioDE";
import { AbiDE } from "../pages/german/abiDE";
import { PagesShopDE } from "../pages/german/pagesShopDE";
import { PrivacyDE } from "../pages/german/privacyDE";
import { ContactUsEN } from "./contactUs/contactUsEN";

function App() {
  return (
		<>
			<Routes>
				<Route path='/' element={<HomeEN />} />
				<Route path='/de' element={<HomeDE />} />
				<Route path='/en/organicShop' element={<OrganicShopEN />} />
				<Route path='/en/whiteCollar' element={<WhiteCollarEN />} />
				<Route path='/en/briliniStudio' element={<BriliniStudioEN />} />
				<Route path='/en/abi' element={<AbiEN />} />
				<Route path='/en/pagesShop' element={<PagesShopEN />} />
				<Route path='/en/privacy' element={<PrivacyEN />} />
				<Route path='/de/organicShop' element={<OrganicShopDE />} />
				<Route path='/de/whiteCollar' element={<WhiteCollarDE />} />
				<Route path='/de/briliniStudio' element={<BriliniStudioDE />} />
				<Route path='/de/abi' element={<AbiDE />} />
				<Route path='/de/pagesShop' element={<PagesShopDE />} />
				<Route path='/de/privacy' element={<PrivacyDE />} />
				<Route path='/en/contactUs' element={<ContactUsEN/>}/>
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App;
