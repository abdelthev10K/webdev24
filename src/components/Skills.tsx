import React from 'react';
import { FaNetworkWired, FaCloud, FaLinux, FaPython, FaCode } from 'react-icons/fa';
// Assuming Matlab icon is not available, using a generic icon
import { SiPython } from 'react-icons/si'; // This is just an example, you can choose an appropriate icon

const Skills: React.FC = () => {
  return (
    <section className="p-6 my-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Compétences Techniques</h2>
      <ul className="grid grid-cols-2 gap-4 text-gray-700">
        <li className="flex items-center"><FaNetworkWired className="mr-2" /> Réseaux</li>
        <li className="flex items-center"><FaCloud className="mr-2" /> Sécurité cloud</li>
        <li className="flex items-center"><FaLinux className="mr-2" /> Linux</li>
        <li className="flex items-center"><SiPython className="mr-2" /> Matlab</li> {/* Assuming SiPython for Matlab */}
        <li className="flex items-center"><FaPython className="mr-2" /> Python</li>
        <li className="flex items-center"><FaCode className="mr-2" /> Langage C</li>
      </ul>
    </section>
  );
};

export default Skills;
