import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Objective from './components/Objective';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="container mx-auto p-6">
        <Header />
        <nav className="flex justify-center space-x-4 mb-6">
          <Link to="/" className="text-blue-500 hover:text-blue-700">Accueil</Link>
          <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <PersonalInfo />
              <Objective />
              <Education />
              <Skills />
              <Languages />
              <Hobbies />
            </motion.div>
          } />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <footer className="text-center py-6">
          <p>&copy; 2024 Mon CV. Tous droits réservés.</p>
          <a href="https://www.linkedin.com/in/abdelhak-bouhiyate-390a82268/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
        </footer>
      </div>
    </div>
  );
};

export default App;
