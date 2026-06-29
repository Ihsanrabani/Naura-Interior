import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div
            className={`border transition-all duration-300 ${isOpen ? 'border-primary bg-white shadow-lg shadow-primary/5' : 'border-light-dark bg-white hover:border-dark/20'
                }`}
        >
            <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className={`font-display font-semibold text-base pr-4 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-dark'
                    }`}>
                    {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-light text-dark'
                    }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6">
                    <div className="w-8 h-0.5 bg-primary mb-4" />
                    <p className="text-dark/60 leading-relaxed text-sm">{faq.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default function FAQSection({ limit, showHeader = true }) {
    const [openId, setOpenId] = useState(null)
    const displayedFaqs = limit ? faqs.slice(0, limit) : faqs

    return (
        <section className="py-24 bg-light">
            <div className="container-custom">
                {showHeader && (
                    <SectionHeader
                        subtitle="Pertanyaan Umum"
                        title="Jawaban untuk Pertanyaan Anda"
                        description="Temukan jawaban atas pertanyaan yang paling sering diajukan oleh calon klien kami."
                        center
                    />
                )}

                <div className="max-w-3xl mx-auto space-y-3">
                    {displayedFaqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
