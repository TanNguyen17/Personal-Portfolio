"use client"
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { ScrollArea } from "@/components/ui/scroll-area"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image'

interface Project {
    imagePath: string | null,
    images: readonly (string | null)[],
    accessLink: string | null,
    name: string,
    introduction: string,
    techStack: readonly string[],
    activities: readonly string[],
}

const Project = ({ projects }: { projects: Project[] }) => {
    return (
        <section id="projects" className='mb-24 scroll-mt-20'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px" }}
            >
                <h2 className='font-syne text-sm uppercase tracking-widest text-green mb-8 flex items-center gap-3'>
                    <span className="h-px w-8 bg-green/40" />
                    Projects
                </h2>
            </motion.div>

            <div className="flex flex-col gap-3">
                {projects.map((project, idx) => (
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        key={idx}
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="cursor-pointer">
                                    <ProjectCard {...project} />
                                </div>
                            </DialogTrigger>
                            <DialogContent className='flex flex-col h-[85vh] max-w-3xl bg-navy-blue border border-white/10 p-0 rounded-xl'>
                                <ScrollArea className='h-full w-full p-6 md:p-8'>
                                    <DialogHeader className='mb-6'>
                                        <DialogTitle className='font-syne text-2xl font-bold text-white tracking-tight'>
                                            {project.name}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className='mb-6 rounded-lg overflow-hidden'>
                                        <Carousel className="w-full">
                                            <CarouselContent>
                                                {project.images.map((image, idx) => (
                                                    <CarouselItem key={idx}>
                                                        <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
                                                            <Image
                                                                src={image || ''}
                                                                alt={`${project.name} screenshot ${idx + 1}`}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="left-2" />
                                            <CarouselNext className="right-2" />
                                        </Carousel>
                                    </div>

                                    <div>
                                        <h3 className="font-space text-sm uppercase tracking-widest text-green mb-4">Key Contributions</h3>
                                        <ul className='flex flex-col gap-3'>
                                            {project.activities.map((activity, idx) => (
                                                <li key={idx} className='flex gap-3 items-start'>
                                                    <span className="text-green mt-1.5 text-xs">▸</span>
                                                    <span className="font-space text-sm text-lightest-slate leading-relaxed">{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.accessLink && (
                                        <div className="mt-8">
                                            <a href={project.accessLink} target="_blank" rel="noreferrer"
                                                className="inline-flex items-center gap-2 font-space text-sm font-medium text-green hover:text-white transition-colors duration-300">
                                                View Project <ArrowOutwardIcon fontSize="small" />
                                            </a>
                                        </div>
                                    )}
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

const ProjectCard = (project: Project) => {
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
            className='group relative flex flex-col sm:flex-row gap-5 p-5 -mx-5 rounded-xl transition-all duration-300 overflow-hidden'
            style={{
                background: isHovering
                    ? `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(94, 234, 212, 0.07), transparent 40%)`
                    : 'transparent',
            }}
        >
            {/* Border glow overlay */}
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

            {/* Thumbnail */}
            <div className='sm:w-36 md:w-44 flex-shrink-0 relative aspect-video sm:aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 group-hover:border-green/30 transition-colors duration-500'>
                <Image
                    src={project.imagePath || ''}
                    alt={project.name}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
            </div>

            {/* Info */}
            <div className='flex flex-col justify-center gap-2 min-w-0'>
                <h3 className='font-syne text-lg font-bold text-white group-hover:text-green transition-colors duration-300 flex items-center gap-1.5'>
                    <span className="truncate">{project.name}</span>
                    <ArrowOutwardIcon
                        className='flex-shrink-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300'
                        style={{ fontSize: 16 }}
                    />
                </h3>

                <p className='font-space text-lightest-slate text-sm leading-relaxed line-clamp-2'>
                    {project.introduction}
                </p>

                <div className='flex flex-wrap gap-1.5 mt-1'>
                    {project.techStack.map((tech, idx) => (
                        <span key={idx} className='font-space text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green/10 text-green'>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Project