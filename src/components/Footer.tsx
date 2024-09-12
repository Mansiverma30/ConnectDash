import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F4F4] text-[#162020] py-8" id="footer">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-start">
        <div className="mb-6 md:mb-0 text-[#162020]">
          <h2 className="text-xl font-bold mb-2">Mansi Verma</h2>
          <p className="mb-1">123 Your Street</p>
          <p className="mb-1">Your City, Your Country</p>
          <p className="mb-1">Phone: +91-8770527816</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with me:</h3>
          <div className="flex space-x-4 text-[#162020]">
            <a
              href="https://github.com/Mansiverma30"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/mansiv30"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/mansi-verma-213288278"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 text-left text-[#162020]">
        <p>© 2024 Mansi Verma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
