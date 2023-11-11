import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChangeLanguage, ChangeLanguageLi, ChangeLanguageUl, Header, Navigator, NavigatorLi, StyledLink } from "./Header.styled";

export const HeaderEN = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSvgClick = () => {
    if (!isClicked) setIsClicked(true);
    else setIsClicked(false)
  };

  return (
		<Header>
			<div>
				<StyledLink to='/'>
					<img src='/img/logo.svg' alt='logo' />
				</StyledLink>
			</div>
			<Navigator>
				<NavigatorLi>
					<StyledLink className='active' to='/en/home#projects'>
						Projects
					</StyledLink>
				</NavigatorLi>
				<NavigatorLi>
					<StyledLink to='/en/home#services'>Services</StyledLink>
				</NavigatorLi>
				<NavigatorLi>
					<StyledLink to='/en/home#ourTeam'>Team</StyledLink>
				</NavigatorLi>
				<NavigatorLi>
					<StyledLink to='/en/home#contentUs'>Contact us</StyledLink>
				</NavigatorLi>
			</Navigator>
			<ChangeLanguage>
				<ChangeLanguageUl>
					<ChangeLanguageLi>
						<Link to='/'>EN</Link>
					</ChangeLanguageLi>
					<ChangeLanguageLi className={isClicked ? 'show' : 'hide'}>
						<Link to='/de/home'>DE</Link>
					</ChangeLanguageLi>
				</ChangeLanguageUl>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					onClick={handleSvgClick}
					className={isClicked ? 'open' : 'close'}
				>
					<path
						d='M19 13L12 7L5 13'
						stroke='#FCFCFC'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</ChangeLanguage>
		</Header>
	)
};
