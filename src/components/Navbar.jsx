import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import logoWhite from '../assets/logo/logo-naura-white.svg'
import logoFull from '../assets/logo/logo-naura.svg'

const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang', label: 'Tentang Kami' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/portofolio', label: 'Portofolio' },
    { path: '/proses-kerja', label: 'Proses Kerja' },
    { path: '/faq', label: 'FAQ' },
    { path: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname.startsWith(path)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-dark shadow-2xl shadow-dark/20 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src={logoWhite}
                            alt="Naura Interior Design"
                            className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${isActive(link.path)
                                    ? 'text-primary'
                                    : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:+6281234567890"
                            className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors duration-300"
                        >
                            <Phone size={14} />
                            <span>+62 812-3456-7890</span>
                        </a>
                        <Link
                            to="/kontak"
                            className="btn-primary text-sm px-6 py-3"
                        >
                            Konsultasi Gratis
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 hover:text-primary transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-dark border-t border-white/10 mt-3">
                    <nav className="container-custom py-6 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-3 text-sm font-medium rounded-sm transition-all duration-300 ${isActive(link.path)
                                    ? 'text-primary bg-primary/10 pl-6'
                                    : 'text-white/80 hover:text-white hover:bg-white/5 hover:pl-6'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="border-t border-white/10 pt-4 mt-2">
                            <Link
                                to="/kontak"
                                className="btn-primary w-full text-center text-sm py-3"
                            >
                                Konsultasi Gratis
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
