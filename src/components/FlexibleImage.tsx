import  { FC } from 'react';
import styled from 'styled-components';

interface FlexibleImageProps {
  src: string;
  alt: string;
}

const FlexImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 600;
`;

const FlexibleImage: FC<FlexibleImageProps> = ({ src, alt }) => {
  return <FlexImage src={src} alt={alt}> 
  </FlexImage>
  ;
};

export default FlexibleImage;