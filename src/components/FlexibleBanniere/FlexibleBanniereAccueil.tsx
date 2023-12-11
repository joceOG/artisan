import  React , { FC } from 'react';
import { styled } from "@mui/system";

import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Container from '@mui/material/Container';
import { yellow } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

import artisan5 from "../../assets/artisan5.jpg"
import Typography from '@mui/material/Typography';


const imageURL = artisan5;
const Background = styled("div")({
  width: "100%",
  height: "15%",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
});

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: yellow[500],
  height : "auto",
  width: 250,
  '&:hover': {
    backgroundColor: yellow[700],
  },
}));



const FlexibleBanniereAccueil: React.FC = () => {
  return <Background>
    <Typography align='center' variant='h3' padding={3}>
      <b>Accueil</b> 
      </Typography>
  </Background>;
};

export default FlexibleBanniereAccueil;