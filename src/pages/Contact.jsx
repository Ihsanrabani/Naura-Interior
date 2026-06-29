import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'

const WA_NUMBER = '6281234567890'

const serviceOptions = [
    'Konstruksi Bangunan',
    'Renovasi Bangunan',
    'Desain Interior',
    'Furniture Custom',
    'Lainnya',
]

const budgetOptions = [
    'Di bawah Rp 100 Juta',
    'Rp 100 Juta – Rp 500 Juta',
    'Rp 500 Juta – Rp 1 Miliar',
    'Rp 1 Miliar – Rp 3 Miliar',
    'Di atas Rp 3 Miliar',
    'Belum ditentukan',
]

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = encodeURIComponent(
            `Halo Naura Interior Design!\n\n*Data Konsultasi:*\n👤 Nama: ${form.name}\n📱 No. HP: ${form.phone}\n📧 Email: ${form.email}\n🏗️ Layanan: ${form.service}\n💰 Budget: ${form.budget}\n\n📝 Pesan:\n${form.message}`
        )
        window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
        setSubmitted(true)
    }

    const contactInfo = [
        {
            icon: <Phone size={20} />,
            title: 'Telepon / WhatsApp',
            lines: ['+62 812-3456-7890', '+62 821-9876-5432'],
            action: { label: 'Hubungi Sekarang', href: 'tel:+6281234567890' },
        },
        {
            icon: <Mail size={20} />,
            title: 'Email',
            lines: ['info@naurainterior.com', 'order@naurainterior.com'],
            action: { label: 'Kirim Email', href: 'mailto:info@naurainterior.com' },
        },
        {
            icon: <MapPin size={20} />,
            title: 'Kantor Kami',
            lines: ['Jl. Kemang Raya No. 88', 'Jakarta Selatan, 12730'],
            action: { label: 'Lihat di Maps', href: 'https://maps.google.com' },
        },
        {
            icon: <Clock size={20} />,
            title: 'Jam Operasional',
            lines: ['Senin – Jumat: 08.00 – 17.00', 'Sabtu: 09.00 – 14.00'],
            action: null,
        },
    ]

    return (
        <>
            <PageHero
                title="Mari Mulai Diskusi tentang Proyek Anda"
                subtitle="Hubungi Kami"
                description="Tim kami siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik. Konsultasi pertama selalu gratis."
                breadcrumbs={[{ label: 'Kontak' }]}
            />

            <section className="py-24 bg-light">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div>
                                <span className="section-subtitle block mb-2">Reach Us</span>
                                <h2 className="text-3xl font-display font-bold text-dark">Kami Siap Membantu Anda</h2>
                                <div className="w-8 h-0.5 bg-primary mt-4" />
                            </div>

                            {contactInfo.map((info) => (
                                <div key={info.title} className="bg-white p-6 border border-light-dark hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-display font-bold text-dark text-sm mb-1">{info.title}</h3>
                                            {info.lines.map((line, i) => (
                                                <p key={i} className="text-dark/60 text-sm">{line}</p>
                                            ))}
                                            {info.action && (
                                                <a
                                                    href={info.action.href}
                                                    className="text-primary text-xs font-semibold mt-2 inline-block hover:underline"
                                                    target={info.action.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                >
                                                    {info.action.label} →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp direct */}
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Naura Interior Design, saya ingin konsultasi.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 hover:bg-[#20BA5A] transition-colors duration-300 w-full"
                            >
                                <MessageCircle size={20} />
                                Chat Langsung via WhatsApp
                            </a>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-12 border border-light-dark">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <CheckCircle size={60} className="text-primary mx-auto mb-6" />
                                        <h3 className="text-2xl font-display font-bold text-dark mb-3">
                                            Terima Kasih!
                                        </h3>
                                        <p className="text-dark/60 mb-6">
                                            Pesan Anda telah diteruskan via WhatsApp. Tim kami akan segera merespons dalam waktu 1-2 jam kerja.
                                        </p>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', budget: '', message: '' }) }}
                                            className="btn-outline"
                                        >
                                            Kirim Pesan Lain
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <span className="section-subtitle block mb-2">Formulir Konsultasi</span>
                                            <h2 className="text-2xl font-display font-bold text-dark">Ceritakan Proyek Anda</h2>
                                            <p className="text-dark/50 text-sm mt-2">Isi formulir di bawah dan tim kami akan menghubungi Anda segera.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-dark text-sm font-medium mb-2">
                                                        Nama Lengkap <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        placeholder="Masukkan nama Anda"
                                                        className="w-full border border-light-dark bg-light px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-dark text-sm font-medium mb-2">
                                                        Nomor WhatsApp <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="08xx-xxxx-xxxx"
                                                        className="w-full border border-light-dark bg-light px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-dark text-sm font-medium mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="email@contoh.com"
                                                    className="w-full border border-light-dark bg-light px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-dark text-sm font-medium mb-2">
                                                        Layanan yang Dibutuhkan <span className="text-primary">*</span>
                                                    </label>
                                                    <select
                                                        name="service"
                                                        required
                                                        value={form.service}
                                                        onChange={handleChange}
                                                        className="w-full border border-light-dark bg-light px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 appearance-none"
                                                    >
                                                        <option value="">Pilih layanan...</option>
                                                        {serviceOptions.map((opt) => (
                                                            <option key={opt} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-dark text-sm font-medium mb-2">
                                                        Estimasi Anggaran
                                                    </label>
                                                    <select
                                                        name="budget"
                                                        value={form.budget}
                                                        onChange={handleChange}
                                                        className="w-full border border-light-dark bg-light px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 appearance-none"
                                                    >
                                                        <option value="">Pilih range anggaran...</option>
                                                        {budgetOptions.map((opt) => (
                                                            <option key={opt} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-dark text-sm font-medium mb-2">
                                                    Deskripsi Proyek <span className="text-primary">*</span>
                                                </label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={5}
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Ceritakan kebutuhan proyek Anda—jenis bangunan, luas area, konsep yang diinginkan, atau hal lain yang perlu kami ketahui..."
                                                    className="w-full border border-light-dark bg-light px-4 py-3 text-sm text-dark placeholder-dark/30 focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn-primary w-full justify-center"
                                            >
                                                <Send size={16} />
                                                Kirim via WhatsApp
                                            </button>

                                            <p className="text-dark/40 text-xs text-center">
                                                Dengan mengirim formulir ini, Anda akan diarahkan ke WhatsApp untuk melanjutkan diskusi. Kami menghargai privasi Anda.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="h-80 bg-light-dark relative overflow-hidden">
                <img
                    src="/images/NI7.jpeg"
                    alt="Lokasi Kantor"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-dark/90 text-white px-8 py-6 text-center">
                        <MapPin size={28} className="text-primary mx-auto mb-3" />
                        <div className="font-display font-bold text-lg">Naura Interior Design</div>
                        <div className="text-white/60 text-sm mt-1">Bekasi, Jawa Barat</div>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm font-semibold mt-2 inline-block hover:underline"
                        >
                            Buka di Google Maps →
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
