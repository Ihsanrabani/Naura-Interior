import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Eye } from 'lucide-react'
import { portfolioData, portfolioCategories } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function PortfolioCard({ item, size = 'normal' }) {
    const [hovered, setHovered] = useState(false)

    return (
        <Link
            to={`/portofolio/${item.slug}`}
            className={`group relative block overflow-hidden bg-dark ${size === 'large' ? 'row-span-2' : ''
                }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'
                        }`}
                />
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-70'
                        }`}
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-xs text-white font-semibold uppercase tracking-wider">
                    {item.categoryLabel}
                </div>

                {/* Hover icon */}
                <div
                    className={`absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                >
                    <Eye size={16} className="text-dark" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                        className={`font-display font-bold text-white text-xl mb-2 transition-transform duration-300 ${hovered ? '-translate-y-1' : 'translate-y-0'
                            }`}
                    >
                        {item.title}
                    </h3>
                    <div
                        className={`flex items-center gap-4 text-white/60 text-sm transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                            }`}
                    >
                        <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {item.year}
                        </span>
                    </div>
                    <div
                        className={`mt-3 flex items-center gap-2 text-primary text-sm font-semibold transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                            }`}
                    >
                        Lihat Detail
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function PortfolioSection({ limit = 6, showFilter = false, showHeader = true }) {
    const [activeCategory, setActiveCategory] = useState('all')

    const filtered = activeCategory === 'all'
        ? portfolioData.slice(0, limit)
        : portfolioData.filter(p => p.category === activeCategory).slice(0, limit)

    return (
        <section className="py-24 bg-light">
            <div className="container-custom">
                {showHeader && (
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <SectionHeader
                            subtitle="Portofolio Kami"
                            title="Proyek Terbaik yang Telah Kami Wujudkan"
                            description="Setiap proyek adalah cerminan dedikasi dan keahlian tim kami. Temukan inspirasi untuk ruang impian Anda."
                        />
                        <Link
                            to="/portofolio"
                            className="btn-outline flex-shrink-0 self-start md:self-auto"
                        >
                            Lihat Semua
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                )}

                {/* Category Filter */}
                {showFilter && (
                    <div className="flex flex-wrap gap-2 mb-10">
                        {portfolioCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-dark/60 hover:bg-dark hover:text-white border border-light-dark'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                                }`}
                        >
                            <PortfolioCard item={item} size={index === 0 ? 'large' : 'normal'} />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {showHeader && (
                    <div className="mt-12 text-center">
                        <Link to="/portofolio" className="btn-primary">
                            Jelajahi Semua Proyek
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
