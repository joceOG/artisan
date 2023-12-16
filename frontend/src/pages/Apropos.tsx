import React from 'react';
import FlexibleBanniereApropos from '../components/FlexibleBanniere/FlexibleBanniereApropos';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import { Map } from "../components/Map";

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

   <Box sx={{ padding : 18}}>
          <Grid container  >
          <Grid item xs={6}>
          <Box sx={{ padding : 10}}>
          <Typography  variant='h4' padding={0.2}>
                <b>Artisan Coiffure</b> 
                </Typography>
            <p>
            Écrivez un ou deux paragraphes décrivant votre produit ou vos services. Pour réussir, votre contenu doit être utile à vos lecteurs.
            Commencez par le client: trouvez ce qu'il veut et donner-le lui.
            </p>
            <br></br>
            <ColorButton variant="contained">Contactez Nous</ColorButton>   
            </Box>   
          </Grid>
          <Grid item xs={6}>
          </Grid>
          </Grid>
     
       </Box>
  <Footer/>

  </div>;
};

export default Apropos;