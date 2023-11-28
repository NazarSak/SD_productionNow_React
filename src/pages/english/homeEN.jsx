import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { sliderData } from "../../helperFunction/arrays/sliderData";
import { handleClickTop } from "../../helperFunction/ScrollTop";
import { ImgBWData } from "../../helperFunction/arrays/ImgBWData";
import ImageHero from "../../assets/svg/deviderLine.svg";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
import Ellipse from "../../assets/svg/Ellipse.svg";
// import CrlectImg from "../../assets/svg/Close.svg";
import OrganicImg from "../../assets/img/5093ef757e18607302ebe57407fd1129.png";
import WhiteImg1 from "../../assets/img/page2.png";
import BriliniImg1 from "../../assets/img/page-3.png";
import BriliniImg2 from "../../assets/img/page-4.png";
import AbiImg1 from "../../assets/img/page4.png";
import AbiImg2 from "../../assets/img/page4-1.png";
// import LeftPurple from "../../assets/svg/left.svg";
import Prev from "../../assets/svg/left1.svg";
import Next from "../../assets/svg/right1.svg";
import Social from "../../assets/svg/teams/socials.svg";
import {
  ButtonHeader,
  HeroBackground,
  HeroBlock,
  HeroContend,
  SectionHero,
  ImgHero,
  ContainerPC,
  ContainerMobile,
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
  ServicesCardsContainer,
  ServicesFragment3,
  ServiceButton3,
  ProjectContainerImg,
} from "./../styles/home.styled";

