import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

const slides = [
    {
        image: '/images/NI9.jpeg',
        tag: 'Kitchen Set Custom',
        title: 'Dapur Impian\ndari Tangan Kami',
        subtitle: 'Kami merancang kitchen set yang fungsional, estetis, dan tahan lama—disesuaikan persis dengan kebutuhan dapur Anda.',
    },
    {
        image: '/images/NI10.jpeg',
        tag: 'Desain Interior',
        title: 'Ruang yang Bercerita\ntentang Anda',
        subtitle: 'Setiap detail dirancang dengan presisi untuk menciptakan harmoni sempurna antara estetika dan fungsi.',
    },
    {
        image: '/images/NI6.jpeg',
        tag: 'Furniture Custom',
        title: 'Furnitur Unik\nSesuai Selera Anda',
        subtitle: 'Dari TV cabinet hingga wardrobe—kami buat sesuai ukuran, desain, dan karakter ruang Anda.',
    },
]

export default function HeroSection() {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true)
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length)
                setAnimating(false)
            }, 500)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const slide = slides[current]

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
            {/* Background Images */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative container-custom pt-24 pb-20">
                <div className="max-w-2xl">
                    {/* Tag */}
                    <div
                        className={`inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 mb-6 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                            {slide.tag}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 transition-all duration-500 delay-100 ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        {slide.title.split('\n').map((line, lineIndex, lines) => (
                            <React.Fragment key={lineIndex}>
                                {line.split(' ').map((word, i, arr) => {
                                    if (word.toLowerCase() === 'dari' || word.toLowerCase() === 'tentang' || word.toLowerCase() === 'unik') {
                                        return <span key={i} className="text-gradient">{word} </span>
                                    }
                                    return word + (i < arr.length - 1 ? ' ' : '')
                                })}
                                {lineIndex < lines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-500 delay-200 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        {slide.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-500 delay-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        <Link
                            to="/kontak"
                            className="btn-primary group"
                        >
                            Mulai Konsultasi
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            to="/portofolio"
                            className="btn-secondary group"
                        >
                            Lihat Portofolio
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Stats mini */}
                    <div
                        className={`flex flex-wrap gap-8 transition-all duration-500 delay-400 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        {[
                            { value: '350+', label: 'Proyek Selesai' },
                            { value: '8+', label: 'Tahun Pengalaman' },
                            { value: '95%', label: 'Kepuasan Klien' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <div className="w-px h-8 bg-primary" />
                                <div>
                                    <div className="text-2xl font-bold text-white font-display">{stat.value}</div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`transition-all duration-300 ${i === current
                            ? 'w-8 h-2 bg-primary'
                            : 'w-2 h-2 bg-white/30 hover:bg-white/60 rounded-full'
                            }`}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-8 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
                <ChevronDown size={16} className="text-white/40 animate-bounce" />
            </div>

            {/* Side Label */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
                <div className="w-px h-20 bg-white/20" />
                <span className="text-white/30 text-xs font-medium tracking-widest uppercase"
                    style={{ writingMode: 'vertical-rl' }}>
                    Scroll untuk Jelajahi
                </span>
            </div>
        </section>
    )
}
