import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="p-6 my-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Formation et Diplômes</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Baccalauréat international option française filière sciences mathématiques mention "très Bien" 2020</li>
        <li>Classe préparatoires scientifique Mathématiques Physique (MP) 2020/2022</li>
        <li>Ecole Mohammadia d'ingénieurs Génie Réseaux et Télécommunications 2022/2025</li>
      </ul>
    </section>
  );
};

export default Education;
