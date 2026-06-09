"use client";

import React from "react";
import Image from "next/image";
import latest3 from "../public/images/WICKEDLOGO.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-16">

                {/* Top Row */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

                    {/* Logo - BIGGER */}
                    <div className="md:col-span-3 flex items-start">
                        <div className="md:col-span-3 flex items-start">
                            <Image
                                src="/images/WICKEDLOGO.png"
                                alt="Wicked Revelations Logo"
                                width={220}
                                height={120}
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white">
                            Australia
                        </h4>

                        <div className="mt-5 space-y-2 text-sm text-gray-400">
                            <p className="font-semibold text-white">
                                admin@wickedrevelations.com.au
                            </p>
                            <p>(+61) 450 796 673</p>
                            <p>17 Ducane street Wyndham Vale Vic 3024</p>
                        </div>
                    </div>

                    {/* Ready + Navigate */}
                    <div className="md:col-span-5">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white">
                            Ready to get WICKED?
                        </h4>

                        <div className="mt-4 text-sm">
                            <a
                                href="/contact"
                                className="underline underline-offset-4 hover:text-gray-300 transition"
                            >
                                Drop Us a Message
                            </a>
                        </div>

                        <h4 className="mt-10 text-sm font-bold tracking-widest uppercase text-white">
                            Navigate
                        </h4>

                        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-gray-400">
                            <a className="hover:text-white transition" href="/">Home</a>
                            <a className="hover:text-white transition" href="/about">About Us</a>
                            <a className="hover:text-white transition" href="/services">Services</a>
                            <a className="hover:text-white transition" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>

                {/* Middle Row */}
                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 border-t border-white/10 pt-12">

                    {/* Subscribe */}
                    <div className="md:col-span-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white">
                            Stay in Touch
                        </h4>

                        <p className="mt-4 text-sm text-gray-400">
                            Join our <span className="font-semibold text-white">1000+</span> community
                            & stay ahead of all events that got WICKED!
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full sm:flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-white"
                            />

                            {/* RED BUTTON */}
                            <button className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300">
                                SUBSCRIBE TO WICKED
                            </button>
                        </div>

                        <p className="mt-3 text-xs text-gray-500">
                            Event notifications: event details & booking links.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="md:col-span-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white">
                            Follow Us
                        </h4>

                        <div className="mt-6 flex items-center gap-8">

                            <a
                                href="https://www.facebook.com/WRAustralia/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <FacebookIcon fontSize="medium" />
                            </a>

                            <a
                                href="https://www.instagram.com/wickedrevelationsaustralia/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <InstagramIcon fontSize="medium" />
                            </a>

                            <a
                                href="https://au.linkedin.com/company/wicked-australia"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <LinkedInIcon fontSize="medium" />
                            </a>

                            <a
                                href="https://www.youtube.com/@wickedrevelations919"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition"
                            >
                                <YouTubeIcon fontSize="medium" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
                    © {year} WICKED Revelations | All Rights Reserved
                </div>

            </div>
        </footer>
    );
};

export default Footer;