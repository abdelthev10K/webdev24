import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="text-center py-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
      <img src="profile1_Linkedin.jpg" alt="Bouhiyate Abdelhak" className="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-lg"/>
      <h1 className="text-4xl font-bold mt-4">Bouhiyate Abdelhak</h1>
      <p className="text-xl mt-2">Expert en Sécurité des Réseaux et des Systèmes d'Informations</p>
      <a href="https://www.linkedin.com/in/abdelhak-bouhiyate-390a82268/" className="flex items-center justify-center mt-4 text-white hover:text-gray-300">
        <FaLinkedin className="mr-2" /> LinkedIn
      </a>
    </header>
  );
};

export default Header;
