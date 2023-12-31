import React, { useState, useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import { SvgHome } from "../../helperFunction/svgHome/svgHome";
import { sliderData } from "../../helperFunction/arrays/sliderData";
import { handleClickTop } from "../../helperFunction/ScrollTop";
import { ImgBWData } from "../../helperFunction/arrays/ImgBWData";
import ImageHero from "../../assets/svg/deviderLine.svg";
import { ConectUsEN } from "../../components/conectUs/conectUsEN";
import Ellipse from "../../assets/svg/Ellipse.svg";
import OrganicImg from "../../assets/img/5093ef757e18607302ebe57407fd1129.png";
import WhiteImg1 from "../../assets/img/page2.png";
import BriliniImg1 from "../../assets/img/page-3.png";
import BriliniImg2 from "../../assets/img/page-4.png";
import AbiImg1 from "../../assets/img/page4.png";
import AbiImg2 from "../../assets/img/page4-1.png";
import Prev from "../../assets/svg/left1.svg";
import Next from "../../assets/svg/right1.svg";
import Social from "../../assets/svg/teams/socials.svg";
import {
  ButtonHeader,
  HeroBackground,
  HeroBlock,
  HeroContend,
  SectionHero,
  ImgHeroDiv,
  ImgOurTeamDiv,
  ImgHero,
  ContainerPC,
  ContainerMobile,
  Project,
  ProjectsCards,
  ProjectsFragment1,
  ProjectsFragmentInfo1,
  ButtonProject1,
  ProjectImage1Container,
  ProjectImage3Container,
  ProjectImage1,
  ProjectContainer,
  ProjectsFragment2,
  ProjectsFragmentInfo2,
  ButtonProject2,
  ProjectImageContainer1,
  ProjectImage4Container,
  ProjectImage21,
  ProjectImage22,
  ProjectsFragmentInfo3,
  ProjectsFragment3,
  ButtonProject3,
  ProjectImage31,
  ProjectImage32,
  ContainerMoreProject,
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
import { ModalkaEN } from "../../components/modalka/ModalkaEN";

export const HomeEN = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayImg, setDisplayImg] = useState(0);
  // const [displayImgPrev, setDisplayImgPrev] = useState(1);
  const [imgArr, setImgArr] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isOpenMoreProject, setIsOpenProject] = useState(false);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const conectRef = useRef(null);

  const {
    isVisibleOne,
    isVisibleTwo,
    isVisibleThree,
    isVisibleFour,
    isVisibleFive,
    isVisibleSix,
    isVisibleSeven,
    isVisibleEight,
    handleEnterViewportOne,
    handleEnterViewportTwo,
    handleEnterViewportThree,
    handleEnterViewportFour,
    handleEnterViewportFive,
    handleEnterViewportSix,
    handleEnterViewportSeven,
    handleEnterViewportEight,
  } = AnimationState();

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.substring(1)
      );
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, []);

  let ImgBWDataExtended = ImgBWData.slice(5, 8);

  useEffect(() => {
    setImgArr(ImgBWDataExtended);
    // eslint-disable-next-line
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth >= 768) {
      setIsOpenProject(true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const addImg = () => {
    if (displayImg >= 7) {
      setDisplayImg(-1);
    }
    setDisplayImg((preveCount) => preveCount + 1);
    imgArr.shift();
    setImgArr((prevArr) => [...prevArr, ImgBWData[displayImg]]);
  };

  const nextImg = () => {
    if (displayImg <= 0) {
      setDisplayImg(8);
    }
    setDisplayImg((preveCount) => preveCount - 1);
    imgArr.pop();
    setImgArr((prevArr) => [ImgBWData[displayImg], ...prevArr]);
    console.log(displayImg);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1
    );
    nextImg();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    addImg();
  };

  const hadnleOpenProject = () => {
    setIsOpenProject(true);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.position = "fixed";
  };

  return ( 
    <>
    
      {openModal && <ModalkaEN setOpenModal={setOpenModal} />}
      <HeaderEN name={"/de"}/>
      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <SectionHero className={`${isVisibleOne ? "visible" : ""}`}>
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
            <ButtonHeader onClick={handleOpenModal}>Lets go!</ButtonHeader>
          </HeroBlock>
        </SectionHero>
      </ScrollTrigger>
      <ImgHero src={ImageHero} alt="" />

      <Project id="projects">
        <div ref={projectsRef}>
          <ScrollTrigger onEnter={handleEnterViewportTwo}>
            <ContainerPC>
              <h2 className={`${isVisibleTwo ? "visible" : ""}`}>
                Check our some of <span>our projects</span>
              </h2>
            </ContainerPC>
            <ContainerMobile>
              <h2 className={`${isVisibleTwo ? "visible" : ""}`}>
                Some of our <span> projects</span>
              </h2>
            </ContainerMobile>
          </ScrollTrigger>
          <ProjectsCards>
            <ScrollTrigger onEnter={handleEnterViewportThree}>
              <ProjectContainer
                className={`${isVisibleThree ? "visible" : ""}`}
              >
                <ProjectsFragment1>
                  <ProjectsFragmentInfo1>
                    <h4>Online Shop</h4>
                    <h3>Organic</h3>
                    {windowWidth > 1200 ? (
                      <p>
                        Online store with organic fruits, vegetables and
                        berries. A England farmer wanted to sell organically
                        grown produce.
                      </p>
                    ) : (
                      <p>
                        Online store with organic fruits, vegetables and
                        berries.
                      </p>
                    )}
                    <ButtonProject1
                      to="/en/organicShop"
                      onClick={handleClickTop}
                    >
                      View
                    </ButtonProject1>
                  </ProjectsFragmentInfo1>
                </ProjectsFragment1>
                <ProjectImage1Container>
                  <ProjectImage1 src={OrganicImg} />
                </ProjectImage1Container>
              </ProjectContainer>
            </ScrollTrigger>
            <ScrollTrigger onEnter={handleEnterViewportFour}>
              <ProjectsFragment2
                className={`${isVisibleFour ? "visible" : ""}`}
              >
                <ProjectImageContainer1>
                  <ProjectImage21 src={WhiteImg1} />
                  <ProjectImage22 src={WhiteImg1} />
                </ProjectImageContainer1>
                <ProjectsFragmentInfo2>
                  <h4>Business website</h4>
                  <h3>WhiteCollor</h3>
                  <ContainerPC>
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
                  </ContainerPC>
                  <ContainerMobile>
                    <p>Adaptive Strategic Agile Management.</p>
                  </ContainerMobile>
                  <ButtonProject2 to="/en/whiteCollar" onClick={handleClickTop}>
                    View
                  </ButtonProject2>
                </ProjectsFragmentInfo2>
              </ProjectsFragment2>
            </ScrollTrigger>
            {!isOpenMoreProject ? (
              <ContainerMoreProject>
                <button onClick={hadnleOpenProject}>
                  Show more
                  <SvgHome />
                </button>
              </ContainerMoreProject>
            ) : (
              <ProjectContainer2>
                <ProjectContainerImg>
                  <ScrollTrigger onEnter={handleEnterViewportFive}>
                    <ProjectsFragment3
                      className={`${isVisibleFive ? "visible" : ""}`}
                    >
                      <ProjectImage3Container>
                        <ProjectImage31 src={BriliniImg1} />
                        <ProjectImage32 src={BriliniImg2} />
                      </ProjectImage3Container>
                      <ProjectsFragmentInfo3>
                        <h4>Landing page</h4>
                        <h3>Brilini Studio</h3>
                        <ContainerPC>
                          {windowWidth > 1200 ? (
                            <p>
                              Studio of interior designers specializing in the
                              furnishing and design of rooms, apartments and
                              houses in a modern and austere style.
                            </p>
                          ) : (
                            <p>
                              Studio of interior designers specializing in the
                              furnishing and design of rooms
                            </p>
                          )}
                        </ContainerPC>
                        <ContainerMobile>
                          <p>Modern austere interior design studio.</p>
                        </ContainerMobile>
                        <ButtonProject3
                          to="/en/briliniStudio"
                          onClick={handleClickTop}
                        >
                          View
                        </ButtonProject3>
                      </ProjectsFragmentInfo3>
                    </ProjectsFragment3>
                  </ScrollTrigger>
                </ProjectContainerImg>
                <ScrollTrigger onEnter={handleEnterViewportSix}>
                  <ProjectsFragment4
                    className={`${isVisibleSix ? "visible" : ""}`}
                  >
                    <ProjectImage4Container>
                      <ProjectImage41 src={AbiImg1} />
                      <ProjectImage42 src={AbiImg2} />
                    </ProjectImage4Container>
                    <ProjectsFragmentInfo4>
                      <h4>Mobile App</h4>
                      <h3>Abi</h3>
                      {windowWidth > 1200 ? (
                        <p>
                          Mobile application for creating presentations with
                          ready-made templates based on artificial intelligence.
                          The application is available on Play Market and App
                          Store.
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
                </ScrollTrigger>
              </ProjectContainer2>
            )}
          </ProjectsCards>
        </div>
      </Project>

      <ImgHeroDiv>
        <ImgHero src={ImageHero} alt="" />
      </ImgHeroDiv>

      <Services id="services">
        <div ref={servicesRef}>
          <ScrollTrigger onEnter={handleEnterViewportSeven}>
            <h2 className={`${isVisibleSeven ? "visible" : ""}`}>
              Our <span>Services</span>
            </h2>
          </ScrollTrigger>
          <ScrollTrigger onEnter={handleEnterViewportEight}>
            <ServicesCards className={`${isVisibleEight ? "visible" : ""}`}>
              <ServicesCardsContainer>
                <ToEmailLink onClick={handleOpenModal}>
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
                <ToEmailLink onClick={handleOpenModal}>
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
              <ToEmailLink onClick={handleOpenModal}>
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
          </ScrollTrigger>
        </div>
      </Services>

      <ImgOurTeamDiv>
        <ImgHero src={ImageHero} alt="" />
      </ImgOurTeamDiv>
      <div ref={teamRef}>
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
      </div>
      <ImgOurTeamDiv>
        <ImgHero src={ImageHero} alt="" />
      </ImgOurTeamDiv>
      <div ref={conectRef}>
        <ConectUsEN name="ConnectUS" />
      </div>

      <FooterEN />
    </>
  );
};
