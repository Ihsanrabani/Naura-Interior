import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

const WA_NUMBER = '6281234567890'
const WA_MESSAGE = encodeURIComponent('Halo Naura Interior Design, saya ingin berkonsultasi mengenai proyek saya.')

export default function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden bg-dark">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/NI10.jpeg"
                    alt="CTA Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/80" />
            </div>

            {/* Accent shape */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 clip-diagonal hidden lg:block" />

            <div className="relative container-custom">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                            Konsultasi Gratis
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                        Siap Mewujudkan{' '}
                        <span className="text-gradient">Ruang Impian</span>{' '}
                        Anda?
                    </h2>

                    <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
                        Konsultasikan kebutuhan interior Anda dengan tim ahli Naura secara gratis. Kami siap membantu dari konsep hingga pemasangan—tanpa biaya tersembunyi.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary group"
                        >
                            <MessageCircle size={18} />
                            Chat via WhatsApp
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>

                        <a
                            href="tel:+6281234567890"
                            className="btn-secondary group"
                        >
                            <Phone size={18} />
                            Hubungi Kami
                        </a>

                        <Link
                            to="/kontak"
                            className="btn-outline group"
                        >
                            Kirim Pesan
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
                        {[
                            '✓ Respons dalam 1 jam',
                            '✓ Survei lokasi gratis',
                            '✓ RAB transparan',
                            '✓ Tanpa biaya tersembunyi',
                        ].map((item) => (
                            <span key={item} className="text-white/50 text-sm">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
