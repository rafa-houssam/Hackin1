import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
<nav className="flex flex-wrap items-center bg-white py-4 px-6 lg:px-10 gap-4 w-full h-auto rounded-full border-t border-gray-300 backdrop-blur-[15px] fixed z-50">
{/* Left Section (Hidden on mobile) */}
            <ul className="lg:flex items-center space-x-8 hidden">
                <li className="font-bold text-white bg-blue-500 px-10 py-5 rounded-full hover:opacity-90">
                    <Link href="#">Home</Link>
                </li>
                <li className="font-bold text-gray-800 hover:text-blue-500">
                    <Link href="#">About</Link>
                </li>
                <li className="font-bold text-gray-800 hover:text-blue-500">
                    <Link href="#">Service</Link>
                </li>
            </ul>

            {/* Center Section (Logo) */}
            <div className="flex items-center gap-2 flex-1 justify-center">
                <img src="./images/looogo.svg" alt="Logo" className="h-[87px]" />
            </div>

            {/* Right Section (Hidden on mobile) */}
            <ul className="lg:flex items-center space-x-8 hidden">
                <li className="font-bold text-gray-800 hover:text-blue-500">
                    <Link href="#">Resume</Link>
                </li>
                <li className="font-bold text-gray-800 hover:text-blue-500">
                    <Link href="#">Project</Link>
                </li>
                <li className="font-bold text-gray-800 hover:text-blue-500">
                    <Link href="#">Contact</Link>
                </li>
            </ul>

            {/* Hamburger Menu Icon for Mobile */}
            <button
                className="lg:hidden flex items-center justify-center p-2 text-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            {/* Mobile Menu (Shown when isMenuOpen is true) */}
            {isMenuOpen && (
                <ul className="lg:hidden w-[300px] h-[3070px] absolute right-0 top-24 bg-white py-4 px-6 space-y-4 z-5090">
                    <li className="font-bold text-gray-800 hover:text-blue-500">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="font-bold text-gray-800 hover:text-blue-500">
                        <Link href="#">About</Link>
                    </li>
                    <li className="font-bold text-gray-800 hover:text-blue-500">
                        <Link href="#">Service</Link>
                    </li>
                    <li className="font-bold text-gray-800 hover:text-blue-500">
                        <Link href="#">Resume</Link>
                    </li>
                    <li className="font-bold text-gray-800 hover:text-blue-500">
                        <Link href="#">Project</Link>
                    </li>
                    <li className="font-bold text-gray-800 hover:text-blue-500">
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
