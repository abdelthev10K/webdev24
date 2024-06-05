import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    title: '',
    cvDescription: '',
    professionalObjective: '',
    educationSection: '',
    diploma: '',
    linguisticSkillsSection: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Traitement des données du formulaire
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="lastName" className="block text-gray-700">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-gray-700">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-gray-700">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="cvDescription" className="block text-gray-700">Description du CV</label>
          <textarea
            id="cvDescription"
            name="cvDescription"
            value={formData.cvDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="professionalObjective" className="block text-gray-700">Objectif Professionnel</label>
          <textarea
            id="professionalObjective"
            name="professionalObjective"
            value={formData.professionalObjective}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="educationSection" className="block text-gray-700">Section de Formation</label>
          <textarea
            id="educationSection"
            name="educationSection"
            value={formData.educationSection}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="diploma" className="block text-gray-700">Diplôme</label>
          <input
            type="text"
            id="diploma"
            name="diploma"
            value={formData.diploma}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="linguisticSkillsSection" className="block text-gray-700">Section Compétences Linguistiques</label>
          <textarea
            id="linguisticSkillsSection"
            name="linguisticSkillsSection"
            value={formData.linguisticSkillsSection}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Envoyer</button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
