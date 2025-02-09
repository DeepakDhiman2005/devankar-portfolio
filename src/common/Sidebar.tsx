"use client";

import { setAction } from "@/redux/features/action";
import { useDispatch, useSelector } from "react-redux";

import "../styles/navbar.scss";
import "../styles/sidebar.scss";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch();
    const sidebar = useSelector<any>((state) => state.action.sidebar);
    const handleClose = () => {
        dispatch(setAction({ sidebar: false }));
    }
    const pathname = usePathname();

    useEffect(() => {
        if (sidebarRef.current) {
            if (sidebar) {
                sidebarRef.current.style.width = "100%";
            } else {
                sidebarRef.current.style.width = "0%";
            }
        }
    }, [sidebar]);

    useEffect(() => {
        if(sidebarRef.current){
            sidebarRef.current.style.width = "0%";
            handleClose();
        }
    }, [pathname]);

    return <>
        <aside ref={sidebarRef} className="my-sidebar">
            <div className="sidebar-top">
                <h2 className="logo">Portfolio</h2>

                <button className="sidebar-cross" onClick={handleClose}>
                    <RxCross2 size={22} />
                </button>
            </div>
            <div className="sidebar-main">
                <Link href={"/"}>
                    <li className={pathname === '/' ? "active" : ''}>Home</li>
                </Link>
                <Link href="/about">
                    <li className={pathname.startsWith('/about') ? "active" : ''}>About</li>
                </Link>
                <Link href="/skills">
                    <li className={pathname.startsWith('/skills') ? "active" : ''}>Skills</li>
                </Link>
                <Link href="/projects">
                    <li className={pathname.startsWith('/projects') ? "active" : ''}>Projects</li>
                </Link>
                <Link href="/gallery">
                    <li className={pathname.startsWith('/gallary') ? "active" : ''}>Gallery</li>
                </Link>
                <Link href="/contact">
                    <li className={pathname.startsWith('/contact') ? "active" : ''}>Contact</li>
                </Link>
            </div>
        </aside>
    </>
};

export default Sidebar;
