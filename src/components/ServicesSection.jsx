import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { services } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <SectionHeader
                    subtitle="Layanan Kami"
                    title="Solusi Lengkap untuk Setiap Kebutuhan Ruang"
                    description="Dari konstruksi hingga sentuhan akhir interior, kami hadir sebagai mitra terpercaya dalam setiap tahap mewujudkan ruang impian Anda."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-light hover:bg-dark transition-all duration-500 p-8 overflow-hidden cursor-pointer"
                        >
                            {/* Number */}
                            <div className="absolute top-4 right-4 text-6xl font-display font-bold text-dark/5 group-hover:text-white/5 transition-colors duration-500 leading-none">
                                0{index + 1}
                            </div>

                            {/* Icon */}
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-display font-bold text-xl text-dark group-hover:text-white mb-3 transition-colors duration-500">
                                {service.title}
                            </h3>

                            {/* Accent line */}
                            <div className="w-8 h-0.5 bg-primary mb-4 group-hover:w-16 transition-all duration-500" />

                            {/* Description */}
                            <p className="text-dark/60 group-hover:text-white/60 text-sm leading-relaxed mb-6 transition-colors duration-500">
                                {service.shortDesc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.slice(0, 3).map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 text-xs text-dark/50 group-hover:text-white/50 transition-colors duration-500"
                                    >
                                        <CheckCircle size={12} className="text-primary mt-0.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Starting Price */}
                            <div className="mb-6">
                                <p className="text-xs text-dark/40 group-hover:text-white/40 transition-colors duration-500">Mulai dari</p>
                                <p className="text-primary font-bold text-sm">{service.startingPrice}</p>
                            </div>

                            {/* Link */}
                            <Link
                                to="/layanan"
                                className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                            >
                                Pelajari Lebih Lanjut
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
