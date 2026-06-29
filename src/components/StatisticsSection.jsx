import React, { useEffect, useRef, useState } from 'react'
import { stats } from '../data/portfolioData'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [started])

    useEffect(() => {
        if (!started) return
        const numericTarget = parseInt(target.replace(/\D/g, ''))
        const step = Math.ceil(numericTarget / (duration / 16))
        let current = 0
        const timer = setInterval(() => {
            current = Math.min(current + step, numericTarget)
            setCount(current)
            if (current >= numericTarget) clearInterval(timer)
        }, 16)
        return () => clearInterval(timer)
    }, [started, target, duration])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

export default function StatisticsSection() {
    return (
        <section className="bg-dark py-20 relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            #7A5C45,
            #7A5C45 1px,
            transparent 1px,
            transparent 60px
          )`,
                }}
            />

            <div className="relative container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`p-8 md:p-12 text-center relative group ${index !== stats.length - 1 ? 'border-r border-white/10' : ''
                                }`}
                        >
                            {/* Hover accent */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="relative">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-white/60 text-sm uppercase tracking-widest font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
