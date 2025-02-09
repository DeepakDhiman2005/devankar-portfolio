"use client";

import { setAction } from "@/redux/features/action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";  // ✅ Add RootState type

import "../styles/navbar.scss";
import "../styles/sidebar.scss";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();
    
    const sidebar = useSelector((state: RootState) => state.action.sidebar); // ✅ Typed selector
    const pathname = usePathname();

    const handleClose = useCallback(() => {
        dispatch(setAction({ sidebar: false })); // ✅ useCallback for stable reference
    }, [dispatch]);

    useEffect(() => {
        if (sidebarRef.current) {
            sidebarRef.current.style.width = sidebar ? "100%" : "0%";
        }
    }, [sidebar]);

    useEffect(() => {
        if (sidebarRef.current) {
            sidebarRef.current.style.width = "0%";
            handleClose();
        }
    }, [pathname, handleClose]); // ✅ Dependency added

    return (
        <aside ref={sidebarRef} className="my-sidebar">
            <div className="sidebar-top">
                <h2 className="logo">Portfolio</h2>
                <button className="sidebar-cross" onClick={handleClose}>
                    <RxCross2 size={22} />
                </button>
            </div>
            <div className="sidebar-main">
                {["/", "/about", "/skills", "/projects", "/gallery", "/contact"].map((path) => (
                    <Link key={path} href={path}>
                        <li className={pathname.startsWith(path) ? "active" : ""}>
                            {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                        </li>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
