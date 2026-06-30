import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MapPin, Calendar, Clock, DollarSign, Square, ArrowLeft, ArrowRight, User, MessageCircle, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import CTASection from '../components/CTASection'
import PortfolioSection from '../components/PortfolioSection'

const WA_NUMBER = '6281234567890'

function BeforeAfterSlider({ before, after }) {
    const [position, setPosition] = useState(50)

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left
        setPosition(Math.min(100, Math.max(0, (x / rect.width) * 100)))
    }

    return (
        <div
            className="relative overflow-hidden cursor-col-resize select-none aspect-[16/9]"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* After (base) */}
            <img src={after} alt="Sesudah" className="absolute inset-0 w-full h-full object-cover" />

            {/* Before (clipped) */}
            <img
                src={before}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            />

            {/* Slider line */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl"
                    style={{ left: `${position}%` }}
                >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="flex items-center gap-0.5">
                            <ChevronLeft size={10} className="text-dark" />
                            <ChevronRight size={10} className="text-dark" />
                        </div>
                    </div>
                </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-dark/80 text-white text-xs px-2 py-1">Sebelum</div>
            <div className="absolute bottom-4 right-4 bg-primary text-white text-xs px-2 py-1">Sesudah</div>
        </div>
    )
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
    return (
        <div className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center" onClick={onClose}>
            <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
                <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors">
                <ChevronLeft size={36} />
            </button>
            <img
                src={images[index]}
                alt={`Project image ${index + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors">
                <ChevronRight size={36} />
            </button>
            <div className="absolute bottom-6 text-white/50 text-sm">{index + 1} / {images.length}</div>
        </div>
    )
}

export default function ProjectDetail() {
    const { slug } = useParams()
    const [lightboxIndex, setLightboxIndex] = useState(null)

    const project = portfolioData.find(p => p.slug === slug)
    if (!project) return <Navigate to="/portofolio" replace />

    const currentIndex = portfolioData.findIndex(p => p.slug === slug)
    const prevProject = portfolioData[currentIndex - 1]
    const nextProject = portfolioData[currentIndex + 1]

    const stats = [
        { icon: <MapPin size={16} />, label: 'Lokasi', value: project.location },
        { icon: <Calendar size={16} />, label: 'Tahun', value: project.year },
        { icon: <Clock size={16} />, label: 'Durasi', value: project.duration },
        { icon: <User size={16} />, label: 'Klien', value: project.client },
    ]

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-end bg-dark overflow-hidden">
                <div className="absolute inset-0">
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>
                <div className="relative container-custom pb-16 pt-32">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 mb-6 text-sm text-white/50">
                        <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
                        <ArrowRight size={12} />
                        <Link to="/portofolio" className="hover:text-primary transition-colors">Portofolio</Link>
                        <ArrowRight size={12} />
                        <span className="text-primary">{project.title}</span>
                    </nav>
                    <div className="inline-block bg-primary px-3 py-1 text-xs text-white font-semibold uppercase tracking-wider mb-4">
                        {project.categoryLabel}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-4">
                        {project.title}
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl">{project.description}</p>
                </div>
            </section>

            {/* Project Info */}
            <section className="bg-white border-b border-light-dark">
                <div className="container-custom py-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-start gap-2">
                                <div className="text-primary mt-0.5">{stat.icon}</div>
                                <div>
                                    <div className="text-dark/40 text-xs uppercase tracking-wider">{stat.label}</div>
                                    <div className="text-dark font-semibold text-sm mt-0.5">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Gallery */}
                            <h2 className="text-2xl font-display font-bold text-dark mb-6">Galeri Proyek</h2>
                            <div className="grid grid-cols-2 gap-3 mb-12">
                                {project.images.map((img, i) => (
                                    <div
                                        key={i}
                                        className={`overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2' : ''}`}
                                        onClick={() => setLightboxIndex(i)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} ${i + 1}`}
                                            className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${i === 0 ? 'h-80' : 'h-48'}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Before & After */}
                            <h2 className="text-2xl font-display font-bold text-dark mb-6">Perbandingan Sebelum & Sesudah</h2>
                            <div className="mb-12">
                                <BeforeAfterSlider before={project.beforeImage} after={project.afterImage} />
                                <p className="text-dark/40 text-sm text-center mt-2">Geser untuk melihat perbandingan</p>
                            </div>

                            {/* Long Description */}
                            <h2 className="text-2xl font-display font-bold text-dark mb-4">Detail Proyek</h2>
                            <div className="w-8 h-0.5 bg-primary mb-6" />
                            <p className="text-dark/60 leading-relaxed text-base">{project.longDescription}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-light text-dark/60 text-xs px-3 py-1 border border-light-dark">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* CTA */}
                            <div className="bg-dark p-8 mb-6 sticky top-24">
                                <h3 className="font-display font-bold text-white text-xl mb-2">Tertarik dengan Proyek Serupa?</h3>
                                <div className="w-8 h-0.5 bg-primary mb-4" />
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    Diskusikan proyek Anda dengan tim kami secara gratis. Kami siap membantu mewujudkan ruang impian Anda.
                                </p>
                                <a
                                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Naura Interior Design, saya melihat proyek "${project.title}" di website dan tertarik untuk berdiskusi.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-primary text-white font-semibold py-4 flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors duration-300 mb-3"
                                >
                                    <MessageCircle size={18} />
                                    Chat via WhatsApp
                                </a>
                                <Link
                                    to="/kontak"
                                    className="w-full border border-white/30 text-white font-semibold py-4 flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors duration-300 text-sm"
                                >
                                    Kirim Pesan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prev / Next Navigation */}
            <section className="bg-light py-8 border-t border-light-dark">
                <div className="container-custom">
                    <div className="flex items-center justify-between gap-4">
                        {prevProject ? (
                            <Link
                                to={`/portofolio/${prevProject.slug}`}
                                className="flex items-center gap-3 group hover:text-primary transition-colors duration-300"
                            >
                                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                                <div>
                                    <div className="text-xs text-dark/40 uppercase tracking-wider">Proyek Sebelumnya</div>
                                    <div className="font-display font-semibold text-dark group-hover:text-primary transition-colors">{prevProject.title}</div>
                                </div>
                            </Link>
                        ) : <div />}

                        <Link
                            to="/portofolio"
                            className="text-dark/40 hover:text-primary text-sm transition-colors duration-300"
                        >
                            Semua Proyek
                        </Link>

                        {nextProject ? (
                            <Link
                                to={`/portofolio/${nextProject.slug}`}
                                className="flex items-center gap-3 group hover:text-primary transition-colors duration-300 text-right"
                            >
                                <div>
                                    <div className="text-xs text-dark/40 uppercase tracking-wider">Proyek Berikutnya</div>
                                    <div className="font-display font-semibold text-dark group-hover:text-primary transition-colors">{nextProject.title}</div>
                                </div>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>

            <CTASection />

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <Lightbox
                    images={project.images}
                    index={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                    onPrev={() => setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length)}
                    onNext={() => setLightboxIndex((lightboxIndex + 1) % project.images.length)}
                />
            )}
        </>
    )
}
