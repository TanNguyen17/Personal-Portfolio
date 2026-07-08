'use client'
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, GraduationCap, Users, Rocket, Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react'

interface Experience {
    name: string,
    position: string,
    place: string,
    accessLink: string | null,
    activities: readonly string[],
    time: string,
    type?: 'work' | 'education' | 'club' | 'project',
    order?: number | null
}

const getIcon = (type?: string) => {
    switch (type) {
        case 'work':
            return <Briefcase className="w-4 h-4" />
        case 'education':
            return <GraduationCap className="w-4 h-4" />
        case 'club':
            return <Users className="w-4 h-4" />
        case 'project':
            return <Rocket className="w-4 h-4" />
        default:
            return <Briefcase className="w-4 h-4" />
    }
}

const Experience = ({ experiences }: { experiences: Experience[] }) => {
    // Journey view: oldest first (lower order first)
    const journeyExperiences = [...experiences].sort((a, b) => {
        const orderA = a.order ?? 0
        const orderB = b.order ?? 0
        return orderA - orderB
    })

    const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(
        journeyExperiences.length > 0 ? journeyExperiences.length - 1 : 0
    )

    // Helper to extract clean 4-digit start year
    const getCleanYear = (timeStr: string) => {
        const match = timeStr.match(/\d{4}/)
        return match ? match[0] : timeStr
    }

    return (
        <motion.section
            id="experience"
            className='mb-24 scroll-mt-20 font-space text-left'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className='font-syne text-sm uppercase tracking-widest text-blue flex items-center gap-3'>
                    <span className="h-px w-8 bg-blue/40" />
                    Experience Journey
                </h2>
            </div>

            {/* View Mode Description Banner */}
            <p className="font-space text-xs text-lightest-slate/50 mb-6 italic">
                ⏳ Use the Time Machine slider below to drag or click through the chronological milestones of my career.
            </p>

            <div className="flex flex-col gap-6">
                {/* Time Machine Slider */}
                <div className="relative mb-10 mt-6 px-6 select-none bg-white/[0.02] border border-white/5 py-6 rounded-xl">
                    {/* The Track Line */}
                    <div className="absolute left-10 right-10 top-[40px] h-[2px] bg-white/10" />
                    
                    {/* The Active Glowing Fill Line */}
                    <div 
                        className="absolute left-10 top-[40px] h-[2px] bg-blue shadow-[0_0_8px_rgba(56,189,248,0.5)] duration-500 transition-all"
                        style={{ 
                            width: `${journeyExperiences.length > 1 ? (activeMilestoneIndex / (journeyExperiences.length - 1)) * 100 : 0}%`,
                            maxWidth: 'calc(100% - 80px)'
                        }}
                    />
                    
                    {/* The Nodes */}
                    <div className="relative flex justify-between w-full z-10">
                        {journeyExperiences.map((m, idx) => {
                            const isActive = idx === activeMilestoneIndex
                            return (
                                <button
                                    key={m.name}
                                    onClick={() => setActiveMilestoneIndex(idx)}
                                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                                >
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-blue text-navy-blue border-blue font-bold scale-110 shadow-lg shadow-blue/30 ring-4 ring-blue/10'
                                            : 'bg-navy-blue text-lightest-slate/60 border-white/15 group-hover:border-blue/50 group-hover:text-blue'
                                    }`}>
                                        {getIcon(m.type)}
                                    </div>
                                    <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase ${
                                        isActive ? 'text-blue' : 'text-lightest-slate/40 group-hover:text-lightest-slate/85'
                                    }`}>
                                        {getCleanYear(m.time)}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Milestone 3D Morph Card */}
                <div className="relative bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden min-h-[220px]">
                    {/* Ambient subtle glow background */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <AnimatePresence mode="wait">
                        {journeyExperiences.length > 0 && (
                            <motion.div
                                key={activeMilestoneIndex}
                                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="flex flex-col md:flex-row gap-6 items-start"
                            >
                                {/* Visual Phase Banner/Marker */}
                                <div className="md:w-44 flex-shrink-0 flex flex-col gap-1">
                                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-blue bg-blue/10 px-2 py-0.5 rounded border border-blue/15 w-fit">
                                        <Sparkles className="w-3 h-3" />
                                        Milestone {activeMilestoneIndex + 1}
                                    </span>
                                    <span className="text-xl font-bold font-syne text-white mt-2">
                                        {journeyExperiences[activeMilestoneIndex].time}
                                    </span>
                                    <p className="text-[11px] text-lightest-slate/40 uppercase tracking-wider font-mono mt-1">
                                        {journeyExperiences[activeMilestoneIndex].type || 'Experience'}
                                    </p>
                                </div>
                                
                                {/* Card Content Details */}
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-syne text-lg font-bold text-white flex flex-wrap items-center gap-2">
                                        <span>{journeyExperiences[activeMilestoneIndex].position}</span>
                                        <span className="text-lightest-slate/30 text-sm font-normal">at</span>
                                        <a
                                            href={journeyExperiences[activeMilestoneIndex].accessLink || undefined}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue hover:underline underline-offset-4 decoration-blue/40 inline-flex items-center gap-0.5"
                                        >
                                            {journeyExperiences[activeMilestoneIndex].place}
                                            {journeyExperiences[activeMilestoneIndex].accessLink && <ArrowRight className="w-3.5 h-3.5 opacity-50" />}
                                        </a>
                                    </h3>
                                    
                                    <ul className="flex flex-col gap-2.5 mt-4">
                                        {journeyExperiences[activeMilestoneIndex].activities.map((activity, idx) => (
                                            <li key={idx} className="flex gap-2.5 items-start">
                                                <span className="text-blue mt-1.5 text-xs select-none">▸</span>
                                                <p className="font-space text-sm text-lightest-slate leading-relaxed">
                                                    {activity}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    )
}

export default Experience