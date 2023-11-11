import React from 'react';
import LazyLoad from 'react-lazyload';
import { ImageFirst } from '../pages/styles/organicShop.styled';

const OptimisatorImg = ({ src, alt }) => {
  return (
    <LazyLoad height={200} offset={100}>
      <ImageFirst src={src} alt={alt} />
    </LazyLoad>
  );
};

export default OptimisatorImg;
