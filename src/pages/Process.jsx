import React from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import SectionHeader from '../components/SectionHeader'
import { workProcess } from '../data/portfolioData'

export default function Process() {
    return (
        <>
            <PageHero
                title="Proses Kerja yang Transparan dan Terstruktur"
                subtitle="Cara Kami Bekerja"
                description="Kami percaya bahwa transparansi adalah kunci kepercayaan. Setiap langkah proses kami dirancang untuk memberikan ketenangan pikiran."
                image="/images/NI8.jpeg"
                breadcrumbs={[{ label: 'Proses Kerja' }]}
            />

            {/* Main Process */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="6 Langkah Kami"
                        title="Dari Konsep hingga Serah Terima Kunci"
                        description="Setiap proyek melewati enam tahapan yang terstruktur untuk memastikan hasil yang memuaskan dan sesuai dengan harapan Anda."
                        center
                    />

                    <div className="relative mt-16 space-y-0">
                        {workProcess.map((step, index) => (
                            <div
                                key={step.step}
                                className={`relative flex items-start gap-8 py-12 ${index !== workProcess.length - 1 ? 'border-b border-light-dark' : ''
                                    }`}
                            >
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className={`w-20 h-20 flex items-center justify-center text-3xl font-display font-bold border-2 transition-colors duration-300 ${index % 2 === 0
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-primary border-primary/30'
                                        }`}>
                                        {step.step}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-4">
                                    <h3 className="text-2xl font-display font-bold text-dark mb-3">{step.title}</h3>
                                    <div className="w-8 h-0.5 bg-primary mb-4" />
                                    <p className="text-dark/60 leading-relaxed max-w-2xl">{step.desc}</p>
                                </div>

                                {/* Check */}
                                <div className="flex-shrink-0 pt-4 hidden md:block">
                                    <CheckCircle size={24} className="text-primary/30" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why our process is different */}
            <section className="py-24 bg-dark">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Komitmen Kami"
                        title="Yang Membuat Proses Kami Berbeda"
                        light
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        {[
                            {
                                icon: '📋',
                                title: 'RAB Transparan',
                                desc: 'Rincian biaya yang jelas dan detail. Tidak ada biaya tersembunyi atau perubahan harga tanpa persetujuan Anda.',
                            },
                            {
                                icon: '📊',
                                title: 'Laporan Berkala',
                                desc: 'Update progres setiap minggu via WhatsApp atau email, lengkap dengan foto dokumentasi terkini.',
                            },
                            {
                                icon: '⚡',
                                title: 'Respons Cepat',
                                desc: 'Tim kami selalu responsif. Setiap pertanyaan dan kekhawatiran Anda akan direspons dalam waktu kurang dari 2 jam.',
                            },
                            {
                                icon: '🛡️',
                                title: 'Jaminan Kualitas',
                                desc: 'Pemeriksaan kualitas di setiap tahap konstruksi. Material diverifikasi sebelum digunakan.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white/5 border border-white/10 p-8 hover:border-primary/30 hover:bg-white/10 transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                                <div className="w-6 h-0.5 bg-primary mb-3" />
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ teaser */}
            <section className="py-20 bg-light">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-display font-bold text-dark mb-4">Masih Punya Pertanyaan?</h2>
                    <p className="text-dark/60 max-w-xl mx-auto mb-8">
                        Kami menyiapkan halaman FAQ yang menjawab pertanyaan paling umum dari calon klien. Atau langsung hubungi tim kami.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/faq" className="btn-primary">
                            Lihat FAQ
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="https://wa.me/6281323244573"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            Chat Langsung
                        </a>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    )
}
