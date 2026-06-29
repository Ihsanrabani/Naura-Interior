import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { workProcess } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function ProcessSection({ compact = false }) {
    const steps = compact ? workProcess.slice(0, 4) : workProcess

    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #EA6522 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative container-custom">
                <SectionHeader
                    subtitle="Proses Kerja Kami"
                    title="Transparan dari Awal hingga Selesai"
                    description="Setiap langkah dirancang untuk memberikan ketenangan pikiran dan kepastian bagi Anda sebagai klien."
                    light
                    center
                />

                {/* Process Steps */}
                <div className="relative mt-16">
                    {/* Connecting Line */}
                    <div className="absolute top-10 left-0 right-0 h-px bg-white/10 hidden md:block" />

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${compact ? '4' : '3 xl:grid-cols-6'} gap-8`}>
                        {steps.map((step, index) => (
                            <div key={step.step} className="relative text-center group">
                                {/* Step number */}
                                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                                    <div className="absolute inset-0 bg-dark border border-white/20 group-hover:border-primary/50 transition-colors duration-500" />
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                                    <span className="relative text-2xl font-display font-bold text-primary">{step.step}</span>
                                </div>

                                {/* Arrow connector */}
                                {index < steps.length - 1 && (
                                    <div className="absolute top-10 -right-4 hidden lg:block">
                                        <ArrowRight size={16} className="text-white/20" />
                                    </div>
                                )}

                                <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {compact && (
                    <div className="text-center mt-12">
                        <Link to="/proses-kerja" className="btn-secondary">
                            Pelajari Selengkapnya
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
