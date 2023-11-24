import React from 'react'
import deviderLine from '../../assets/svg/deviderLine.svg'
import { handleClickTop } from '../../helperFunction/ScrollTop'
import {
	Section,
	TitleLink,
	List,
	Footer,
	LinkToPrivacy,
	Context,
	SecondList,
	LineTablet,
} from './footer.styled'
import Logo from '../../assets/svg/logo.svg'

export const FooterEN = ({ showImg }) => {
	return (
		<Section>
			{!showImg && (
				<LineTablet src={deviderLine} alt='deviderLine' height='165px' width='640px' />
			)}

			<Footer>
				<img src={Logo} alt='Logo' />
				<List>
					<li>
						<TitleLink to='/en/home#projects'>Projects</TitleLink>
					</li>
					<li>
						<TitleLink to='/en/home#services'>Team</TitleLink>
					</li>
					<li>
						<TitleLink to='/en/home#ourTeam'>Services</TitleLink>
					</li>
					<li>
						<TitleLink to='/en/home#contentUs'>Contact us</TitleLink>
					</li>
				</List>

				<SecondList>
					<li>
						<LinkToPrivacy to='/en/privacy' onClick={handleClickTop}>
							Privacy Policy
						</LinkToPrivacy>
					</li>
					<li>
						<Context>© 2023 All rights reserved.</Context>
					</li>
				</SecondList>
			</Footer>
		</Section>
	)
}
