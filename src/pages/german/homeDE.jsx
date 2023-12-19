import React, { useState, useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AnimationState from "../../helperFunction/animationState/animationState";
import { HeaderDE } from "../../components/header/HeaderDE";
import useSmoothScroll from "../../components/smoooth-scroll/smoth-scroll"
import { FooterDE } from "../../components/footer/FooterDE";
import { SvgHome } from "../../helperFunction/svgHome/svgHome";
import { sliderDataDE } from "../../helperFunction/arrays/sliderDataDE";
import { handleClickTop } from "../../helperFunction/ScrollTop";
import { ImgBWData } from "../../helperFunction/arrays/ImgBWData";
import ImageHero from "../../assets/svg/deviderLine.svg";
import { ConectUsDE } from "../../components/conectUs/conectUsDE";
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
import { ModalkaDE } from "../../components/modalka/ModalkaDE";

export const HomeDE = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayImg, setDisplayImg] = useState(0);
  const [displayImgPrev, setDisplayImgPrev] = useState(7);
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
    if (displayImgPrev <= 0) {
      setDisplayImgPrev(7);
    }
    setDisplayImgPrev((preveCount) => preveCount - 1);
    imgArr.pop();
    setImgArr((prevArr) => [ImgBWData[displayImgPrev], ...prevArr]);
    console.log(displayImg);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderDataDE.length - 1 : prevSlide - 1
    );
    nextImg();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderDataDE.length);
    addImg();
  };

  const hadnleOpenProject = () => {
    setIsOpenProject(true);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.position = "fixed";
  };
  
  useSmoothScroll()
  
  return (
    <>
      {openModal && <ModalkaDE setOpenModal={setOpenModal} />}
      <HeaderDE name={"/"} />
      <ScrollTrigger onEnter={handleEnterViewportOne}>
        <SectionHero className={`${isVisibleOne ? "visible" : ""}`}>
          <HeroBackground src={Ellipse} alt="" />
          <HeroBlock>
            <HeroContend>
              <ContainerPC>
                <h2>
                  Bauen Sie die <span>Zukunft </span> gemeinsam mit uns!
                </h2>
                <img src="../img/select.svg" alt="" />
                <p>Ihre Ziele sind unser Auftrag</p>
              </ContainerPC>
              <ContainerMobile>
                <h2>
                  Gemeinsam die <span> Zukunft </span>gestalten
                </h2>
              </ContainerMobile>
            </HeroContend>
            <ButtonHeader onClick={handleOpenModal}>
              Lass uns gehen!
            </ButtonHeader>
          </HeroBlock>
        </SectionHero>
      </ScrollTrigger>
      <ImgHero src={ImageHero} alt="" />

      <Project id="projects">
        <div ref={projectsRef}>
          <ScrollTrigger onEnter={handleEnterViewportTwo}>
            <ContainerPC>
              <h2 className={`${isVisibleTwo ? "visible" : ""}`}>
                Hier einige unserer <span>Projekte</span>
              </h2>
            </ContainerPC>
            <ContainerMobile>
              <h2 className={`${isVisibleTwo ? "visible" : ""}`}>
                Einige unserer <span> Projekte</span>
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
                    <h4>Online Geschäft</h4>
                    <h3>Organisch</h3>
                    {windowWidth > 1200 ? (
                      <p>
                        Online-Shop für Bio-Obst, -Gemüse und -Beeren. Ein
                        Landwirt aus England wollte biologisch angebaute
                        Produkte verkaufen.
                      </p>
                    ) : (
                      <p>Online-Shop mit Bio-Obst, Gemüse und Beeren.</p>
                    )}
                    <ButtonProject1
                      to="/de/organicShop"
                      onClick={handleClickTop}
                    >
                      Siehe
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
                  <h4>Geschäftliche Website</h4>
                  <h3>WhiteCollor</h3>
                  <ContainerPC>
                    {windowWidth > 1200 ? (
                      <p>
                        Entwicklung und Anwendung agiler Methoden im
                        strategischen Management eines Unternehmens, um
                        Flexibilität und Anpassung an ein sich rasch
                        veränderndes Geschäftsumfeld zu gewährleisten.
                      </p>
                    ) : (
                      <p>
                        Entwickeln und implementieren Sie agile Methoden im
                        strategischen Bereich Management
                      </p>
                    )}
                  </ContainerPC>
                  <ContainerMobile>
                    <p>Adaptives strategisches agiles Management.</p>
                  </ContainerMobile>
                  <ButtonProject2 to="/de/whiteCollar" onClick={handleClickTop}>
                    Siehe
                  </ButtonProject2>
                </ProjectsFragmentInfo2>
              </ProjectsFragment2>
            </ScrollTrigger>
            {!isOpenMoreProject ? (
              <ContainerMoreProject>
                <button onClick={hadnleOpenProject}>
                  Zeig mehr
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
                              Studio von Innenarchitekten, die sich auf die
                              Einrichtung und Gestaltung von Räumen, Wohnungen
                              und Häusern in einem modernen und strengen Stil
                              spezialisiert haben.
                            </p>
                          ) : (
                            <p>
                              Studio für Innenarchitekten, spezialisiert auf die
                              Einrichtung und Gestaltung von Räumen
                            </p>
                          )}
                        </ContainerPC>
                        <ContainerMobile>
                          <p>Modernes, schlichtes Innenarchitekturstudio.</p>
                        </ContainerMobile>
                        <ButtonProject3
                          to="/de/briliniStudio"
                          onClick={handleClickTop}
                        >
                          Siehe
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
                          Webanwendung zur Erstellung von Präsentationen mit
                          vorgefertigten Vorlagen, die auf künstlicher
                          Intelligenz basieren. Die Anwendung ist im Play Market
                          und im App Store verfügbar.
                        </p>
                      ) : (
                        <p>
                          Mobile Anwendung zum Erstellen von Präsentationen mit
                          vorgefertigte Vorlagen
                        </p>
                      )}
                      <ButtonProject4 to="/de/abi" onClick={handleClickTop}>
                        Siehe
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
              Unser <span>Service</span>
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
                      <li>Videobearbeitung</li>
                      <li>3D-Modelle</li>
                      <li>Werbebanner</li>
                    </ul>
                    <ServiceButton>
                      <p>Dienst bestellen</p>
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
                    <ServiceHeader2>Entwicklung</ServiceHeader2>
                    <ul>
                      <li>Landing Page</li>
                      <li>Website des Unternehmens</li>
                      <li>Online Shop</li>
                      <li>Mobile App</li>
                      <li>Neugestaltung Ihrer Website</li>
                    </ul>
                    <ServiceButton>
                      <p>Dienst bestellen</p>
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
                    <li>SEO-Optimierung</li>
                    <li>Mehrsprachig</li>
                  </ul>
                  <ServiceButton3>
                    <p>Dienst bestellen</p>
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
              Unser <span>Team</span>
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
              {sliderDataDE.map((slider, index) => (
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
        <ConectUsDE name="ConnectUSDE" />
      </div>

      <FooterDE />
    </>
  );
};
