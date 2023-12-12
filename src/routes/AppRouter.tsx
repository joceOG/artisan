import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from '../components/Header/Headers';
import Reservations from '../pages/Reservations';
import Contacts from '../pages/Contacts';
import Services from '../pages/Services';
import Apropos from '../pages/Apropos';
import Accueil from '../pages/Accueil';
import Reservations2 from '../pages/Reservations2';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Headers/>
        <Routes>
        <Route path ="/" element={<Accueil />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Reservations2" element={<Reservations2/>} />
        </Routes>
    </Router>
  );
};

export default AppRouter;