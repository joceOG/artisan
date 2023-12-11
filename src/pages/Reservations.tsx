import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
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
import FlexibleBanniereReservations from '../components/FlexibleBanniere/FlexibleBanniereReservations';
import BannerReservations from '../components/Motion/Banner/BannerReservations';
import AppReservations from '../components/Motion/App/AppReservations';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton/IconButton';
import AddCircle from '@mui/icons-material/AddCircle';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { imagefrombuffer } from "imagefrombuffer";


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


//Dialog Ajouter Article
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Reservations: React.FC = () => {

  //FormItem 
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prix', prix);
    if (image) {
      formData.append('image', image as File);
    }

    try {
      await axios.post('http://localhost:3000/api/service', formData);
      // Optionally, you can redirect or perform any other action after successful submission.
    } catch (error) {
      console.error(error);
    }
    handleClose();
  };




  const navigate = useNavigate();
    
//Dialog Fonctions
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

  
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
const [prixSelect, setPrixSelect] = React.useState('');

const handleChangeSelect = (event: SelectChangeEvent) => {
  setPrixSelect(event.target.value);
};


const [service, setService] = React.useState(null);

const fetchData = async () => {
  let data = '';
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/service',
    headers: { },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    setService(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
  
};

React.useEffect(() => {
  fetchData();
}, []); 

if (!service) return null;

function toReservations2( item : any ) {
  navigate('/Reservations2', { state: item});
}


  return  <div >
            <FlexibleBanniereReservations/>
            <AppReservations/>
        <Container component="section">
          <Grid container sx={{pt:0}}>
                <Grid item xs={3} >
                                 
                  <Box sx={{pt:5}}>
                  <Typography fontSize={16} fontWeight={600} sx={{ m:2 , width:200}}>Fourchette de prix</Typography>
                      <Grid  container spacing={6}>
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
                  <div className="center">
                  <IconButton color="secondary" sx={{mr :7}} aria-label="add an alarm" onClick={handleClickOpen}>
                    <AddCircle />
                  </IconButton>
                  <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                      >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                          Ajouter un article
                        </DialogTitle>
                        <IconButton
                          aria-label="close"
                          onClick={handleClose}
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                          }}
                        >
                          <CloseIcon />
                          
                        </IconButton>
                        <DialogContent dividers>
                        <form onSubmit={handleSubmit}>
                            <TextField
                              label="Nom"
                              variant="outlined"
                              name="nom"
                              value={nom}
                              onChange={(e) => setNom(e.target.value)}
                              fullWidth
                              margin="normal"
                            />
                            <TextField
                              label="Prix"
                              variant="outlined"
                              name="prix"
                              value={prix} 
                              onChange={(e) => setPrix(e.target.value)}
                              fullWidth
                              margin="normal"
                            />
                            <label>
                                Image:
                                <input type="file" onChange={handleImageChange} />
                              </label>
                                                  
                          </form>
                        </DialogContent>
                        <DialogActions>
                        <Button type="submit" variant="contained" color="secondary" onClick={handleSubmit}>
                              Enregister
                            </Button>
                        </DialogActions>
                      </BootstrapDialog>
                      

                  </div>
                  
                </Grid>

                  <Grid item xs={12} sm={6}>     
                             
                       <Box sx={{ mt: 6  }}>    
                       <SearchField onSearch={function (query: string): void {
                        throw new Error('Function not implemented.');
                      }}></SearchField>    
                      <br></br>         
                            <ImageList cols={2} rowHeight={440}>
                              {service.map((item) => (
                                <a onClick={() => { toReservations2(item) }}> 
                                <div className='nolink'>
                                <ImageListItem key={item.image} sx={{ padding : 0.9 }}>
                                <img src={imagefrombuffer({
                                      type: item.image.type,
                                      data: item.image.data,
                                    })}
                                  />
                                  <ImageListItemBar
                                    title={<Typography variant="h6" style={{ color:'#FDCE4D' }}><b>{item.nom}</b> </Typography>}
                                    subtitle={<Typography variant="subtitle1" style={{ color:'#FFFFFF' }}><b>{item.prix}</b> </Typography>}
                                    position="below"
                                  />
                                </ImageListItem>

                                </div>
                                </a>
                              ))}
                            </ImageList>
                       </Box>
                  </Grid>
                  <Grid item xs={3}>
                  <Box sx={{ mt: 2 , ml: 4}}>
                      <Stack sx={{pt:5}} direction="row" spacing={1} useFlexGap>
                         <Typography fontSize={16} fontWeight={500} width={100}>Trier par</Typography>
                         <FormControl fullWidth>
                                      <InputLabel sx={{ backgroundColor:'white' }} id="demo-simple-select-label"></InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={prixSelect}
                                        sx={{ backgroundColor:'white' , color:'black' , height:'40px' , width:'200px' }}
                                        onChange={handleChangeSelect}
                                      >
                                        <MenuItem sx={{ backgroundColor:'white' , color:'black' }} value={1}>Prix croissant</MenuItem>
                                        <MenuItem sx={{ backgroundColor:'white' , color:'black' }}  value={2}>Prix décroissant</MenuItem>
                                      </Select>
                                    </FormControl>
                      </Stack>
                    </Box>
                  </Grid>
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

export default Reservations;

