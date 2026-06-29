import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'

export default function FAQ() {
    return (
        <>
            <PageHero
                title="Pertanyaan yang Sering Ditanyakan"
                subtitle="FAQ"
                description="Temukan jawaban lengkap atas berbagai pertanyaan mengenai layanan, proses, dan cara kerja Naura Interior Design."
                breadcrumbs={[{ label: 'FAQ' }]}
            />

            <FAQSection showHeader={false} />

            {/* Still have questions */}
            <section className="py-20 bg-white border-t border-light-dark">
                <div className="container-custom">
                    <div className="bg-dark p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, #EA6522 1px, transparent 0)`,
                                backgroundSize: '30px 30px',
                            }}
                        />
                        <div className="relative">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">
                                Tidak Menemukan Jawaban yang Anda Cari?
                            </h2>
                            <p className="text-white/60 max-w-xl mx-auto mb-8">
                                Tim kami siap menjawab pertanyaan spesifik Anda. Hubungi kami langsung melalui WhatsApp atau kirimkan pesan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/6281234567890?text=Halo%2C%20saya%20punya%20pertanyaan%20mengenai%20layanan%20Naura%20Interior%20Design."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <MessageCircle size={16} />
                                    Tanya via WhatsApp
                                </a>
                                <Link to="/kontak" className="btn-secondary">
                                    Kirim Pesan
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    )
}
