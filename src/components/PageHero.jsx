import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHero({ title, subtitle, description, image, breadcrumbs = [] }) {
    return (
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end bg-dark overflow-hidden">
            {/* Background Image */}
            {image && (
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />
                </div>
            )}
            {!image && (
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark/80">
                    <div className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EA6522' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
            )}

            <div className="relative container-custom pb-16 pt-32">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-2 mb-6 text-sm" aria-label="Breadcrumb">
                        <Link to="/" className="text-white/50 hover:text-primary transition-colors duration-300 flex items-center gap-1">
                            <Home size={12} />
                            <span>Beranda</span>
                        </Link>
                        {breadcrumbs.map((crumb, i) => (
                            <React.Fragment key={i}>
                                <ChevronRight size={12} className="text-white/30" />
                                {crumb.path ? (
                                    <Link to={crumb.path} className="text-white/50 hover:text-primary transition-colors duration-300">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-primary">{crumb.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                )}

                {/* Accent line */}
                <div className="w-12 h-1 bg-primary mb-4" />

                {/* Subtitle */}
                {subtitle && (
                    <p className="section-subtitle text-primary mb-3">{subtitle}</p>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-4 max-w-3xl">
                    {title}
                </h1>

                {/* Description */}
                {description && (
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}
