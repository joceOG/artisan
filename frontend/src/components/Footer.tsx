import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import ListText from './ListText/ListText';
import ListTextIcon from './ListText/ListTextIcon';
import SocialMediaIcon from './SocialMediaIcon';
import { Grid, Row, Col } from "rsuite"; 
const Footer: React.FC = () => {
  return <div >
         <Container sx={{ mt: 5 , mb:3}}>
         <Grid> 
              <Row> 
              <Col xs={16}  sm={8}  md={4} lg={8}> 
                    <Box>
                    <h1><b>Artisan Coiffure</b></h1>
                    </Box>
                    <Box sx={{ mt: 2 , mb:1 }}>
                    <ListText/>
                    </Box>
                </Col>
                <Col xs={16}  sm={12}  md={4} lg={8}> 
                <Box sx={{ mt: 2}}>
                <Typography>
                Nous sommes une équipe de passionnés dont le but est d'améliorer la vie de chacun.
                Nos services s'adressent aux petites et moyennes entreprises.
                </Typography>
                </Box>
                <Box sx={{ mt: 3.5}}>
                  <ListTextIcon/>
                </Box>
                </Col>
                <Col xs={16}  sm={8}  md={4} lg={8}> 
                <Box sx={{ mb: 3 , ml : 0.5}}>
                <SocialMediaIcon/>
                </Box>
                </Col>
                </Row>
                </Grid>
            
         </Container>

  </div>;
};

export default Footer;