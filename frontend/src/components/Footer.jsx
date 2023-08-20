import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="md:block bg-primary border-t-8 text-secondary border-solid border-secondary shadow-md p-6">
      <div className="container mx-auto text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold audinary cursor-pointer" onClick={scrollToTop}><Link to="/">audinary</Link></h2>
        <p className="mb-4">Dive into captivating worlds through PDFs of your favorite books. Explore links to their cinematic adaptations for an immersive experience. Plus, shop paperbacks to own a piece of literary history.</p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/ojasva-tomar-baba1826a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin className="text-2xl inline-block mr-3" />
          </a>
          <a
            href="https://github.com/ojasvatomar47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-black transition duration-300"
          >
            <FaGithub className="text-2xl inline-block" />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} audinary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
