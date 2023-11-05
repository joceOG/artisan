import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/TypographyG';
import imgartisan1 from '../assets/artisan1.jpg'
import imgartisan2 from '../assets/artisan2.jpg'
import imgartisan3 from '../assets/artisan3.jpg'
import imgartisan4 from '../assets/artisan4.jpg'
import imgartisan5 from '../assets/artisan5.jpg';
import a11 from '../assets/a11.png';
import a8 from '../assets/a8.jpg';
import a4 from '../assets/a4.jpeg';
import a7 from '../assets/a7.jpg';
import a17 from '../assets/a17.jpg';
import a13 from '../assets/a13.png';
import a18 from '../assets/a18.jpg';
import a19 from '../assets/a19.jpg';
import a20 from '../assets/a20.jpg';
import a21 from '../assets/a21.jpg';
import a22 from '../assets/a22.jpg';
import a23 from '../assets/a23.jpg';
import a24 from '../assets/a24.jpg';
import a25 from '../assets/a25.jpg';
import a26 from '../assets/a26.jpg';
import a27 from '../assets/a27.jpg';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: a11,
    title: 'Salon',
    width: '40%',
  },
  {
    url: a8,
    title: 'Massage',
    width: '20%',
  },
  {
    url: a4,
    title: 'Coiffure',
    width: '40%',
  },
  {
    url: a7,
    title: 'Cigare',
    width: '38%',
  },
  {
    url: a17,
    title: 'Coiffure',
    width: '38%',
  },
  {
    url: a13,
    title: 'Salons',
    width: '24%',
  },
  {
    url: a27,
    title: 'Bien être',
    width: '40%',
  },
  {
    url: a26,
    title: 'Spa',
    width: '20%',
  },
  {
    url: a25,
    title: 'Soins',
    width: '40%',
  },
];

export default function GalerieAccueil() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
       GALERIE
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
