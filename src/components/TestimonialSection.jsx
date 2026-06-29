import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={i < rating ? 'text-primary fill-primary' : 'text-dark/20'}
                />
            ))}
        </div>
    )
}

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0)
    const [auto, setAuto] = useState(true)

    useEffect(() => {
        if (!auto) return
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [auto])

    const prev = () => {
        setAuto(false)
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
    }
    const next = () => {
        setAuto(false)
        setCurrent((c) => (c + 1) % testimonials.length)
    }

    return (
        <section className="py-24 bg-light overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    subtitle="Testimoni Klien"
                    title="Apa Kata Mereka yang Telah Mempercayai Kami"
                    description="Kepuasan klien adalah bukti nyata kualitas dan komitmen kami dalam setiap proyek."
                    center
                />

                {/* Main testimonial */}
                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="bg-white p-10 md:p-14 relative shadow-xl">
                        {/* Quote icon */}
                        <Quote size={60} className="absolute top-8 right-8 text-primary/10" />

                        <div className="relative">
                            <StarRating rating={testimonials[current].rating} />

                            <blockquote className="text-dark text-lg md:text-xl leading-relaxed mt-6 mb-8 font-medium relative">
                                <span className="text-primary text-4xl font-serif leading-none absolute -top-2 -left-2 opacity-30">"</span>
                                &ldquo;{testimonials[current].text}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-4 border-t border-light-dark pt-6">
                                <img
                                    src={testimonials[current].avatar}
                                    alt={testimonials[current].name}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div>
                                    <div className="font-display font-bold text-dark">
                                        {testimonials[current].name}
                                    </div>
                                    <div className="text-dark/50 text-sm">{testimonials[current].position}</div>
                                    <div className="text-primary text-xs font-medium mt-0.5">
                                        Proyek: {testimonials[current].project}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            onClick={prev}
                            className="w-12 h-12 bg-dark text-white hover:bg-primary flex items-center justify-center transition-colors duration-300"
                            aria-label="Testimoni sebelumnya"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setAuto(false); setCurrent(i) }}
                                    className={`transition-all duration-300 ${i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-dark/20 hover:bg-dark/40 rounded-full'
                                        }`}
                                    aria-label={`Testimoni ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 bg-dark text-white hover:bg-primary flex items-center justify-center transition-colors duration-300"
                            aria-label="Testimoni berikutnya"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Thumbnail row */}
                <div className="flex justify-center gap-4 mt-8">
                    {testimonials.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => { setAuto(false); setCurrent(i) }}
                            className={`transition-all duration-300 ${i === current ? 'opacity-100 ring-2 ring-primary ring-offset-2' : 'opacity-40 hover:opacity-70'
                                }`}
                        >
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
