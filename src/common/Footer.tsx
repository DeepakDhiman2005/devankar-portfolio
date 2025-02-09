"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../styles/footer.scss";
import "../styles/navbar.scss";
import Link from "next/link";

const Footer = () => {
    return <>
        <footer className="footer">
            <div className="left">
                <p>
                    Copyright ©2025 All rights reserved | This template is made with by <Link href={"/about"} className="name"> Devankar</Link>
                </p>
            </div>

            <div className="right">
                <div className="navbar">
                    <h2 className="logo">Portfolio</h2>
                </div>

                <div className="links">
                    <a href={"https://www.instagram.com/deepakdhiman4367/"} target="_blank" className="icon">
                        <FaInstagram size={22} />
                    </a>

                    <a href={"https://github.com/DeepakDhiman2005"} target="_blank" className="icon">
                        <FaGithub size={22} />
                    </a>

                    <a href={"https://www.youtube.com/@ProgrammerD7"} target="_blank" className="icon">
                        <FaYoutube size={22} />
                    </a>

                    <a href={"https://www.linkedin.com/in/devankar-dhiman-1a1959336/"} target="_blank" className="icon">
                        <FaLinkedin size={22} />
                    </a>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;