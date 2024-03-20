import React, { useState } from 'react';
import { Container, TextField, Button, Stack, InputLabel, Box } from '@mui/material';

interface FormValues {
  nom: string;
  tel : string;
  mail: string;
  sujet: string;
  question: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    nom: '',
    tel: '',
    mail: '',
    sujet: '',
    question: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to a server.
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={4} sx={{ mt : 3 , width : 350}}>
         <InputLabel style={{ width:'120px'}} sx={{ pt : 2}}>Nom</InputLabel>
        <TextField
          label="Nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          fullWidth
          margin="normal"
        /> 
        </Stack>

        <Stack direction="row" spacing={4} sx={{ mt : 3 , width : 350}}>
         <InputLabel style={{ width:'120px'}} sx={{ pt : 2}}>Téléphone</InputLabel>
        <TextField
          label="Téléphone"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          fullWidth
          margin="normal"
        /> 
        </Stack>

        <Stack direction="row" spacing={4}  sx={{ mt : 3 , width : 350}}>
         <InputLabel style={{ width:'120px' }} sx={{ pt : 2}} >Email</InputLabel>
        <TextField
          label="Email"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        </Stack>

        <Stack direction="row" spacing={4} sx={{ mt : 3 , width :350 }}>
         <InputLabel style={{ width:'120px'}} sx={{ pt : 2}}>Sujet</InputLabel>
        <TextField
          label="Sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        </Stack>

        <Stack direction="row" spacing={4} sx={{ mt : 3 , width : 350}} >
         <InputLabel style={{ width:'120px'}} sx={{ pt : 2}}>Question</InputLabel>
        <TextField
          label="Question"
          name="question"
          value={formData.question}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        </Stack>
        
        <Box sx={{ justifyContent: 'center' }}>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/Contacts"
          sx={{ mt: 8 , ml:10 }}
        >
            VALIDER
        </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;