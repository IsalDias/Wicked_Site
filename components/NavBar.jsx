"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ZdataLogo from "../public/images/WICKEDLOGO.png";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contactus", label: "Contact Us" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const pathname = usePathname();
  const menuRef = useRef(null);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      const distance = Math.abs(y - lastY);

      if (distance > 6) {
        if (goingDown && y > 90) setShow(false);
        else setShow(true);
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-transform duration-300 ease-out",
        show ? "translate-y-0" : "-translate-y-[120%]",
      ].join(" ")}
    >
      <div className="pt-0">
        <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-20">

          {/* Dark Glass Container */}
          <div className="rounded-xl border border-white/15 bg-black/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]">

            <div className="flex items-center justify-between px-2 py-1">

              {/* LOGO */}
              <Link href="/" className="flex items-center" prefetch>
                <Image
                  src={ZdataLogo}
                  alt="Logo"
                  priority
                  className="h-auto w-12 sm:w-22.5"
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-6 text-sm font-medium">
                  {LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={[
                            "relative pb-0.5 transition-all duration-200",
                            active
                              ? "text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white"
                              : "text-white/80 hover:text-white",
                          ].join(" ")}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden text-white text-lg"
                onClick={() => setOpen(!open)}
              >
                {open ? "✕" : "☰"}
              </button>

            </div>

            {/* MOBILE DROPDOWN */}
            <div className="lg:hidden">
              <div
                ref={menuRef}
                className={[
                  "transition-all duration-200 ease-out overflow-hidden",
                  open
                    ? "opacity-100 max-h-40 py-1"
                    : "opacity-0 max-h-0 py-0 pointer-events-none",
                ].join(" ")}
              >
                <ul className="flex flex-col gap-1 px-4 pb-2 text-white">
                  {LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={[
                            "block py-1.5",
                            active
                              ? "font-semibold text-white"
                              : "text-white/80 hover:text-white",
                          ].join(" ")}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}