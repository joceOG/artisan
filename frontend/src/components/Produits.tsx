import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/ButtonG';
import Typography from '../components/TypographyG';
import a3 from '../assets/a3.jpg';
import a10 from '../assets/a10.png';
import a14 from '../assets/a14.png';
import a9 from '../assets/a9.png';
import a1 from '../assets/a1.png';
import a28 from '../assets/a28.jpg';


const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 1,
};

const number = {
  fontSize: 28,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'bold',
};

const image = {
  height: 55,
  my: 2,
};

function Produits() {
  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', bgcolor: 'white', overflow: 'hidden' , color : 'black'}}
    >
      <Container
        sx={{
          mt: 5,
          mb: 5,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={"/static/themes/onepirate/productCurvyLines.png"}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -100,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 6 }}>
            Services
        </Typography>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={6} md={2}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src={a28}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Coiffure H/F
                </Typography>
                <p>
                Nos coiffeurs spécialisés dans les coupes magnifiques vous offriront une expérience de coiffure personnalisée. 
                </p>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src={a14}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Spa 
                  <br></br>
                </Typography>
                <p>
                Nos massages relaxants sont conçus pour apaiser l'esprit, détendre les muscles et rétablir l'équilibre intérieur.
                </p>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src={a9}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Jacuzzi<br></br>
                </Typography>
                <p>
                Notre jacuzzi vous offre une expérience de détente inégalée. 
                </p>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box sx={item}>
                <Box sx={number}>4.</Box>
                <Box
                  component="img"
                  src={a1}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Espace Cigare <br></br>
                </Typography>
                <p>
                Notre collection de cigares est le fruit d'une sélection minutieuse des meilleurs producteurs de cigares du monde.
                </p>
              </Box>
            </Grid> 

            <Grid item xs={6} md={2}>
              <Box sx={item}>
                <Box sx={number}>5.</Box>
                <Box
                  component="img"
                  src={a3}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Hammam <br></br>
                </Typography>
                <p>
                Notre hammam traditionnel est conçu pour vous offrir une expérience authentique du rituel de bain oriental. 
                </p>
              </Box>
            </Grid> 
            <Grid item xs={6} md={2}>
              <Box sx={item}>
                <Box sx={number}>6.</Box>
                <Box
                  component="img"
                  src={a10}
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Pedicure/Manicure
                </Typography>
                <p>
                Découvrez le summum du luxe et du bien-être pour vos mains et vos pieds..
                </p>
              </Box>
            </Grid>              
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/services"
          sx={{ mt: 4 }}
        >
          En savoir plus
        </Button>
      </Container>
    </Box>
  );
}

export default Produits;
