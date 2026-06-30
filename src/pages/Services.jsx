import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import SectionHeader from '../components/SectionHeader'
import { services } from '../data/portfolioData'

const WA_NUMBER = '6281323244573'

export default function Services() {
    return (
        <>
            <PageHero
                title="Layanan Lengkap untuk Setiap Kebutuhan Ruang"
                subtitle="Layanan Kami"
                description="Dari kitchen set custom hingga desain interior lengkap—semua dikerjakan dengan presisi dan standar kualitas terbaik."
                image="/images/NI2.jpeg"
                breadcrumbs={[{ label: 'Layanan' }]}
            />

            {/* Services Detail */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Apa yang Kami Tawarkan"
                        title="Empat Layanan Utama Naura Interior Design"
                        description="Setiap layanan dirancang untuk memenuhi kebutuhan spesifik Anda dengan standar kualitas material dan pengerjaan terbaik."
                        center
                    />

                    <div className="space-y-20 mt-8">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div
                                    className={`relative overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''
                                        }`}
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-primary px-4 py-2">
                                        <span className="text-white text-sm font-semibold">{service.startingPrice}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <span className="section-subtitle block mb-2">Layanan 0{service.id}</span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
                                        {service.title}
                                    </h2>
                                    <div className="w-10 h-0.5 bg-primary mb-4" />
                                    <p className="text-dark/60 leading-relaxed mb-6">{service.fullDesc}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-dark/70 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik dengan layanan ${service.title}. Bisa minta informasi lebih lanjut?`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <MessageCircle size={16} />
                                            Konsultasi Layanan Ini
                                        </a>
                                        <Link to="/portofolio" className="btn-outline">
                                            Lihat Proyek Terkait
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Package comparison */}
            <section className="py-24 bg-light">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Paket Layanan"
                        title="Pilih Paket yang Sesuai Kebutuhan Anda"
                        description="Kami menawarkan fleksibilitas paket layanan yang dapat disesuaikan dengan anggaran dan kebutuhan spesifik proyek Anda."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {[
                            {
                                name: 'Essentials',
                                label: 'Untuk Proyek Standar',
                                price: 'Mulai Rp 100 Juta',
                                color: 'border-light-dark',
                                features: [
                                    'Konsultasi desain',
                                    'Gambar kerja 2D',
                                    'Material standar quality',
                                    'Pengawasan proyek',
                                    'Garansi 1 tahun',
                                ],
                                popular: false,
                            },
                            {
                                name: 'Premium',
                                label: 'Pilihan Terpopuler',
                                price: 'Mulai Rp 350 Juta',
                                color: 'border-primary',
                                features: [
                                    'Konsultasi desain mendalam',
                                    'Rendering 3D photorealistic',
                                    'Material premium grade',
                                    'PM dedikasi',
                                    'Garansi 2 tahun',
                                    'After-care 1 tahun',
                                ],
                                popular: true,
                            },
                            {
                                name: 'Luxury',
                                label: 'Untuk Proyek Prestisius',
                                price: 'Mulai Rp 1 Miliar',
                                color: 'border-dark',
                                features: [
                                    'Full design consultation',
                                    'VR walkthrough 3D',
                                    'Material imported premium',
                                    'Senior PM + arsitek dedikasi',
                                    'Garansi 5 tahun',
                                    'After-care 2 tahun',
                                    'Priority service',
                                ],
                                popular: false,
                            },
                        ].map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`relative bg-white border-2 p-8 ${pkg.color} ${pkg.popular ? 'shadow-2xl shadow-primary/20 -translate-y-2' : ''
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-1">
                                        <span className="text-white text-xs font-bold uppercase tracking-wider">Terpopuler</span>
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="font-display font-bold text-2xl text-dark">{pkg.name}</h3>
                                    <p className="text-dark/50 text-sm mt-1">{pkg.label}</p>
                                    <div className="mt-4 text-primary font-bold text-lg">{pkg.price}</div>
                                </div>
                                <div className="w-8 h-0.5 bg-primary mb-6" />
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-dark/70">
                                            <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${pkg.name}. Bisa minta penjelasan lebih lanjut?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full text-center block py-3 font-semibold text-sm transition-all duration-300 ${pkg.popular
                                        ? 'bg-primary text-white hover:bg-primary-dark'
                                        : 'bg-dark text-white hover:bg-primary'
                                        }`}
                                >
                                    Konsultasi Sekarang
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-dark/40 text-sm mt-6">
                        * Harga bersifat estimasi dan dapat berbeda berdasarkan spesifikasi proyek. Hubungi kami untuk penawaran yang akurat.
                    </p>
                </div>
            </section>

            <CTASection />
        </>
    )
}
