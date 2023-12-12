import React, { FC } from "react";

interface ImageProps {
  src: string;
  fallback: string;
  type?: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, fallback, type = "image/*", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;