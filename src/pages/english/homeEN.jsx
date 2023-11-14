import React from "react";
import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";
import ImageHero from '../../assets/svg/deviderLine.svg'
import Ellipse from '../../assets/svg/Ellipse.svg'
import CrlectImg from '../../assets/svg/Close.svg'
import OrganicImg from '../../assets/img/5093ef757e18607302ebe57407fd1129.png'
import {
	ButtonHeader,
	HeroBackground,
	HeroBlock,
	HeroContend,
	SectionHero,
	ImgHero,
  Project,
  ProjectsCards,
  ProjectsFragment1,
  ProjectsFragmentInfo1,
  ButtonProject1,
  ProjectImage1,
} from './../styles/home.styled'

export const HomeEN = () => {
  return (
		<>
			<HeaderEN />
			<SectionHero>
				<HeroBackground class='heroBackground' src={Ellipse} alt='' />
				<HeroBlock>
					<HeroContend>
						<h2>
							Built the future <span class='borderText'>together</span> with us!
						</h2>
						<img class='crlectImg' src='../img/select.svg' alt='' />
						<p>Your goals are our execution</p>
					</HeroContend>
					<ButtonHeader href='./email.html'>Lets go!</ButtonHeader>
				</HeroBlock>
			</SectionHero>
			<ImgHero src={ImageHero} alt='' />

			<Project>
				<h2>
					Check our some of <span class='borderText'>our projects</span>
				</h2>
				<ProjectsCards>
					<ProjectsFragment1>
						<ProjectsFragmentInfo1>
							<h4>Online Shop</h4>
							<h3>Organic</h3>
							<p>
								Online store with organic fruits, vegetables and berries. A
								England farmer wanted to sell organically grown produce.
							</p>
							<ButtonProject1 to='/en/organicShop'>View</ButtonProject1>
						</ProjectsFragmentInfo1>
						<ProjectImage1 src={OrganicImg} />
					</ProjectsFragment1>
					<div class='projectsFragment2'>
						<div class='projectImageX'>
							<div class='projectImage2-1'></div>
							<div class='projectImage2-2'></div>
						</div>
						<div class='projectsFragmentInfo2'>
							<h4>Business website</h4>
							<h3>WhiteCollor</h3>
							<p>
								Develop and implement Agilic methods in the strategic management
								of a corporation to ensure flexibility and adaptation to a
								rapidly changing business environment.
							</p>
							<a class='buttonProject2' href='./whiteCollar.html'>
								View
							</a>
						</div>
					</div>
					<div class='projectsFragment3'>
						<div class='projectImage3'></div>
						<div class='projectImage3-1'></div>
						<div class='projectsFragmentInfo3'>
							<h4>Landing page</h4>
							<h3>Brilini Studio</h3>
							<p>
								Studio of interior designers specializing in the furnishing and
								design of rooms, apartments and houses in a modern and austere
								style.
							</p>
							<a class='buttonProject3' href='./briliniStudio.html'>
								View
							</a>
						</div>
					</div>
					<div class='projectsFragment4'>
						<div class='projectImage4'></div>
						<div class='projectImage4-1'></div>
						<div class='projectsFragmentInfo4'>
							<h4>Mobile App</h4>
							<h3>Abi</h3>
							<p>
								Mobile application for creating presentations with ready-made
								templates based on artificial intelligence. The application is
								available on Play Market and App Store.
							</p>
							<a class='buttonProject4' href='./abi.html'>
								View
							</a>
						</div>
					</div>
				</ProjectsCards>
			</Project>
		</>
	)
};
