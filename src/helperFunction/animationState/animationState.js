import { useState } from "react";

const AnimationState = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [isVisibleSix, setIsVisibleSix] = useState(false);
  const [isVisibleSeven, setIsVisibleSeven] = useState(false);
  const [isVisibleEight, setIsVisibleEight] = useState(false);
  const [isVisibleNine, setIsVisibleNine] = useState(false);
  const [isVisibleTen, setIsVisibleTen] = useState(false);
  const [isVisiblePartOne, setIsVisiblePartOne] = useState(false);
  const [isVisiblePartTwo, setIsVisiblePartTwo] = useState(false);
  

  const handleEnterViewport = () => {
    setIsVisible(true);
  };

  const handleEnterViewportOne = () => {
    setIsVisibleOne(true);
  };

  const handleEnterViewportTwo = () => {
    setIsVisibleTwo(true);
  };

  const handleEnterViewportThree = () => {
    setIsVisibleThree(true);
  };

  const handleEnterViewportFour = () => {
    setIsVisibleFour(true);
  };

  const handleEnterViewportFive = () => {
    setIsVisibleFive(true);
  };

  const handleEnterViewportSix = () => {
    setIsVisibleSix(true);
  };

  const handleEnterViewportSeven = () => {
    setIsVisibleSeven(true);
  };

  const handleEnterViewportEight = () => {
    setIsVisibleEight(true);
  };

  const handleEnterViewportNine = () => {
    setIsVisibleNine(true);
  };

  const handleEnterViewportTen = () => {
    setIsVisibleTen(true);
  };

  const handleEnterViewportPartOne = () => {
    setIsVisiblePartOne(true);
  };

  const handleEnterViewportPartTwo = () => {
    setIsVisiblePartTwo(true);
  };

  return {
    isVisible,
    isVisibleOne,
    isVisibleTwo,
    isVisibleThree,
    isVisibleFour,
    isVisibleFive,
    isVisibleSix,
    isVisibleSeven,
    isVisibleEight,
    isVisibleNine,
    isVisibleTen,
    isVisiblePartOne,
    isVisiblePartTwo,
    handleEnterViewport,
    handleEnterViewportOne,
    handleEnterViewportTwo,
    handleEnterViewportThree,
    handleEnterViewportFour,
    handleEnterViewportFive,
    handleEnterViewportSix,
    handleEnterViewportSeven,
    handleEnterViewportEight,
    handleEnterViewportNine,
    handleEnterViewportTen,
    handleEnterViewportPartOne,
    handleEnterViewportPartTwo,
  }
};

export default AnimationState;