export const HomeEN = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerClass, setContainerClass] = useState(0);
  const [displayImg, setDisplayImg] = useState(3);
  const [displayImgPrev, setDisplayImgPrev] = useState(7);
  const [imgArr, setImgArr] = useState([]);
  let ImgBWDataExtended = ImgBWData.slice(0, 3);
  useEffect(() => {
    setImgArr(ImgBWDataExtended);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addImg = () => {
    if (displayImg >= 7) {
      setDisplayImg(0);
    }
    setDisplayImg((preveCount) => preveCount + 1);
    imgArr.shift();
    setImgArr((prevArr) => [...prevArr, ImgBWData[displayImg]]);
  };

  const nextImg = () => {
    if (displayImgPrev <= 0) {
      setDisplayImgPrev(7);
    }
    setDisplayImgPrev((preveCount) => preveCount - 1);
    imgArr.pop();
    setImgArr((prevArr) => [ImgBWData[displayImgPrev], ...prevArr]);
    console.log(displayImg);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    // setContainerClass((prevClass) => prevClass + 256);
    nextImg();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
    // setContainerClass((prevClass) => prevClass - 256);
    addImg();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
      // addImg()
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeaderEN />
      <SectionHero>
        <HeroBackground src={Ellipse} alt="" />
        <HeroBlock>
          <HeroContend>
            <ContainerPC>
              <h2>
                Built the future <span>together </span> with us!
              </h2>
              <img src="../img/select.svg" alt="" />
              <p>Your goals are our execution</p>
            </ContainerPC>
            <ContainerMobile>
              <h2>
                Built the <span> future </span>together
              </h2>
            </ContainerMobile>
          </HeroContend>
          <ButtonHeader to="/en/contactUs">Lets go!</ButtonHeader>
        </HeroBlock>
      </SectionHero>
      <ImgHero src={ImageHero} alt="" />

      <Project id="projects">
        <ContainerPC>
          <h2>
            Check our some of <span>our projects</span>
          </h2>
        </ContainerPC>
        <ContainerMobile>
          <h2>
            Some of our <span> projects</span>
          </h2>
        </ContainerMobile>
        <ProjectsCards>
          <ProjectContainer>
            <ProjectsFragment1>
              <ProjectsFragmentInfo1>
                <h4>Online Shop</h4>
                <h3>Organic</h3>
                {windowWidth > 1200 ? (
                  <p>
                    Online store with organic fruits, vegetables and berries. A
                    England farmer wanted to sell organically grown produce.
                  </p>
                ) : (
                  <p>
                    Online store with organic fruits, vegetables and berries.
                  </p>
                )}
                <ButtonProject1 to="/en/organicShop" onClick={handleClickTop}>
                  View
                </ButtonProject1>
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
              {windowWidth > 1200 ? (
                <p>
                  Develop and implement Agilic methods in the strategic
                  management of a corporation to ensure flexibility and
                  adaptation to a rapidly changing business environment.
                </p>
              ) : (
                <p>
                  Develop and implement Agilic methods in the strategic
                  management
                </p>
              )}
              <ButtonProject2 to="/en/whiteCollar" onClick={handleClickTop}>
                View
              </ButtonProject2>
            </ProjectsFragmentInfo2>
          </ProjectsFragment2>

          <ProjectContainer2>
            <ProjectContainerImg>
              <ProjectsFragment3>
                <ProjectImage31 src={BriliniImg1} />
                <ProjectImage32 src={BriliniImg2} />
                <ProjectsFragmentInfo3>
                  <h4>Landing page</h4>
                  <h3>Brilini Studio</h3>
                  {windowWidth > 1200 ? (
                    <p>
                      Studio of interior designers specializing in the
                      furnishing and design of rooms, apartments and houses in a
                      modern and austere style.
                    </p>
                  ) : (
                    <p>
                      Studio of interior designers specializing in the
                      furnishing and design of rooms
                    </p>
                  )}
                  <ButtonProject3
                    to="/en/briliniStudio"
                    onClick={handleClickTop}
                  >
                    View
                  </ButtonProject3>
                </ProjectsFragmentInfo3>
              </ProjectsFragment3>
            </ProjectContainerImg>

            <ProjectsFragment4>
              <ProjectImage41 src={AbiImg1} />
              <ProjectImage42 src={AbiImg2} />
              <ProjectsFragmentInfo4>
                <h4>Mobile App</h4>
                <h3>Abi</h3>
                {windowWidth > 1200 ? (
                  <p>
                    Mobile application for creating presentations with
                    ready-made templates based on artificial intelligence. The
                    application is available on Play Market and App Store.
                  </p>
                ) : (
                  <p>
                    Mobile application for creating presentations with
                    ready-made templates
                  </p>
                )}
                <ButtonProject4 to="en/abi" onClick={handleClickTop}>
                  View
                </ButtonProject4>
              </ProjectsFragmentInfo4>
            </ProjectsFragment4>
          </ProjectContainer2>
        </ProjectsCards>
      </Project>

      <Services id="services">
        <h2>
          Our <span>Services</span>
        </h2>
        <ServicesCards>
          <ServicesCardsContainer>
            <ToEmailLink to="en/email">
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
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                  >
                    <path
                      d="M10.8689 1L15 4.76471M15 4.76471L10.8689 9M15 4.76471H1"
                      stroke="#FCFCFC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ServiceButton>
              </ServicesFragment>
            </ToEmailLink>
            <ToEmailLink to="en/email">
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
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                  >
                    <path
                      d="M10.8689 1L15 4.76471M15 4.76471L10.8689 9M15 4.76471H1"
                      stroke="#FCFCFC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ServiceButton>
              </ServicesFragment>
            </ToEmailLink>
          </ServicesCardsContainer>
          <ToEmailLink to="en/email">
            <ServicesFragment3>
              <ServiceHeader3>Update</ServiceHeader3>
              <ul>
                <li>SEO optimisation</li>
                <li>Multilingual</li>
              </ul>
              <ServiceButton3>
                <p>Order service</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                >
                  <path
                    d="M10.8689 1L15 4.76471M15 4.76471L10.8689 9M15 4.76471H1"
                    stroke="#FCFCFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ServiceButton3>
            </ServicesFragment3>
          </ToEmailLink>
        </ServicesCards>
      </Services>
      <OurTeam id="team">
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
                className={index === currentSlide ? "active" : ""}
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
          <ContainerImageBW>
            {imgArr.map((slider, index) => (
              <ImageBW key={index} src={slider.imgBW} />
            ))}
          </ContainerImageBW>
        </ContainerImg>
      </OurTeam>
      <ConectUsEN name="ConnectUS" />
      <FooterEN />
    </>
  );
};
