import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, FC, useState } from 'react';
import Slider from '@mui/material/Slider';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchField from '../components/SearchField';
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer';

import a22 from '../assets/a22.jpg';
import a19 from '../assets/a19.jpg';
import a25 from '../assets/a25.jpg';
import FlexibleBanniere5 from '../components/FlexibleBanniere5';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

//Slider//
function valuetext(value: number) {
  return `${value}°C`;
}
const minDistance = 10;

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const Reservations: React.FC = () => {
//Search
const [searchQuery, setSearchQuery] = React.useState<string>('');

const handleSearch = (query: string): void => {
  setSearchQuery(query);
  // You can perform your search logic here using the 'query'.
};
 
  const [value1, setValue1] = React.useState<number[]>([20, 37]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState<number[]>([20, 37]);

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }

  };



  //SelectSearch
const [prix, setPrix] = React.useState('');

const handleChangeP = (event: SelectChangeEvent) => {
  setPrix(event.target.value);
};


  return <div >
            <FlexibleBanniere5/>
            <Grid container sx={{pr:12, pl:12 , pt:14}}>
                <Grid item xs={3}>
                  <Box sx={{p : 2}}>
                    <h2><b>Fourchette de prix</b></h2>
                  </Box>
                  <Box>
                      <Grid container item>
                      <Grid item xs={6}><Typography fontSize={12} fontWeight={300}>1000,00 FCFA</Typography></Grid>
                      <Grid item xs={6}><Typography fontSize={12} fontWeight={300}>20000,00 FCFA</Typography></Grid>
                      </Grid>
                  
                  </Box>
                  <Box sx={{ width: 250 }}>
                    <Slider
                    sx={{
                      '& .MuiSlider-thumb': {
                        color: "#FDCE4D" },
                        '& .MuiSlider-track': {
                          color: "#FDCE4D"
                      },
                      '& .MuiSlider-rail': {
                          color: "#acc4e4"
                      },
                      '& .MuiSlider-active': {
                          color: "green"
                      }
                      }}
                      getAriaLabel={() => 'Minimum distance'}
                      value={value1}
                      onChange={handleChange1}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      disableSwap
                    />
                  </Box>
                </Grid>

                  <Grid item xs={6}>     
                             
                       <Box sx={{ mt: 6}}>    
                       <SearchField onSearch={function (query: string): void {
                        throw new Error('Function not implemented.');
                      }}></SearchField>    
                      <br></br>         
                            <ImageList sx={{ height: 450 }}>
                              {itemData.map((item) => (
                                <ImageListItem key={item.img} sx={{ padding : 1.5 }}>
                                  <img
                                    src={item.img}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    title={<Typography variant="h6" style={{ color:'#FDCE4D' }}><b>{item.title}</b> </Typography>}
                                    subtitle={<Typography variant="subtitle1"><b>{item.author}</b> </Typography>}
                                    position="below"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                       </Box>
                  </Grid>
                  <Grid item xs={3}>
                  <Box sx={{ mt: 6 , ml: 4}}>
                      <Stack direction="row" spacing={1} useFlexGap>
                         <Typography fontSize={16} fontWeight={300} width={100}>Trier par</Typography>
                         <FormControl fullWidth>
                                      <InputLabel sx={{ backgroundColor:'white' }} id="demo-simple-select-label"></InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={prix}
                                        sx={{ backgroundColor:'white' , color:'black' , height:'40px' , width:'200px' }}
                                        onChange={handleChangeP}
                                      >
                                        <MenuItem sx={{ backgroundColor:'white' , color:'black' }} value={1}>Prix croissant</MenuItem>
                                        <MenuItem sx={{ backgroundColor:'white' , color:'black' }}  value={2}>Prix décroissant</MenuItem>
                                      </Select>
                                    </FormControl>
                      </Stack>
                    </Box>
                  </Grid>
              </Grid>

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

export default Reservations;

