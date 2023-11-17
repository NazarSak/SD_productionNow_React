import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";
import ImageHero from '../../assets/svg/deviderLine.svg'
import Ellipse from '../../assets/svg/Ellipse.svg'
import CrlectImg from '../../assets/svg/Close.svg'
import OrganicImg from '../../assets/img/5093ef757e18607302ebe57407fd1129.png'
import WhiteImg1 from '../../assets/img/page2.png'
import BriliniImg1 from '../../assets/img/page-3.png'
import BriliniImg2 from '../../assets/img/page-4.png'
import AbiImg1 from '../../assets/img/page4.png'
import AbiImg2 from '../../assets/img/page4-1.png'
import LeftPurple from '../../assets/svg/left.svg'
import Prev from '../../assets/svg/left1.svg'
import Next from '../../assets/svg/right1.svg'
import Social from '../../assets/svg/teams/socials.svg'
import ImageBWTimur from '../../assets/img/ourTeam/picturePNG/timur_bw.png'
import ImageCTimur from '../../assets/img/ourTeam/picturePNG/timur_c.png'
import ImageBWAnd from '../../assets/img/ourTeam/picturePNG/andrey_bw.png'
import ImageCAnd from '../../assets/img/ourTeam/picturePNG/andrey_c.png'
import ImageBWBog from '../../assets/img/ourTeam/picturePNG/bohdan_bw.png'
import ImageCBog from '../../assets/img/ourTeam/picturePNG/bohdan_c.png'
import ImageBWNat from '../../assets/img/ourTeam/picturePNG/natalia_bw.png'
import ImageCNat from '../../assets/img/ourTeam/picturePNG/natalia_c.png'
import ImageBWNaz from '../../assets/img/ourTeam/picturePNG/nazar_bw.png'
import ImageCNaz from '../../assets/img/ourTeam/picturePNG/nazar_c.png'
import ImageBWSer from '../../assets/img/ourTeam/picturePNG/serhii_bw.png'
import ImageCSer from '../../assets/img/ourTeam/picturePNG/serhii_c.png'
import ImageBWRomP from '../../assets/img/ourTeam/picturePNG/roma_bw.png'
import ImageCRomP from '../../assets/img/ourTeam/picturePNG/roma_c.png'
import ImageBWDm from '../../assets/img/ourTeam/picturePNG/dima_bw.png'
import ImageCDm from '../../assets/img/ourTeam/picturePNG/dima_c.png'

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
	ProjectContainer,
	ProjectsFragment2,
	ProjectsFragmentInfo2,
	ButtonProject2,
	ProjectImage2,
	ProjectImageContainer1,
	ProjectImage21,
	ProjectImage22,
	ProjectsFragmentInfo3,
	ProjectsFragment3,
	ButtonProject3,
	ProjectImage31,
	ProjectImage32,
	ProjectContainer2,
	ProjectsFragment4,
	ProjectsFragmentInfo4,
	ButtonProject4,
	ProjectImage41,
	ProjectImage42,
	Services,
	ServicesCards,
	ToEmailLink,
	ServicesFragment,
	ServiceHeader1,
	ServiceButton,
	ServiceHeader2,
	ServiceHeader3,
	OurTeam,
	SwiperButtonContainer,
	SwiperButtonPrev,
	SwiperButtonNext,
	SwiperImgContainer,
	SliderName,
	SwiperBox,
	MySwiperBox,
	SocialImg,
	SwiperWrapper,
	SwiperSlide,
	Contend,
	ImageBW,
	ImageC,
  ContainerImageBW,
  ContainerImg,
} from './../styles/home.styled'
import { FooterEN } from '../../components/footer/FooterEN';

const sliderData = [
	{
    id: '1',
		name: 'Roman Stepaniuk',
		description: 'Front-End Developer',
		img: ImageCTimur,
	},
	{
    id: '2',
		name: 'Andrey Alaverdian',
		description: 'Front-End Developer',
		img: ImageCAnd,
	},
	{
    id: '3',
		name: 'Bohdan Kovalenko',
		description: 'Back-End Developer',
		img: ImageCBog,
	},
	{
    id: '4',
		name: 'Natalia Larina',
		description: 'Marketer',
		img: ImageCNat,
	},
	{
    id: '5',
		name: 'Sakhanda Nazar',
		description: 'Front-End Developer',
		img: ImageCNaz,
	},
	{
    id: '6',
		name: 'Serhii Lusgar ',
		description: 'Web Designer',
		img: ImageCSer,
	},
	{
    id: '7',
		name: 'Roman Platonov ',
		description: 'Video Editor',
		img: ImageCRomP,
	},
	{
    id: '8',
		name: 'Dmytro Shevchenko ',
		description: 'Web Designer, Team Leader',
		img: ImageCDm,
	},
]

const ImgBWData = [
	{
		imgBW: ImageBWTimur,
  },
  {
    imgBW: ImageBWAnd,
  },
  {
    imgBW: ImageBWBog,
  },
  {
    imgBW: ImageBWNat,
  },
  {
    imgBW: ImageBWNaz,
  },
  {
    imgBW: ImageBWSer,
  },
  {
    imgBW: ImageBWRomP,
  },
  {
    imgBW: ImageBWDm,
  },
]

