import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Reservations from '../pages/Reservations';
import Contacts from '../pages/Contacts';
import Services from '../pages/Services';
import Apropos from '../pages/Apropos';
import Accueil from '../pages/Accueil';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Header/>
        <Routes>
        <Route path ="/" element={<Accueil />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Contacts" element={<Contacts />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;