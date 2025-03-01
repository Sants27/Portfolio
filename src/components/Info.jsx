import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const Info = () => {

  const github = "https://github.com/Sants27";
  const linkedin = "https://www.linkedin.com/in/ignatius-varrel-santoso/";
  const instagram = "https://www.instagram.com/varrel27_/";
  const iconStyle = "w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4";
  const iconSosmedStyle = "w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300";
  const formStyle = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500";

  const [isSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  // Check for success parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("success")) {
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      const timer = setTimeout(() => {
        setIsSuccess(false);
        // Remove success parameter from URL without refreshing page
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch("https://formspree.io/f/xpwqgedb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        setIsSuccess(true); // Ini akan bekerja karena kita menangani response secara manual
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  // Show success message if form was submitted successfully
  if (isSuccess) {
    return (
      <div className="px-4 sm:px-6 max-w-[1000px] mx-auto flex items-center justify-center min-h-screen py-16">
        <Reveal>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8 text-center">
            <h2 className="text-2xl font-semibold text-teal-500 mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => {
                setIsSuccess(false);
                window.history.replaceState({}, document.title, window.location.pathname);
              }}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300 ease-in-out"
            >
              Send Another Message
            </button>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 max-w-[1000px] mx-auto flex items-center justify-center min-h-screen py-16">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Bagian kiri (form) */}
          <div className="bg-white rounded-l-lg shadow-xl overflow-hidden p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[#60a5fa] mb-6 border-b-2 border-[#60a5fa] pb-2 inline-block">
              Contact Us
            </h2>


            {/* Form Formspree dengan method tradisional */}
            <form 
              id="contactForm"
              action="https://formspree.io/f/xpwqgedb"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Hidden field for success redirect */}
              <input 
                type="hidden" 
                name="_next" 
                value={`${window.location.href.split('?')[0]}?success=true`}
              />

              {/* Bagian nama depan dan belakang */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className={formStyle}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={formStyle}
                  />
                </div>
              </div>

              {/* Bagian telepon dan email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className={formStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={formStyle}
                  />
                </div>
              </div>

              {/* Bagian pesan */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={formStyle}
                ></textarea>
              </div>

              {/* Input tersembunyi untuk anti-spam dari Formspree */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
              />

              {/* Tombol submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
          
          {/* Bagian kanan (info) */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-r-lg p-8 text-white flex flex-col">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Request a Call Back</h2>
              <p className="text-blue-100 text-sm">
                Hubungi saya untuk diskusi, kerja sama, atau pertanyaan lebih lanjut seputar proyek dan teknologi!
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className={iconStyle}>
                  <FiPhone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">+62-852-2003-6737</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className={iconStyle}>
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">ignatius.varrel@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className={iconStyle}>
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Bandung, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex justify-center space-x-4">
              <a href={github} className={iconSosmedStyle} target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub className="h-5 w-5" />
              </a>
              <a href={linkedin} className={iconSosmedStyle} target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="h-5 w-5" />
              </a>
              <a href={instagram} className={iconSosmedStyle} target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Info;