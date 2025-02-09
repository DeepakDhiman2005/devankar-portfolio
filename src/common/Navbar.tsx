"use client";
import Link from "next/link";
import "../styles/navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
// redux
import { useDispatch } from 'react-redux';
import { setAction } from "@/redux/features/action";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    // redux
    const dispatch = useDispatch();
    const pathname = usePathname();

    return <>
        <nav className="navbar">
            <h2 className="logo">Portfolio</h2>

            <ul className="links">
                <Link href={"/"}>
                    <li className={pathname === '/' ? "active": ''}>Home</li>
                </Link>
                <Link href="/about">
                    <li className={pathname.startsWith('/about') ? "active": ''}>About</li>
                </Link>
                <Link href="/skills">
                    <li className={pathname.startsWith('/skills') ? "active": ''}>Skills</li>
                </Link>
                <Link href="/projects">
                    <li className={pathname.startsWith('/projects') ? "active": ''}>Projects</li>
                </Link>
                <Link href="/gallery">
                    <li className={pathname.startsWith('/gallary') ? "active": ''}>Gallery</li>
                </Link>
                <Link href="/contact">
                    <li className={pathname.startsWith('/contact') ? "active": ''}>Contact</li>
                </Link>
            </ul>

            <div className="burger" onClick={() => {
                dispatch(setAction({
                    sidebar: true
                }));
            }}>
                <RxHamburgerMenu size={24} />
            </div>
        </nav>
    </>
}

export default Navbar;