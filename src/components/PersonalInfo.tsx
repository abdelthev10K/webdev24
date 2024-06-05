import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const PersonalInfo: React.FC = () => {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Informations Personnelles</h2>
      <ul className="space-y-2">
        <li><strong>Nom:</strong> Bouhiyate</li>
        <li><strong>Prénom:</strong> Abdelhak</li>
        <li><strong>Âge:</strong> 21</li>
        <li className="flex items-center"><FaPhone className="mr-2" /> 0639427746</li>
        <li className="flex items-center"><FaEnvelope className="mr-2" /> bouhiyateabdelhak@gmail.com</li>
      </ul>
    </section>
  );
};

export default PersonalInfo;
