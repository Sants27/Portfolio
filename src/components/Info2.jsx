import Reveal from "./Reveal"
import { useState } from "react"

// Ini komponen form contact
const Info = () => {
    // State untuk menyimpan data form
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });
    
    // State untuk loading
    const [isSubmitting, setIsSubmitting] = useState(false);
    // State untuk pesan sukses atau error
    const [submitMessage, setSubmitMessage] = useState("");

    // Function untuk handle perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update state dengan cara yang benar
        setFormData(prevData => ({
        ...prevData,
        [name]: value
        }));
        // Cek nilai yang diinput
        console.log(`Input ${name} berubah menjadi: ${value}`);
    };

    // Function untuk handle submit form
    const handleSubmit = (e) => {
        // Mencegah halaman refresh
        e.preventDefault();
        console.log("Form disubmit!");
        console.log("Data yang dikirim:", formData);
        
        // Set loading menjadi true
        setIsSubmitting(true);
        
        // Buat objek FormData dari form yang disubmit
        const formElement = e.target;
        const formDataObj = new FormData(formElement);
        
        // Kirim form menggunakan fetch API
        fetch("https://getform.io/f/amdkkwvb", {
        method: "POST",
        body: formDataObj,
        })
        .then(response => {
            console.log("Status response:", response.status);
            if (response.ok) {
            // Jika berhasil, update state dengan pesan sukses
            setSubmitMessage("Pesan Anda telah berhasil dikirim!");
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: ""
            });
            console.log("Form berhasil dikirim!");
            } else {
            // Jika gagal, lempar error
            throw new Error("Gagal mengirim form! Status: " + response.status);
            }
        })
        .catch(error => {
            // Catch error apapun yang terjadi
            console.error("ERROR PENGIRIMAN:", error);
            setSubmitMessage("Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
        })
        .finally(() => {
            // Apapun yang terjadi, set loading menjadi false
            setIsSubmitting(false);
            console.log("Proses pengiriman form selesai");
        });
    };

    return (
        // Ini container utama
        <div className="px-4 sm:px-6 max-w-[1000px] mx-auto flex items-center justify-center min-h-screen py-16 sm:py-20 md:py-24">
            <Reveal>
                {/* Grid untuk layout 2 kolom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Bagian kiri (form) */}
                    <div className="bg-white rounded-l-lg shadow-xl overflow-hidden p-6 md:p-8">
                        <h2 className="text-2xl font-semibold text-teal-500 mb-6 border-b-2 border-teal-300 pb-2 inline-block">
                            Contact Us
                        </h2>

                        {/* Form dengan action ke getform.io */}
                        <form 
                            onSubmit={handleSubmit}
                            action="https://getform.io/f/amdkkwvb"
                            method="POST"
                        >
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
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                >
                                </textarea>
                            </div>

                            {/* Input tersembunyi untuk anti-spam dari getform */}
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
                                {/* Teks tombol berubah saat loading */}
                                {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                            </button>

                            {/* Pesan status pengiriman */}
                            {submitMessage && (
                                <div className={`mt-4 p-3 rounded-md ${submitMessage.includes('Maaf') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                    
                    {/* Bagian kanan (info) */}
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-r-lg p-8 text-white flex flex-col">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Request a Call Back</h2>
                            <p className="text-blue-100 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">+1-760-284-3410</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">hello@domainmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">931 Abla Martin Drive, PA Pennsylvania-18104</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex justify-center space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

export default Info