import React from 'react';
import FlexibleBanniereApropos from '../components/FlexibleBanniere/FlexibleBanniereApropos';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
//import MapComponent from '../components/Mapcomponent';
import { Grid, Row, Col } from "rsuite"; 
import Map from '../components/Map';

const Apropos: React.FC = () => {


  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
    width:200
  }));
  
  
  return <div>
   <FlexibleBanniereApropos></FlexibleBanniereApropos>

       <Row> 
       <Col xs={24}  sm={12}  md={6} lg={12}> 
       <Box sx={{ pt : 10 , pb : 10 , pr: 5 , pl:8 }}>
          <Typography  variant='h4' padding={0.2}>
                <b>Artisan Coiffure</b> 
                </Typography>
            <p>
            L'artisan du bien être est un lieu dédié à la détente, 
            à la relaxation et à la promotion du bien-être physique, 
            mental et émotionnel. 
            Nous offrons une variété de services et d'installations
            visant à aider les individus à se ressourcer, 
            à réduire le stress et à améliorer leur qualité de vie. 
            </p>
            <br></br>
            <ColorButton variant="contained">Contactez Nous</ColorButton>   
            </Box>     
        </Col> 
        <Col xs={24} sm={12} md={6} lg={12} > 
                <Box sx={{ pr : 10 , pl: 10 , pt:5 }} > 
                   <Map/> 
                </Box>
         </Col>       

       </Row> 

  <Footer/>

  </div>;
};

export default Apropos;