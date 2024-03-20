import React from 'react';

import FlexibleImage from '../components/FlexibleImage/FlexibleImage';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Grid from '@mui/material/Grid';
import { Box, Button, CardMedia, Container, CssBaseline, Paper, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel/dist/components/Carousel';
import FlexibleBanniereA from '../components/FlexibleBanniere/FlexibleBanniereAccueil';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import GalerieAccueil from '../components/GalerieAccueil';
import Produits from '../components/Produits';
import Footer from '../components/Footer';
import FlexibleBanniereAccueil from '../components/FlexibleBanniere/FlexibleBanniereAccueil';
import App2 from '../components/Motion/App/App2';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: yellow[500],
  height : 80,
  '&:hover': {
    backgroundColor: yellow[700],
    
  },
}));

const Accueil: React.FC = () => {
  return <div>
       <FlexibleBanniereAccueil/>
       <App2/>
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

<Grid container >
  <Grid item xs={3} style={{}}>
    <Box sx={{ mt: 15 , mr :10 , ml:10}}>
      <h1><b>Artisan Coiffure</b></h1>
    <Typography fontSize={12} fontWeight={300}>Espace de service de bien être</Typography>
    </Box>
  </Grid>
  <Grid item xs={9}>
  <Container component="section" maxWidth="xs" >
        <Box
          sx={{
            position:"relative",
            marginTop: 3,
            display: 'flex',
            alignItems: 'right',
          }}
        >
          <div style={{
              width: 450,
              height:300,
            }}>
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
        </Box>
      </Container>
  </Grid>

  </Grid>

  */