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
} from './footer.styled'
import Logo from '../../assets/svg/logo.svg'

export const FooterDE = ({ showImg }) => {
	return (
		<Section>
			{!showImg && (
				<img src={deviderLine} alt='deviderLine' height='165px' width='640px' />
			)}

			<Footer>
				<img src={Logo} alt='Logo' />
				<List>
					<li>
						<TitleLink to='/de/home#projects'>Projekte</TitleLink>
					</li>
					<li>
						<TitleLink to='/de/home#services'>Team</TitleLink>
					</li>
					<li>
						<TitleLink to='/de/home#ourTeam'>Dienste</TitleLink>
					</li>
					<li>
						<TitleLink to='/de/home#contentUs'>Kontakt us</TitleLink>
					</li>
				</List>

				<SecondList>
					<li>
						<LinkToPrivacy to='/de/privacy' onClick={handleClickTop}>
							Datenschutzrichtlinie
						</LinkToPrivacy>
					</li>
					<li>
						<Context>© 2023 Alle Rechte vorbehalten.</Context>
					</li>
				</SecondList>
			</Footer>
		</Section>
	)
}
