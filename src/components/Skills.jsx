import React from "react";
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiGithubBadge,
    DiVisualstudio,
    DiMysql,
} from "react-icons/di";

import { 
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiLaravel,
    SiCanva,
    SiFigma,
    SiTailwindcss,
    SiVuedotjs,
} from "react-icons/si";

const skills = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Vue.js', icon: <SiVuedotjs className='text-green-500' /> },
      ],
    },
    {
      category: 'Backend & Database',
      technologies: [
        { name: 'Node.js', icon: <DiNodejsSmall className='text-green-500' /> },
        { name: 'Laravel', icon: <SiLaravel className='text-red-600' /> },
        { name: 'MySQL', icon: <DiMysql className='text-blue-700' /> },
      ],
    },
    {
      category: 'Tools & Version Control',
      technologies: [
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'Visual Studio Code', icon: <DiVisualstudio className='text-blue-500' /> },
      ],
    },
    {
      category: 'UI/UX & Design',
      technologies: [
        { name: 'Figma', icon: <SiFigma className='text-purple-500' /> },
        { name: 'Canva', icon: <SiCanva className='text-blue-400' /> },
        { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className='text-blue-600' /> },
        { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className='text-orange-500' /> },
      ],
    },
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I have experience working on frontend, backend, database, and UI/UX design projects. 
            Check out my work <a href="#" className="underline">here</a>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Skills;
