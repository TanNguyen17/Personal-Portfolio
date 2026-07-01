'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
]

const ActiveSectionTracker = () => {
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-30% 0px -60% 0px',
                threshold: 0,
            }
        )

        sections.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="hidden lg:flex flex-col gap-1 mt-3">
            {sections.map(({ id, label }) => {
                const isActive = activeSection === id
                return (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`group flex items-center gap-3 py-1.5 text-xs font-space uppercase tracking-[0.2em] transition-all duration-300 ${isActive
                                ? 'text-white'
                                : 'text-lightest-slate/40 hover:text-lightest-slate/80'
                            }`}
                    >
                        <motion.span
                            className={`h-px ${isActive ? 'bg-white' : 'bg-lightest-slate/20 group-hover:bg-lightest-slate/40'}`}
                            animate={{ width: isActive ? 64 : 24 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: 'inline-block' }}
                        />
                        {label}
                    </a>
                )
            })}
        </nav>
    )
}

export default ActiveSectionTracker
