import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Award, Users, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import StatisticsSection from '../components/StatisticsSection'
import CTASection from '../components/CTASection'
import SectionHeader from '../components/SectionHeader'

const team = [
    {
        name: 'Arif Budiman',
        role: 'Direktur & Founder',
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
        exp: '15 tahun pengalaman',
        desc: 'Desainer & founder Naura Interior Design. Memulai Naura pada 2019 dengan visi menghadirkan furniture custom berkualitas untuk semua kalangan.',
    },
    {
        name: 'Dina Kusuma',
        role: 'Lead Interior Designer',
        image: 'https://randomuser.me/api/portraits/women/36.jpg',
        exp: '10 tahun pengalaman',
        desc: 'Desainer interior lulusan Parsons School of Design. Spesialis Japandi, modern minimalis, dan industrial chic.',
    },
    {
        name: 'Reza Pratama',
        role: 'Project Manager Senior',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        exp: '12 tahun pengalaman',
        desc: 'Insinyur sipil berpengalaman dalam manajemen proyek berskala besar. Memastikan setiap proyek selesai tepat waktu.',
    },
    {
        name: 'Hani Lestari',
        role: 'Head of Furniture Workshop',
        image: 'https://randomuser.me/api/portraits/women/48.jpg',
        exp: '8 tahun pengalaman',
        desc: 'Spesialis furniture custom dengan keahlian mendalam dalam material kayu solid, HPL, dan sistem hardware premium.',
    },
]

const values = [
    {
        icon: <Target size={24} />,
        title: 'Misi Kami',
        desc: 'Menghadirkan furniture custom dan desain interior berkualitas tinggi yang bisa dinikmati semua kalangan—dengan harga yang jujur dan pengerjaan yang penuh tanggung jawab.',
    },
    {
        icon: <Eye size={24} />,
        title: 'Visi Kami',
        desc: 'Menjadi studio interior dan furniture terpercaya pilihan keluarga Indonesia—dikenal atas kualitas craftsmanship, ketepatan waktu, dan pelayanan yang tulus.',
    },
    {
        icon: <Heart size={24} />,
        title: 'Nilai Kami',
        desc: 'Jujur, teliti, dan berorientasi pada kepuasan klien. Kami tidak hanya membuat furniture—kami menciptakan ruang yang membuat Anda betah pulang ke rumah.',
    },
]

export default function About() {
    return (
        <>
            <PageHero
                title="Dari Passion Menjadi Karya Nyata"
                subtitle="Tentang Kami"
                description="Naura Interior Design hadir untuk mewujudkan ruang impian Anda—dengan furniture custom berkualitas dan desain interior yang personal."
                image="/images/NI8.jpeg"
                breadcrumbs={[{ label: 'Tentang Kami' }]}
            />

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="section-subtitle block mb-3">Cerita Kami</span>
                            <h2 className="section-title mb-6">
                                Dari Hobi Menata Ruang<br />
                                Menjadi Bisnis Kepercayaan
                            </h2>
                            <div className="space-y-4 text-dark/60 leading-relaxed">
                                <p>
                                    Naura Interior Design lahir dari kecintaan mendalam terhadap estetika ruang. Berawal dari proyek-proyek kecil di lingkungan sekitar, kami tumbuh menjadi studio interior & furniture yang dipercaya ratusan keluarga di Bekasi dan sekitarnya.
                                </p>
                                <p>
                                    Kami percaya bahwa setiap rumah berhak tampil indah dan fungsional—tanpa harus mengorbankan anggaran. Itulah mengapa kami selalu menawarkan solusi yang jujur, transparan, dan sesuai kebutuhan nyata setiap klien.
                                </p>
                                <p>
                                    Kini, 350+ proyek telah kami selesaikan dengan penuh tanggung jawab. Dari kitchen set sederhana hingga renovasi interior lengkap—setiap proyek dikerjakan dengan standar yang sama: rapi, presisi, dan tepat waktu. Itu adalah janji <strong className="text-dark">Naura</strong>.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { year: '2019', event: 'Naura didirikan' },
                                    { year: '2020', event: '50 proyek pertama' },
                                    { year: '2022', event: 'Ekspansi ke Karawang' },
                                    { year: '2024', event: '350+ proyek selesai' },
                                ].map((item) => (
                                    <div key={item.year} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                        <div>
                                            <div className="text-primary font-bold text-sm">{item.year}</div>
                                            <div className="text-dark/60 text-sm">{item.event}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/images/NI9.jpeg"
                                    alt="Proyek Naura"
                                    className="w-full h-64 object-cover"
                                />
                                <img
                                    src="/images/NI10.jpeg"
                                    alt="Interior Naura"
                                    className="w-full h-64 object-cover mt-8"
                                />
                                <img
                                    src="/images/NI1.jpeg"
                                    alt="Kitchen Set Naura"
                                    className="w-full h-48 object-cover -mt-4"
                                />
                                <img
                                    src="/images/NI5.jpeg"
                                    alt="Furniture Naura"
                                    className="w-full h-48 object-cover mt-4"
                                />
                            </div>
                            {/* Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-primary p-6 shadow-2xl">
                                <div className="text-white text-center">
                                    <div className="text-3xl font-display font-bold">350+</div>
                                    <div className="text-white/70 text-xs uppercase tracking-widest">Proyek Sukses</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Mission Values */}
            <section className="py-24 bg-light">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Visi, Misi & Nilai"
                        title="Fondasi yang Menopang Setiap Proyek Kami"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                        {values.map((item) => (
                            <div key={item.title} className="bg-white p-8 border border-light-dark hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl text-dark mb-4">{item.title}</h3>
                                <div className="w-8 h-0.5 bg-primary mb-4" />
                                <p className="text-dark/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <StatisticsSection />

            {/* Team Section */}
            {/* <section className="py-24 bg-white">
                <div className="container-custom">
                    <SectionHeader
                        subtitle="Tim Kami"
                        title="Orang-Orang di Balik Setiap Proyek"
                        description="Tim profesional kami adalah kombinasi sempurna antara keahlian teknis dan kreativitas."
                        center
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        {team.map((member) => (
                            <div key={member.name} className="group text-center">
                                <div className="relative overflow-hidden mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-xs bg-dark/80 p-3 leading-relaxed">{member.desc}</p>
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-dark text-lg">{member.name}</h3>
                                <p className="text-primary text-sm font-semibold mt-1">{member.role}</p>
                                <p className="text-dark/40 text-xs mt-1">{member.exp}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <CTASection />
        </>
    )
}
