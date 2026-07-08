'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import ActiveSectionTracker from './ActiveSectionTracker'

const fadeUp = (delay: number) => ({
    hidden: { y: 24, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    }
})

const Header = () => {
    return (
        <header className="flex flex-col gap-4 lg:gap-5">
            {/* Portrait */}
            <motion.div
                className='w-24 h-24 lg:w-28 lg:h-28 relative rounded-2xl overflow-hidden ring-2 ring-blue/30 ring-offset-4 ring-offset-navy-blue'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
                <Image
                    src='/personal_cut.webp'
                    alt='Manh Tan Nguyen'
                    fill
                    className='object-cover object-top'
                    sizes="112px"
                    priority
                />
            </motion.div>

            {/* Name and Title */}
            <motion.div
                variants={fadeUp(0.15)}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1"
            >
                <h1 className="font-syne text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-bold tracking-tight text-white leading-tight">
                    Manh Tan Nguyen
                </h1>
                <h2 className="font-space text-base lg:text-lg text-blue font-medium">
                    Software Engineer & Innovator
                </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
                className='font-space text-[15px] text-lightest-slate leading-relaxed max-w-md'
                variants={fadeUp(0.25)}
                initial="hidden"
                animate="visible"
            >
                Building at the intersection of solid engineering and thoughtful design.
                From AI-powered wellness apps to community platforms, I craft technology that empowers people.
            </motion.p>

            {/* Availability Badge */}
            <motion.div
                className="flex items-center gap-2.5"
                variants={fadeUp(0.35)}
                initial="hidden"
                animate="visible"
            >
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-space text-xs text-lightest-slate/60 uppercase tracking-widest">
                    Available for opportunities
                </span>
            </motion.div>

            {/* Active Section Nav */}
            <ActiveSectionTracker />
        </header>
    )
}

export default Header