export const HomeEN = () => {

const [currentSlide, setCurrentSlide] = useState(0)
const [containerClass, setContainerClass] = useState(0)

const nextSlide = () => {
	setCurrentSlide(prevSlide => (prevSlide + 1) % sliderData.length)
  const res = containerClass + 256
	setContainerClass(res) 
}

const prevSlide = () => {
	setCurrentSlide(prevSlide =>
		prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
	)
  const res = containerClass - 256
	setContainerClass(res) 
}

  
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
					<ProjectContainer>
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
						</ProjectsFragment1>
						<ProjectImage1 src={OrganicImg} />
					</ProjectContainer>
					<ProjectsFragment2>
						<ProjectImageContainer1>
							<ProjectImage21 src={WhiteImg1} />
							<ProjectImage22 src={WhiteImg1} />
						</ProjectImageContainer1>
						<ProjectsFragmentInfo2>
							<h4>Business website</h4>
							<h3>WhiteCollor</h3>
							<p>
								Develop and implement Agilic methods in the strategic management
								of a corporation to ensure flexibility and adaptation to a
								rapidly changing business environment.
							</p>
							<ButtonProject2 to='/en/whiteCollar'>View</ButtonProject2>
						</ProjectsFragmentInfo2>
					</ProjectsFragment2>

					<ProjectContainer2>
						<ProjectsFragment3>
							<ProjectImage31 src={BriliniImg1} />
							<ProjectImage32 src={BriliniImg2} />
							<ProjectsFragmentInfo3>
								<h4>Landing page</h4>
								<h3>Brilini Studio</h3>
								<p>
									Studio of interior designers specializing in the furnishing
									and design of rooms, apartments and houses in a modern and
									austere style.
								</p>
								<ButtonProject3 to='/en/briliniStudio'>View</ButtonProject3>
							</ProjectsFragmentInfo3>
						</ProjectsFragment3>

						<ProjectsFragment4>
							<ProjectImage41 src={AbiImg1} />
							<ProjectImage42 src={AbiImg2} />
							<ProjectsFragmentInfo4>
								<h4>Mobile App</h4>
								<h3>Abi</h3>
								<p>
									Mobile application for creating presentations with ready-made
									templates based on artificial intelligence. The application is
									available on Play Market and App Store.
								</p>
								<ButtonProject4 to='en/abi'>View</ButtonProject4>
							</ProjectsFragmentInfo4>
						</ProjectsFragment4>
					</ProjectContainer2>
				</ProjectsCards>
			</Project>

			<Services>
				<h2 class='servicesSection'>
					Our <span>Services</span>
				</h2>
				<ServicesCards>
					<ToEmailLink to='en/email'>
						<ServicesFragment>
							<ServiceHeader1>Design</ServiceHeader1>
							<ul>
								<li>Motion Design</li>
								<li>Logotype</li>
								<li>Video Editing</li>
								<li>3D models</li>
								<li>Advertising Banners</li>
							</ul>
							<ServiceButton>
								<p>Order service</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='10'
									viewBox='0 0 16 10'
									fill='none'
								>
									<path
										d='M10.8689 1L15 4.76471M15 4.76471L10.8689 9M15 4.76471H1'
										stroke='#FCFCFC'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</ServiceButton>
						</ServicesFragment>
					</ToEmailLink>
					<ToEmailLink to='en/email'>
						<ServicesFragment>
							<ServiceHeader2>Development</ServiceHeader2>
							<ul>
								<li>Landing Page</li>
								<li>Corporate Website</li>
								<li>Online Shop</li>
								<li>Mobile App</li>
								<li>Redesign Website</li>
							</ul>
							<ServiceButton>
								<p>Order service</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='10'
									viewBox='0 0 16 10'
									fill='none'
								>
									<path
										d='M10.8689 1L15 4.76471M15 4.76471L10.8689 9M15 4.76471H1'
										stroke='#FCFCFC'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</ServiceButton>
						</ServicesFragment>
					</ToEmailLink>
					<ToEmailLink to='en/email'>
						<ServicesFragment>
							<ServiceHeader3>Update</ServiceHeader3>
							<ul>
								<li>SEO optimisation</li>
								<li>Multilingual</li>
							</ul>
							<ServiceButton>
								<p>Order service</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='10'
									viewBox='0 0 16 10'
									fill='none'
								>
									<path
										d='M10.8689 1L15 4.76471M15 4.76471L10.8689 9M15 4.76471H1'
										stroke='#FCFCFC'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</ServiceButton>
						</ServicesFragment>
					</ToEmailLink>
				</ServicesCards>
			</Services>
			<OurTeam>
				<SliderName>
					<h2>
						Our <span>Team</span>
					</h2>
					<SwiperButtonContainer>
						<SwiperImgContainer>
							<SwiperButtonPrev src={Prev} onClick={nextSlide} />
						</SwiperImgContainer>
						<SwiperImgContainer>
							<SwiperButtonNext src={Next} onClick={prevSlide} />
						</SwiperImgContainer>
					</SwiperButtonContainer>
				</SliderName>

				<MySwiperBox>
					<SwiperWrapper>
						{sliderData.map((slider, index) => (
							<SwiperSlide
								key={index}
								className={index === currentSlide ? 'active' : ''}
							>
								<Contend>
									<SocialImg src={Social} />
									<h2>{slider.name}</h2>
									<h3>{slider.description}</h3>
								</Contend>
								<ImageC src={slider.img} />
							</SwiperSlide>
						))}
					</SwiperWrapper>
				</MySwiperBox>
        <ContainerImg>
				  <ContainerImageBW style={{marginLeft: `${containerClass === 0 ? 56 : containerClass + 56}px`}}>
				  	{ImgBWData.map((img, index) => (
				  			<ImageBW src={img.imgBW} />
				  	))}
				  </ContainerImageBW>
        </ContainerImg>
			</OurTeam>
			<FooterEN />
		</>
	)
};
