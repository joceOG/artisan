import React from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ListTextIcon2 from '../components/ListText/ListTextIcon2';
import FlexibleBanniereContact from '../components/FlexibleBanniere/FlexibleBanniereContact';

const Contacts: React.FC = () => {
  return <div>
    <FlexibleBanniereContact/>
  <Container sx={{ pt : 18}}>
            <Box>
            <Grid container >
                <Grid item xs={8}>
                <ContactForm/>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ pt : 4}}>Ma société</Typography>
                  <ListTextIcon2/>
                </Grid>
            
                </Grid>
                
            </Box>


         </Container>
    

      <Footer/>
  </div>;
};

export default Contacts;