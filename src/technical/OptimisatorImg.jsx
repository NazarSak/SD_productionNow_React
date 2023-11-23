import React from "react";
import LazyLoad from "react-lazyload";

const OptimisatorImg = ({ src, alt, ImageType }) => {
  return (
    <LazyLoad height={100} offset={100}>
      <ImageType src={src} alt={alt} />
    </LazyLoad>
  );
};

export default OptimisatorImg;
