import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Calendar, ArrowRight, Eye } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { portfolioData, portfolioCategories } from '../data/portfolioData'

function PortfolioCard({ item }) {
    const [hovered, setHovered] = useState(false)
    return (
        <Link
            to={`/portofolio/${item.slug}`}
            className="group block overflow-hidden bg-dark relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-70'}`} />

                {/* Category */}
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-xs text-white font-semibold uppercase tracking-wider">
                    {item.categoryLabel}
                </div>

                {/* View icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <Eye size={16} className="text-dark" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className={`font-display font-bold text-white text-xl mb-2 transition-transform duration-300 ${hovered ? '-translate-y-1' : ''}`}>
                        {item.title}
                    </h3>
                    <div className={`flex items-center gap-4 text-white/60 text-sm transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        <span className="flex items-center gap-1"><MapPin size={12} />{item.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} />{item.year}</span>
                    </div>
                    <div className={`mt-2 flex items-center gap-2 text-primary text-sm font-semibold transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                        Lihat Detail <ArrowRight size={14} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filtered = activeCategory === 'all'
        ? portfolioData
        : portfolioData.filter(p => p.category === activeCategory)

    return (
        <>
            <PageHero
                title="Portofolio Proyek Kami"
                subtitle="Karya Nyata"
                description="Lebih dari 350 proyek telah kami selesaikan. Setiap proyek adalah cerita kepercayaan dan kolaborasi."
                image="/images/NI9.jpeg"
                breadcrumbs={[{ label: 'Portofolio' }]}
            />

            <section className="py-24 bg-light">
                <div className="container-custom">
                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {portfolioCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white text-dark/60 hover:bg-dark hover:text-white border border-light-dark'
                                    }`}
                            >
                                {cat.label}
                                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-light text-dark/40'
                                    }`}>
                                    {cat.id === 'all' ? portfolioData.length : portfolioData.filter(p => p.category === cat.id).length}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filtered.map((item, index) => (
                            <div
                                key={item.id}
                                className={`${index === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <PortfolioCard item={item} />
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-dark/40">
                            <p className="text-lg">Belum ada proyek dalam kategori ini.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </>
    )
}
