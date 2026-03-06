'use client'
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"

interface Experience {
    name: string,
    position: string,
    place: string,
    accessLink: string | null,
    activities: readonly string[],
    time: string
}

const Experience = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <motion.section
            id="experience"
            className='mb-24 scroll-mt-20'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <h2 className='font-syne text-sm uppercase tracking-widest text-green mb-8 flex items-center gap-3'>
                <span className="h-px w-8 bg-green/40" />
                Experience
            </h2>

            <div className="flex flex-col gap-2">
                {experiences.map((experience, idx) => (
                    <ExperienceCard key={idx} experience={experience} />
                ))}
            </div>
        </motion.section>
    )
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative flex flex-col sm:flex-row gap-4 p-5 -mx-5 rounded-xl transition-all duration-300 overflow-hidden"
            style={{
                background: isHovering
                    ? `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(94, 234, 212, 0.07), transparent 40%)`
                    : 'transparent',
            }}
        >
            {/* Border glow */}
            {isHovering && (
                <div
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-60"
                    style={{
                        border: '1px solid transparent',
                        background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(94, 234, 212, 0.15), transparent 40%) border-box`,
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                />
            )}

            {/* Time */}
            <div className="sm:w-28 flex-shrink-0 pt-1">
                <span className="font-space text-xs uppercase tracking-widest text-lightest-slate/50">
                    {experience.time}
                </span>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-2 min-w-0">
                <div>
                    <h3 className='font-syne text-base font-bold text-white group-hover:text-green transition-colors duration-300'>
                        {experience.position}
                        {' · '}
                        <a
                            href={experience.accessLink || undefined}
                            target="_blank"
                            rel="noreferrer"
                            className='text-green hover:underline underline-offset-4 decoration-green/40'
                        >
                            {experience.place}
                        </a>
                    </h3>
                </div>

                <ul className='flex flex-col gap-2'>
                    {experience.activities.map((activity, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                            <span className="text-green mt-1.5 text-xs">▸</span>
                            <p className='font-space text-sm text-lightest-slate leading-relaxed'>
                                {activity}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience