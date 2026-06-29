import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Process from './pages/Process'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])
    return null
}

// Layout wrapper
function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/tentang" element={<Layout><About /></Layout>} />
                <Route path="/layanan" element={<Layout><Services /></Layout>} />
                <Route path="/portofolio" element={<Layout><Portfolio /></Layout>} />
                <Route path="/portofolio/:slug" element={<Layout><ProjectDetail /></Layout>} />
                <Route path="/proses-kerja" element={<Layout><Process /></Layout>} />
                <Route path="/faq" element={<Layout><FAQ /></Layout>} />
                <Route path="/kontak" element={<Layout><Contact /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
