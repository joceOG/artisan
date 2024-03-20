import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import { styled } from '@mui/material/styles';

import Footer from '../components/Footer';

import a22 from '../assets/a22.jpg';
import a19 from '../assets/a19.jpg';
import a25 from '../assets/a25.jpg';
import FlexibleBanniereReservations from '../components/FlexibleBanniere/FlexibleBanniereReservations';

import AppReservations from '../components/Motion/App/AppReservations';
import Container from '@mui/material/Container';
import axios from 'axios';
import Button, { ButtonProps } from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import FlexibleImage from '../components/FlexibleImage/FlexibleImage';
import { Grid, Row, Col } from "rsuite"; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { imagefrombuffer } from "imagefrombuffer";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: yellow[500],
  '&:hover': {
    backgroundColor: yellow[700],
  },
  width:200
}));

const baseURL = "https://api.artisandubienetre.co/api/service";

const Reservations2: React.FC = () => {
//Search


const location = useLocation();
console.log(location.state) ;



 
  return <div >
            <FlexibleBanniereReservations/>
            <AppReservations/>
        <Container component="section">
                                                               
                      <Grid> 
                       <Row> 
                   
                    <Col xs={24}  sm={12}  md={6} lg={12}> 
                             <Box sx={ {p : 0.2 }}>
                              <FlexibleImage src={imagefrombuffer({
                                      type: location.state.image.type,
                                      data: location.state.image.data,
                                    })} alt={''}/>
                            </Box> 
                    </Col> 
                    <Col xs={24} sm={12} md={6} lg={12} > 
                          <Box sx={{ padding : 2 , ml:5}}>
                                  <Typography variant='h3' padding={1.3} style={{ color:'#FDCE4D' }}>
                                     <b>{location.state.nom}</b> 
                                      </Typography>
                                      <Typography  variant='h3' padding={1.3}>
                                     <b>{location.state.prix}</b> 
                                      </Typography>
                                      <Box sx={{ padding : 2 }}>
                                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                                         <DatePicker />
                                      </LocalizationProvider>
                                      </Box>
                                      <Box sx={{ padding : 2 }}>
                                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                                         <TimePicker />
                                      </LocalizationProvider>
                                      </Box>
                                       
                                      <Typography  fontSize={6} fontWeight={250} padding={1.3}>
                                            <p><b>
                                          Condition générale <br></br>
                                          Délai de réponse 1j
                                          </b>
                                              </p>
                                      </Typography>
                                      
                                  <br></br>
                             <ColorButton variant="contained">Réservez</ColorButton>   
                                  </Box>    
                    </Col> 

                </Row> 
            </Grid> 
              
           </Container>
              <Footer/>

  </div>;
};


const itemData = [
  {
    img: a22,
    title: 'Coffure',
    author: '5 000 FCFA',
  },
  {
    img: a25,
    title: 'Spa',
    author: '10 000 FCFA',
  },
  {
    img: a19,
    title: 'Pedicure / Manicure',
    author: '3 000 FCFA',
  },
  
];

export default Reservations2;

