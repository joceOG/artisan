import React from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ListTextIcon2 from '../components/ListText/ListTextIcon2';
import FlexibleBanniereContact from '../components/FlexibleBanniere/FlexibleBanniereContact';
import { Col, Row } from 'rsuite';

const Contacts: React.FC = () => {
  return <div>
    <FlexibleBanniereContact/>
 <br></br>
  <Row >
  <Col xs={24}  sm={12}  md={6} lg={12}>
    <Box sx={{ pt :15 , pb :15 , pr :5 , pl :20 }}> 
          <Typography sx={{ pt : 4}}>Ma société</Typography>
                  <ListTextIcon2/>
    </Box>
        
  </Col>
  <Col xs={24}  sm={12}  md={6} lg={12}>
 <ContactForm/>
  </Col>
              
  </Row>
    
  <Footer/>
  </div>;
};

export default Contacts;