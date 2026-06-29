import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Star, Users, Award, Wrench } from 'lucide-react'
import SectionHeader from './SectionHeader'

const reasons = [
    {
        icon: <Shield size={24} />,
        title: 'Kualitas Tanpa Kompromi',
        desc: 'Setiap produk Naura dibuat dari material terpilih dengan proses quality control yang ketat—dari produksi di workshop hingga pemasangan di lokasi Anda.',
    },
    {
        icon: <Award size={24} />,
        title: 'Kualitas Material Premium',
        desc: 'Kami hanya menggunakan material bersertifikat SNI dan produk premium dari merek terpercaya. Tidak ada kompromi dalam hal kualitas.',
    },
    {
        icon: <Users size={24} />,
        title: 'Tim Profesional Berpengalaman',
        desc: 'Tim kami terdiri dari arsitek, insinyur, desainer interior, dan pengrajin berpengalaman yang telah menangani ratusan proyek sukses.',
    },
    {
        icon: <Clock size={24} />,
        title: 'Tepat Waktu & Terstruktur',
        desc: 'Setiap proyek memiliki timeline yang jelas dengan sistem monitoring harian. Kami berkomitmen pada jadwal yang telah disepakati.',
    },
    {
        icon: <Star size={24} />,
        title: 'Garansi Purna Jual',
        desc: 'Garansi struktur 5 tahun, garansi finishing 1 tahun, dan garansi furniture 2 tahun. Kepuasan Anda adalah prioritas utama kami.',
    },
    {
        icon: <Wrench size={24} />,
        title: 'Layanan After-Care',
        desc: 'Hubungan kami tidak berhenti setelah serah terima. Tim after-care kami siap membantu perawatan dan perbaikan pasca proyek.',
    },
]

export default function WhyUsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-light opacity-50 clip-diagonal" />

            <div className="relative container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <SectionHeader
                            subtitle="Mengapa Memilih Kami"
                            title="Kenapa Pilih Naura Interior Design?"
                            description="Kami bukan sekadar tukang furniture—kami adalah mitra yang memahami bahwa rumah Anda adalah tempat paling berharga, dan setiap sudutnya layak untuk tampil sempurna."
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((reason) => (
                                <div
                                    key={reason.title}
                                    className="group p-5 hover:bg-light transition-all duration-300 border border-transparent hover:border-light-dark"
                                >
                                    <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-dark mb-2 text-sm">{reason.title}</h3>
                                    <p className="text-dark/50 text-xs leading-relaxed">{reason.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link to="/tentang" className="btn-primary">
                                Kenali Tim Kami
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="relative hidden lg:block">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="overflow-hidden h-56">
                                    <img
                                        src="/images/NI2.jpeg"
                                        alt="Tim Konstruksi"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="overflow-hidden h-40">
                                    <img
                                        src="/images/NI8.jpeg"
                                        alt="Desain Interior"
                                        className="w-full h-full bg-center object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <div className="overflow-hidden h-40">
                                    <img
                                        src="/images/NI10.jpeg"
                                        alt="Renovasi"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="overflow-hidden h-56">
                                    <img
                                        src="/images/NI5.jpeg"
                                        alt="Furniture Custom"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Award badge */}
                        <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-2xl z-10">
                            <div className="text-white text-center">
                                <div className="text-4xl font-display font-bold leading-none">8+</div>
                                <div className="text-white/70 text-xs uppercase tracking-widest mt-1">Tahun Pengalaman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
