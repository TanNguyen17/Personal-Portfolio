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

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { ScrollArea } from "@/components/ui/scroll-area"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image'
import { Sparkles, Cpu, Award, HelpCircle } from 'lucide-react'

interface Project {
    imagePath: string | null,
    images: readonly (string | null)[],
    accessLink: string | null,
    name: string,
    introduction: string,
    techStack: readonly string[],
    activities: readonly string[],
    metricValue?: string | null,
    metricLabel?: string | null,
    problemSolved?: string | null,
}

const Project = ({ projects }: { projects: Project[] }) => {
    return (
        <section id="projects" className='mb-24 scroll-mt-20 font-space'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-80px" }}
            >
                <h2 className='font-syne text-sm uppercase tracking-widest text-blue mb-8 flex items-center gap-3'>
                    <span className="h-px w-8 bg-blue/40" />
                    Featured Projects
                </h2>
            </motion.div>

            <div className="flex flex-col gap-5">
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
                            <DialogContent className='flex flex-col h-[85vh] max-w-3xl bg-navy-blue border border-white/10 p-0 rounded-xl overflow-hidden font-space'>
                                <ScrollArea className='h-full w-full p-6 md:p-8'>
                                    <DialogHeader className='mb-6'>
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <DialogTitle className='font-syne text-2xl font-bold text-white tracking-tight'>
                                                {project.name}
                                            </DialogTitle>
                                            
                                            {project.metricValue && (
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-blue text-xs font-semibold">
                                                    <Award className="w-3.5 h-3.5" />
                                                    <span>{project.metricValue}</span>
                                                    {project.metricLabel && (
                                                        <span className="text-white/60 font-normal"> · {project.metricLabel}</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </DialogHeader>

                                    {/* Tabs Layout */}
                                    <Tabs defaultValue="overview" className="w-full">
                                        <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 p-1 mb-6 rounded-lg h-auto">
                                            <TabsTrigger value="overview" className="text-xs py-2 data-[state=active]:bg-blue data-[state=active]:text-navy-blue font-semibold">
                                                Overview
                                            </TabsTrigger>
                                            <TabsTrigger value="contributions" className="text-xs py-2 data-[state=active]:bg-blue data-[state=active]:text-navy-blue font-semibold">
                                                Contributions & Impact
                                            </TabsTrigger>
                                            <TabsTrigger value="tech" className="text-xs py-2 data-[state=active]:bg-blue data-[state=active]:text-navy-blue font-semibold">
                                                Tech Stack
                                            </TabsTrigger>
                                        </TabsList>

                                        {/* Tab Content: Overview */}
                                        <TabsContent value="overview" className="flex flex-col gap-6 outline-none">
                                            {project.images && project.images.length > 0 && (
                                                <div className='rounded-lg overflow-hidden border border-white/5 bg-black/45 p-2'>
                                                    <Carousel className="w-full">
                                                        <CarouselContent>
                                                            {project.images.map((image, idx) => (
                                                                <CarouselItem key={idx}>
                                                                    <div className='relative aspect-video w-full overflow-hidden rounded-md bg-black/40 flex items-center justify-center'>
                                                                        {/* Ambient blurred backdrop of the same image */}
                                                                        {image && (
                                                                            <div 
                                                                                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-15 scale-105 pointer-events-none"
                                                                                style={{ backgroundImage: `url(${image})` }}
                                                                            />
                                                                        )}
                                                                        <Image
                                                                            src={image || ''}
                                                                            alt={`${project.name} screenshot ${idx + 1}`}
                                                                            fill
                                                                            className="object-contain z-10"
                                                                            sizes="(max-width: 768px) 100vw, 800px"
                                                                            priority={idx === 0}
                                                                        />
                                                                    </div>
                                                                </CarouselItem>
                                                            ))}
                                                        </CarouselContent>
                                                        <CarouselPrevious className="left-4 bg-navy-blue/80 hover:bg-blue border-white/10 text-white hover:text-navy-blue" />
                                                        <CarouselNext className="right-4 bg-navy-blue/80 hover:bg-blue border-white/10 text-white hover:text-navy-blue" />
                                                    </Carousel>
                                                </div>
                                            )}

                                            <div className="flex flex-col gap-3">
                                                <h4 className="text-xs font-semibold uppercase tracking-widest text-blue/70">Project Description</h4>
                                                <p className="text-sm text-lightest-slate leading-relaxed">
                                                    {project.introduction}
                                                </p>
                                            </div>

                                            {project.accessLink && (
                                                <div className="mt-2">
                                                    <a href={project.accessLink} target="_blank" rel="noreferrer"
                                                        className="inline-flex items-center gap-2 font-space text-sm font-medium text-blue hover:text-white transition-colors duration-300">
                                                        Visit Live Website <ArrowOutwardIcon fontSize="small" />
                                                    </a>
                                                </div>
                                            )}
                                        </TabsContent>

                                        {/* Tab Content: Contributions & Impact */}
                                        <TabsContent value="contributions" className="flex flex-col gap-6 outline-none">
                                            {project.problemSolved && (
                                                <div className="p-4 rounded-lg bg-blue/5 border border-blue/10 flex flex-col gap-2">
                                                    <h4 className="text-xs font-bold text-blue uppercase tracking-wider flex items-center gap-1.5">
                                                        <HelpCircle className="w-3.5 h-3.5" />
                                                        The Challenge & Solution
                                                    </h4>
                                                    <p className="text-sm text-lightest-slate leading-relaxed">
                                                        {project.problemSolved}
                                                    </p>
                                                </div>
                                            )}

                                            <div className="flex flex-col gap-4">
                                                <h4 className="text-xs font-semibold uppercase tracking-widest text-blue/70">Key Activities & Outcomes</h4>
                                                <ul className='flex flex-col gap-3'>
                                                    {project.activities.map((activity, idx) => (
                                                        <li key={idx} className='flex gap-3 items-start'>
                                                            <span className="text-blue mt-1.5 text-xs select-none">▸</span>
                                                            <span className="font-space text-sm text-lightest-slate leading-relaxed">{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </TabsContent>

                                        {/* Tab Content: Tech Stack */}
                                        <TabsContent value="tech" className="flex flex-col gap-4 outline-none">
                                            <div className="flex flex-col gap-2">
                                                <h4 className="text-xs font-semibold uppercase tracking-widest text-blue/70 flex items-center gap-1.5">
                                                    <Cpu className="w-3.5 h-3.5 text-blue" />
                                                    Technologies & Libraries Used
                                                </h4>
                                                <p className="text-xs text-lightest-slate/50 mb-2">
                                                    Core tools applied to design, build, and deploy this project:
                                                </p>
                                                <div className='flex flex-wrap gap-2.5'>
                                                    {project.techStack.map((tech, idx) => (
                                                        <span key={idx} className='font-space text-xs font-medium px-3.5 py-1.5 rounded-lg bg-blue/10 border border-blue/15 text-blue shadow-sm shadow-blue/5'>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
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
            className='group relative flex flex-col sm:flex-row gap-5 p-5 -mx-5 rounded-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-white/5 bg-transparent hover:bg-white/[0.01]'
            style={{
                background: isHovering
                    ? `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(56, 189, 248, 0.06), transparent 40%)`
                    : 'transparent',
            }}
        >
            {/* Border glow overlay */}
            {isHovering && (
                <div
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-50"
                    style={{
                        border: '1px solid transparent',
                        background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(56, 189, 248, 0.15), transparent 40%) border-box`,
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                />
            )}

            {/* Thumbnail */}
            <div className='sm:w-36 md:w-44 flex-shrink-0 relative aspect-video sm:aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 group-hover:border-blue/30 transition-colors duration-500 shadow-lg shadow-black/40'>
                <Image
                    src={project.imagePath || ''}
                    alt={project.name}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
            </div>

            {/* Info */}
            <div className='flex flex-col justify-center gap-2 min-w-0 flex-grow'>
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className='font-syne text-lg font-bold text-white group-hover:text-blue transition-colors duration-300 flex items-center gap-1.5'>
                        <span className="truncate">{project.name}</span>
                        <ArrowOutwardIcon
                            className='flex-shrink-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300'
                            style={{ fontSize: 16 }}
                        />
                    </h3>

                    {project.metricValue && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue/10 border border-blue/15 text-blue text-[10px] font-bold">
                            {project.metricValue}
                        </span>
                    )}
                </div>

                <p className='font-space text-lightest-slate text-sm leading-relaxed line-clamp-2'>
                    {project.introduction}
                </p>

                <div className='flex flex-wrap gap-1.5 mt-1'>
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className='font-space text-[10px] font-medium px-2 py-0.5 rounded bg-blue/10 border border-blue/15 text-blue'>
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className='font-space text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-lightest-slate/85'>
                            +{project.techStack.length - 4} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Project