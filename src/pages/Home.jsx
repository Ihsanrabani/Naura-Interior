import React from 'react'
import HeroSection from '../components/HeroSection'
import StatisticsSection from '../components/StatisticsSection'
import PortfolioSection from '../components/PortfolioSection'
import ServicesSection from '../components/ServicesSection'
import WhyUsSection from '../components/WhyUsSection'
import ProcessSection from '../components/ProcessSection'
import TestimonialSection from '../components/TestimonialSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatisticsSection />
            <PortfolioSection limit={6} showHeader={true} />
            <ServicesSection />
            <WhyUsSection />
            <ProcessSection compact={true} />
            <TestimonialSection />
            <FAQSection limit={5} />
            <CTASection />
        </>
    )
}
