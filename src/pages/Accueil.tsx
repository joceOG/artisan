import React from 'react';
import imgartisan1 from '../assets/artisan1.jpg'
import imgartisan2 from '../assets/artisan2.jpg'
import imgartisan3 from '../assets/artisan3.jpg'
import imgartisan4 from '../assets/artisan4.jpg'
import imgartisan5 from '../assets/artisan5.jpg';
import a15 from '../assets/a15.jpg';
import a17 from '../assets/a17.jpg';

import FlexibleImage from '../components/FlexibleImage';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Grid from '@mui/material/Grid';
import { Box, Button, CardMedia, Container, Paper, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel/dist/components/Carousel';
import FlexibleBanniere from '../components/FlexibleBanniere';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import GalerieAccueil from '../components/GalerieAccueil';
import Produits from '../components/Produits';
import Footer from '../components/Footer';



const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: yellow[500],
  height : 80,
  '&:hover': {
    backgroundColor: yellow[700],
    
  },
}));



const Accueil: React.FC = () => {
  return <div>
          
       <FlexibleBanniere/>
           <Container  style={{ height:'600px' }} >      
            <Box sx={{ mt: 0, p:40 }}>
            <div className="center">
              <Stack spacing={2} >
                <ColorButton variant="contained">DECOUVREZ NOS SERVICES</ColorButton>   
              </Stack>
            </div>   
             </Box>       
           </Container>
    

      <br></br>
      <GalerieAccueil/>
      <Produits/>
      <Footer/>
  </div>;
};

export default Accueil;

/*

<Grid container  >
  <Grid item xs={4} style={{ backgroundColor: '#FDCE4D'}}>
    <Box sx={{ mt: 15}}>
      <h1><b>Artisan Coiffure</b></h1>
    </Box>
    <Box sx={{ mt: 2 , mb:10 }}>
    <Typography fontSize={12} fontWeight={300}>Espace de service de bien être</Typography>
    </Box>
  </Grid>
  <Grid item xs={8}>
  <Carousel>
    <Paper>
    <img src={imgartisan1} alt="logo" height={500} width={1400} />
    </Paper>
    <Paper>
      <img src={imgartisan1}  width={1400} alt="logo" height={500} />
    </Paper>
    <Paper>
      <img src={imgartisan1} className='imgcarroussel' alt="logo" height={500} />
    </Paper>
  </Carousel>
  </Grid>
  </Grid>

   <div className="center">
        <div className='carousel-container'>
            <Carousel>
            <Paper>
            <FlexibleImage src={imgartisan4} alt="Image Crroussel 1" />
            </Paper>
            <Paper>
            <FlexibleImage src={a15} alt="Image Crroussel 2" />
            </Paper>
            <Paper>
            <FlexibleImage src={a17} alt="Image Crroussel 3" />
            </Paper>
           </Carousel>
        </div>
      </div>

  */