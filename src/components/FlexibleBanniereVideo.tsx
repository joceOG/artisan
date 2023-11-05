import  React , { FC } from 'react';
import { styled } from "@mui/system";

import artisan5 from "../assets/artisan5.jpg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BackgroundVideo from './BackgroundVideo';

const imageURL = artisan5;
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "70%",
  backgroundImage: `url(${imageURL})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});


const FlexibleBanniereVideo: React.FC = () => {
  return <div>
    <BackgroundVideo/>
    </div>;
};

export default FlexibleBanniereVideo;


