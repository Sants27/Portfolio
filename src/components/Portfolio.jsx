// import { FaJs, FaPython } from 'react-icons/fa';
import { DiBootstrap, DiMysql } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiFigma, SiAdobeillustrator, SiLaravel, SiVuedotjs, SiCplusplus } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';

// Using your existing project images
import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";
import project4 from "../assets/project/project4.png";

const Projects = () => {
  // URLs untuk setiap proyek
  const githubUrl1 = "https://github.com/Arfan301/projectWebDev_Sem5";
  const githubUrl2 = "https://www.figma.com/proto/t2mCt4MomVNnl2eqJvEPiJ/FindIT?node-id=0-1&t=rZOIakurDaADPFIw-1";
  const githubUrl3 = "https://github.com/Sants27/My-First-Blog-use-Next-JS";
  const githubUrl4 = "https://www.canva.com/design/DAGYzcoA72s/4OyJxXb5U4k_TPQDjZm5hg/view?utm_content=DAGYzcoA72s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h34d26610ad";
  const githubProfileUrl = "https://github.com/Sants27?tab=repositories";

  const projects = [
    {
      img: project3,
      title: "Blog Website",
      period: "January - March 2025",
      description: "Project ini adalah sebuah blog website yang saya kembangkan menggunakan Next.js sebagai bagian dari pembelajaran Next.js. Website ini memungkinkan pengguna untuk membaca artikel, menampilkan daftar postingan secara dinamis. Dengan desain yang responsif dan pengalaman pengguna yang lancar, proyek ini menjadi latihan dalam memahami arsitektur Next.js serta penerapan komponen modern dalam pengembangan web.",
      tech: [
        { icon: <SiTailwindcss className="text-cyan-400 text-2xl" />, bg: "bg-white" },
        { icon: <SiNextdotjs className="text-white text-2xl" />, bg: "bg-black" },
      ],
      link: `${githubUrl3}`,
      linkText: "See Source Code"
    },
    {
      img: project1,
      title: "Aetherium Restaurant Management Web",
      period: "November - Desember 2024",
      description: "Project ini merupakan tugas akhir Website Development yang saya kerjakan bersama tim beranggoatan empat orang untuk mempelajari Laravel untuksisi backend, VueJS untuk sisi frontend, dan MySQL untuk databasenya, sekaligus sebagai hasil project akhir untuk mata kuliah Web Development. Kami membangun aplikasi website restoran dengan dua sisi utama: Admin dan User. Admin dapat menambah menu serta melihat reservasi, sementara User bisa melihat menu yang terupdate secara real-time dan melakukan reservasi.",
      tech: [
        { icon: <SiVuedotjs className="text-green-500 text-2xl" />, bg: "bg-white" },
        { icon: <DiBootstrap className="text-purple-600 text-2xl" />, bg: "bg-white" },
        { icon: <SiLaravel className="text-red-600 text-2xl" />, bg: "bg-white" },
        { icon: <DiMysql className="text-blue-800 text-2xl" />, bg: "bg-white" },
      ],
      link: `${githubUrl1}`,
      linkText: "See Source Code"
    },
    {
      img: project4,
      title: "Leak Notify: IoT Alert System",
      period: "September - Desember 2024",
      description: "Leak Notify adalah project IoT yang dikembangkan oleh tim beranggotakan lima orang untuk mendeteksi kebocoran gas secara real-time dan memberikan notifikasi jarak jauh secara otomatis melalui SMS ke pengguna, memungkinkan tindakan cepat sebelum terjadi kebakaran. Dalam proyek ini, saya berkontribusi dalam pengembangan perangkat keras menggunakan NodeMCU ESP8266 dan sensor gas, dokumentasi project, dan pengujian alat.",
      tech: [
        { icon: <SiCplusplus className="text-blue-600 text-2xl" />, bg: "bg-white" },
      ],
      link: `${githubUrl4}`,
      linkText: "See Documentation"
    },
    {
      img: project2,
      title: "UI/UX Design: Stellar Quest",
      period: "March - May 2024",
      description: "Stellar Quest adalah aplikasi mobile yang membantu mahasiswa mencari tempat tinggal seperti kos, serta menyediakan layanan antar. Pengguna bisa mengumpulkan poin dari setiap kunjungan ke kos untuk ditukar dengan diskon atau keuntungan lainnya. Proyek ini dibuat dalam tim beranggotakan tiga orang untuk kompetisi, di mana peran saya mencakup desain UI/UX, pemilihan palet warna, pembuatan logo, serta merancang halaman sign-up, beranda, detail kamar, dan peta, sekaligus menghubungkan semua halaman agar aplikasi dapat digunakan.",
      tech: [
        { icon: <SiAdobeillustrator className="text-orange-600 text-2xl" />, bg: "bg-white" },
        { icon: <SiFigma className="text-purple-500 text-2xl" />, bg: "bg-white" },
      ],
      link: `${githubUrl2}`,
      linkText: "See Design Prototype"
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4 mt-24 mb-16">
      <div className="mb-8">
        <h1 className='text-4xl font-bold text-slate-100 mb-2'>Projects</h1>
        <p className='text-slate-300'>Showcase of my projects while study at Binus University</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px] w-full">
              {/* Bagian Gambar */}
              <div className="relative h-60">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bagian Deskripsi */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-700 mb-1">{project.title}</h2>
                <p className="text-sm text-slate-500 mb-4">{project.period}</p>
                
                {/* Teks dengan overflow scroll */}
                <div className="overflow-y-auto h-48 mb-4 pr-2">
                  <p className="text-slate-600">{project.description}</p>
                </div>

                {/* Bagian Teknologi dan Tombol Link */}
                <div className="flex justify-between items-center mt-auto">
                  {/* Teknologi */}
                  <div className="flex space-x-2">
                    {project.tech.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className={`w-10 h-10 rounded-full ${tech.bg} flex items-center justify-center`}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                  
                  {/* Tombol dengan Text saja */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition-colors duration-300"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Tombol GitHub di tengah layar */}
      <div className="flex justify-center mt-12">
        <Reveal>
          <div className="flex flex-col items-center">
            <a 
              href={githubProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-500 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center space-x-2"
            >
              <FaGithub className="text-white text-2xl" />
              <span className="text-slate-100">See More Projects</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;