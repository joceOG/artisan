import React from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ListTextIcon from '../components/ListTextIcon';
import ListTextIcon2 from '../components/ListTextIcon2';
import FlexibleBanniere3 from '../components/FlexibleBanniere4';
import FlexibleBanniere4 from '../components/FlexibleBanniere4';

const Contacts: React.FC = () => {
  return <div>
    <FlexibleBanniere4/>
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