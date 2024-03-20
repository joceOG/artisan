import React from 'react';
import FlexibleBanniere2 from '../components/FlexibleBanniere/FlexibleBanniereServices';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FlexibleImage2 from '../components/FlexibleImage/FlexibleImage2';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';

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
import a29 from '../assets/a29.jpg';
import a30 from '../assets/a30.jpg';
import FlexibleBanniereServices from '../components/FlexibleBanniere/FlexibleBanniereServices';
import AppServices from '../components/Motion/Banner/BannerServices';
import Container from '@mui/material/Container';

const Services: React.FC = () => {
  return <div>
       
       <FlexibleBanniereServices></FlexibleBanniereServices>
       <AppServices></AppServices>
       
      
       <Box sx={{ pt : 2 , pr : 10 , pl : 10 , pb : 10, display: 'flex', flexWrap: 'wrap'}} >
        
       <ImageList sx={{ 
          
          
            columnCount: {
              xs: '1 !important',
              sm: '2 !important',
              md: '3 !important',
              lg: '3 !important',
              xl: '3 !important'
            }  


        }} variant="masonry" cols={3} >
        {itemData.map((item) => (
               <ImageListItem key={item.img} style={{ padding:'8px'}}>
               <FlexibleImage2
                  src={`${item.img}?w=248&fit=crop&auto=format`} alt={''}/>
               <Container style={{ height:'300px' , backgroundColor:'white' , color:'black'}} >
               <Typography  variant='h5' padding={0.2}>
                <b>{item.title}</b> 
                </Typography>
                 <p style={{ fontSize:'16px'}}>{item.description}</p>
                </Container>
             </ImageListItem>
        ))}
      </ImageList>
       
       </Box>
        
       <Box sx={{ pt : 2 , pr : 10 , pl : 10 , display: 'flex', flexWrap: 'wrap'}} >
        
       <ImageList sx={{ 
          
          
            columnCount: {
              xs: '1 !important',
              sm: '2 !important',
              md: '3 !important',
              lg: '3 !important',
              xl: '3 !important'
            }  


        }} variant="masonry" cols={3}>
        {itemData2.map((item) => (
               <ImageListItem key={item.img} style={{ padding:'8px'}}>
               <FlexibleImage2
                  src={`${item.img}?w=248&fit=crop&auto=format`} alt={''}/>
               <Container style={{ height:'300px' , backgroundColor:'white' , color:'black'}} >
               <Typography  variant='h5' padding={0.2}>
                <b>{item.title}</b> 
                </Typography>
                 <p style={{ fontSize:'16px'}}>{item.description}</p>
                </Container>
             </ImageListItem>
        ))}
      </ImageList>
       </Box>

       <Footer/>

  </div>;

};
                           
export default Services;


const itemData = [
  {
    img: a17,
    title: 'Coiffure H/F',
    description: 'Nos coiffeurs spécialisés dans les coupes magnifiques vous offriront une expérience de coiffure personnalisée. Du classique au contemporain, nous maîtrisons les dernières tendances en matière de coiffures hommes /Femmes . Que vous souhaitiez une coupe courte, une barbe bien entretenue ou un look plus audacieux, nous sommes là pour vous aider à trouver le style qui vous correspond le mieux.',
  },
  {
    img: a20,
    title: 'Spa',
    description: 'Nos massages relaxants sont conçus pour apaiser l\'/esprit, détendre les muscles et rétablir l\'\équilibre intérieur. Nos thérapeutes expérimentés utilisent des techniques spécialisées pour vous offrir une expérience unique de relaxation profonde. Massage suédois Massage aux pierres chaudes Massage aromathérapie Réflexologie plantaire Massage du dos et de la nuque Soins du Visage.',
  },
  {
    img: a29,
    title: 'Jakuzi',
    description: 'Notre jacuzzi vous offre une expérience de détente inégalée. Plongez dans des eaux chaudes et réconfortantes qui apaisent vos muscles, stimulent la circulation sanguine et libèrent les tensions.',
  },
];

const itemData2 = [
  {
    img: a30,
    title: 'Hamman',
    description: 'Notre hammam traditionnel est conçu pour vous offrir une expérience authentique du rituel de bain oriental. L\'\atmosphère apaisante et la chaleur humide du hammam créent un environnement idéal pour purifier la peau, relâcher les tensions musculaires et détendre l\'\esprit.Notre jacuzzi vous offre une expérience de détente inégalée. Plongez dans des eaux chaudes et réconfortantes qui apaisent vos muscles, stimulent la circulation sanguine et libèrent les tensions. Notre jacuzzi est conçu pour créer une atmosphère apaisante et intime, vous permettant de vous détendre en toute quiétude.',
  },
  {
    img: a7,
    title: 'Salle de Cigare',
    description: 'Notre collection de cigares est le fruit d\'une sélection minutieuse des meilleurs producteurs de cigares du monde. Chaque cigare a été choisi pour sa qualité, son arôme et son caractère distinctif, offrant ainsi à nos clients une gamme diversifiée pour satisfaire tous les palais',
  },
  {
    img: a8,
    title: 'Pedicure/Manicure',
    description: 'Découvrez le summum du luxe et du bien-être pour vos mains et vos pieds chez [L\'\artisan du bien être]. Nos services de manucure et pédicure sont conçus pour vous offrir une expérience de beauté et de détente inégalée.',
  },
];

/*
       <Box sx={{ pt: 6 , pr : 15 , pl : 15}}>
        
        <ImageList variant="masonry" cols={3} rowHeight={600}>
         {itemData2.map((item) => (
                <ImageListItem key={item.img} style={{ padding:'8px'}}>
                <FlexibleImage2
                   src={`${item.img}?w=248&fit=crop&auto=format`} alt={''}/>
                <Container style={{ height:'250px' , backgroundColor:'white' , color:'black'}} >
                <Typography  variant='h5' padding={0.2}>
                 <b>{item.title}</b> 
                 </Typography>
                 <p style={{ fontSize:'16px'}}>{item.description}</p>
                  </Container>
              </ImageListItem>
         ))}
       </ImageList>
        </Box>

        */