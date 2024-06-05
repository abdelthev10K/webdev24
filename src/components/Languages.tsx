import React from 'react';

const Languages: React.FC = () => {
  return (
    <section className="p-6 my-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Compétences Linguistiques</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Arabe</li>
        <li>Français</li>
        <li>Anglais</li>
      </ul>
    </section>
  );
};

export default Languages;
