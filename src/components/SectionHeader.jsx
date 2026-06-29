import React from 'react'

export default function SectionHeader({ subtitle, title, description, center = false, light = false }) {
    return (
        <div className={`mb-12 ${center ? 'text-center' : ''}`}>
            {subtitle && (
                <span className={`section-subtitle block mb-3 ${light ? 'text-primary' : 'text-primary'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`section-title mb-4 ${light ? 'text-white' : 'text-dark'}`}>
                {title}
            </h2>
            {description && (
                <p className={`section-desc max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-dark/60'}`}>
                    {description}
                </p>
            )}
        </div>
    )
}
