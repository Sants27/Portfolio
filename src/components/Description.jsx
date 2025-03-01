// React imports Profile and Logo
import profilepic from "../assets/profile/profpic.png";
import logoSMA from "../assets/logo/logoSMA.png";
import logoBinus from "../assets/logo/logoBinus.png";

// React imports Icons
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
  DiNpm,
} from "react-icons/di";

import { 
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiLaravel,
  SiCanva,
  SiFigma,
  SiTailwindcss,
  SiVuedotjs,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiFramer,
} from "react-icons/si";


// Komponen Skill Badge
const SkillBadge = ({ icon, name }) => {
  return (
    <div className="bg-white rounded-full py-2 px-4 flex items-center gap-2 shadow-sm mb-3">
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
};

// Komponen Section Header
const SectionHeader = ({ title }) => {
  return (
    <div className="w-full text-center my-4 relative">
      <h2 className="text-4xl font-bold text-yellow-400 relative z-10">{title}</h2>
    </div>
  );
};

// Data untuk tampilan
const designTools = [
  { icon: <SiAdobephotoshop className="text-blue-600" />, name: "Adobe Photoshop" },
  { icon: <SiAdobeillustrator className="text-orange-600" />, name: "Adobe Illustrator" },
  { icon: <SiCanva className="text-blue-500" />, name: "Canva" },
  { icon: <SiFigma className="text-purple-500" />, name: "Figma" },
];

const technologies = [
  { icon: <DiHtml5 className="text-orange-600" />, name: "HTML" },
  { icon: <DiCss3 className="text-blue-600" />, name: "CSS" },
  { icon: <DiSass className="text-pink-600" />, name: "Sass" },
  { icon: <DiBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <DiJavascript1 className="text-yellow-500" />, name: "JavaScript" },
  { icon: <DiReact className="text-blue-400" />, name: "ReactJS" },
  { icon: <SiFramer className="text-pink-600" />, name: "Framer Motion" },
  { icon: <SiNextdotjs className="text-gray-800" />, name: "NextJS" },
  { icon: <SiVuedotjs className="text-green-500" />, name: "VueJS"},
  { icon: <DiNodejsSmall className="text-green-600" />, name: "NodeJS" },
  { icon: <DiMysql className="text-blue-800" />, name: "MYSQL" },
  { icon: <SiLaravel className="text-red-600" />, name: "Laravel" },
  { icon: <DiNpm className="text-red-600" />, name: "NPM" },
];

const devTools = [
  { icon: <DiVisualstudio className="text-blue-500" />, name: "Visual Studio Code" },
  { icon: <DiGithubBadge className="text-gray-800" />, name: "GitHub" },
  { icon: <SiNotion className="text-gray-900" />, name: "Notion" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
];

const Description = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mt-24">
      {/* Profile header with image and name */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gray-300 rounded-full transform scale-110 -z-10"></div>
          <img 
            src={profilepic}
            alt="Profile" 
            className="w-40 h-40 object-cover rounded-full border-2 border-white"
          />
        </div>
        <h1 className="text-4xl font-bold text-slate-200 text-center my-4">Ignatius Varrel Santoso</h1>
        <p className="text-center text-slate-200 max-w-6xl">
          A Computer Science student with a keen passion for frontend development and design. Has worked on various web and IoT projects during academic studies. Dedicated to crafting clean, maintainable, and aesthetically pleasing code to enhance user experience. Actively involved in campus organizations, fostering strong communication, critical thinking, and decision-making skills. Enthusiastic about making meaningful contributions to frontend development and creating user-focused digital experiences.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-slate-200 mt-4 mb-6">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* High School */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">

            <div className="flex items-start gap-4">
         
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img src={logoSMA} alt="Logo SMA" className="w-full h-full object-contain" />
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">SMA Talenta Bandung</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <span>Science</span>
                  <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                  <span>Bandung</span>
                </div>
                <div className="text-sm text-gray-500">Jul 2019 - May 2022</div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-700">
                <p><span className="font-medium">Activities:</span></p>
                <div className="space-y-2">
                  <p className="before:content-['•'] before:mr-2 before:text-black">OSIS SMA Talenta</p>
                </div>
              </div>
            </div>
          </div>

          {/* University */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-start gap-4">
  
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img src={logoBinus} alt="Logo Binus" className="w-full h-full object-contain" />
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">BINUS University</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <span>Computer Science</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>Bandung</span>
                </div>
                <div className="text-sm text-gray-500">Sep 2022 - Present</div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-700">
                <p><span className="font-medium">Activities:</span></p>
                <div className="space-y-2">
                  <p className="before:content-['•'] before:mr-2 before:text-black">Himpunan Mahasiswa Teknik Informatika (HIMTI)</p>
                  <p className="before:content-['•'] before:mr-2 before:text-black">Keluarga Mahasiswa Katolik (KMK)</p>
                  <p className="before:content-['•'] before:mr-2 before:text-black">Teach for Indonesia Student Community (TFI SC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-slate-200 mt-4 mb-2">Skills</h2>
        
        <div className="grid grid-cols-1">
          {/* Design Tools */}
          <SectionHeader title="Design Tools I Use" />
          <div className="flex flex-wrap gap-3 justify-center">
            {designTools.map((tool, index) => (
              <SkillBadge key={index} icon={tool.icon} name={tool.name} />
            ))}
          </div>
          
          {/* Technologies */}
          <SectionHeader title="Technologies I Use" />
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <SkillBadge key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        
          {/* Development Tools */}
          <SectionHeader title="Development & Productivity Tools I Use" />
          <div className="flex flex-wrap gap-3 justify-center">
            {devTools.map((tool, index) => (
              <SkillBadge key={index} icon={tool.icon} name={tool.name} />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Description;