import  React , { FC } from 'react';
import { styled } from "@mui/system";

import artisan5 from "../assets/artisan5.jpg"
import Typography from '@mui/material/Typography';

const imageURL = artisan5;
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "15%",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});


const FlexibleBanniere3: React.FC = () => {
  return <Background>
    <Typography align='center' variant='h3' padding={3}>
      <b>Nous Contacter</b> 
      </Typography>
  </Background>;
};

export default FlexibleBanniere3;


