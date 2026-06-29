import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'
import logoWhite from '../assets/logo/logo-naura-white.svg'

const footerLinks = {
    layanan: [
        { label: 'Konstruksi Bangunan', path: '/layanan' },
        { label: 'Renovasi Bangunan', path: '/layanan' },
        { label: 'Desain Interior', path: '/layanan' },
        { label: 'Furniture Custom', path: '/layanan' },
    ],
    perusahaan: [
        { label: 'Tentang Kami', path: '/tentang' },
        { label: 'Portofolio Proyek', path: '/portofolio' },
        { label: 'Proses Kerja', path: '/proses-kerja' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Kontak', path: '/kontak' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-dark text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center mb-6">
                            <img
                                src={logoWhite}
                                alt="Naura Interior Design"
                                className="h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Mewujudkan ruang impian Anda melalui desain interior yang estetis, furniture custom berkualitas, dan pengerjaan yang rapi dan tepat waktu.
                        </p>
                        {/* Social Media */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                                aria-label="YouTube"
                            >
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
                            Layanan Kami
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.layanan.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="text-white/60 hover:text-primary text-sm flex items-center gap-2 transition-colors duration-300 group"
                                    >
                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
                            Perusahaan
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="text-white/60 hover:text-primary text-sm flex items-center gap-2 transition-colors duration-300 group"
                                    >
                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+6281234567890"
                                    className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors duration-300 text-sm group"
                                >
                                    <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-primary" />
                                    <span>+62 812-3456-7890</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@naurainterior.com"
                                    className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors duration-300 text-sm group"
                                >
                                    <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-primary" />
                                    <span>info@naurainterior.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/60 text-sm">
                                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                    <span>Jl. Kemang Raya No. 88<br />Jakarta Selatan, 12730</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-primary/10 border border-primary/20">
                            <p className="text-white/70 text-xs mb-2">Jam Operasional:</p>
                            <p className="text-white text-sm font-medium">Senin – Sabtu: 08.00 – 17.00</p>
                            <p className="text-white/50 text-xs mt-1">*Minggu & Libur Nasional: Tutup</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Naura Interior Design. Seluruh hak cipta dilindungi.
                    </p>
                    <p className="text-white/40 text-sm">
                        Dibangun dengan <span className="text-primary">♥</span> untuk ruang impian Anda
                    </p>
                </div>
            </div>
        </footer>
    )
}
