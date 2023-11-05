import  React , { FC } from 'react';
import { styled } from "@mui/system";

import artisan5 from "../assets/artisan5.jpg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const imageURL = artisan5;
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "70%",
  backgroundImage: `url(${imageURL})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});


const FlexibleBanniere: React.FC = () => {
  return <Background>
    <Typography align='center' variant='h4' padding={30}>
    Le bien être, le corps , l'esprit maître
      </Typography>
  </Background>;
};

export default FlexibleBanniere;


