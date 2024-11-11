"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image'

interface Project {
    imagePath: string,
    accessLink: string,
    name: string,
    introduction: string,
    techStack: string[],
}

const projects: Project[] = [
    {
        imagePath: '/projects/mindary.png',
        accessLink: '',
        name: 'Mindary',
        introduction: 'A mental health app that help users track and analyze their emotional health through diary entries, use\
        LLM to identify patterns, provide emotional support, and suggest mental health resources',
        techStack: ['Flutter', 'NodeJS', 'ExpressJS', 'LangChain', 'RAG', 'MongoDB']
    },
    {
        imagePath: '/projects/greeli.png',
        accessLink: 'https://group-project-cosc3060-2024a-ftech.onrender.com',
        name: 'Greeli Forum',
        introduction: 'A forum website that enables users to create posts categorized by specific fields or topics, with posts subject\
        to admin verification before becoming publicly visible.',
        techStack: ['React', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS S3']
    },
    {
        imagePath: '/projects/fintech_club_website.png',
        accessLink: 'https://www.rmitfintechclub.com',
        name: 'RMIT FinTech Club Website',
        introduction: 'A forum website that enables users to create posts categorized by specific fields or topics, with posts subject\
        to admin verification before becoming publicly visible.',
        techStack: ['NextJS', 'TailwindCSS', 'MongoDB', 'AWS S3']
    }
]


const Project = () => {

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-2 mb-4 font-bold'>
                <h1 className='text-3xl text-green'>02. </h1>
                <h1 className='text-3xl text-white'>Projects</h1>
            </div>
            {projects.map((project, idx) => {
                const [onHover, setOnHover] = useState(false)
                const [x, setX] = useState(0)
                const [y, setY] = useState(0)

                return (
                    <div key={idx} className=' bg-transparent grid grid-cols-12 gap-4 my-4 p-4 rounded-lg hover:bg-lightest-slate-20 transition ease-out delay-80 hover:rounded-lg hover:border-slate-200'
                        onMouseOver={() => {
                            setOnHover(true)
                            setX(5)
                            setY(-5)
                        }}
                        onMouseLeave={() => {
                            setOnHover(false)
                            setX(0)
                            setY(0)
                        }}
                    >
                        <div className='col-span-3'>
                            <Image src={project.imagePath} alt={project.name} width={150} height={150} className='rounded-sm border-slate-400 border-2' />
                        </div>
                        <Card className='col-span-9 border-none bg-transparent'>
                            <CardHeader className='p-0'>
                                <CardTitle className={`text-lg ${onHover ? "text-green" : "text-white"} flex flex-row`}>
                                    <a href={project.accessLink} className='flex flex-row gap-1'>
                                        <span>{project.name}</span>
                                        <motion.div
                                            className=""
                                            animate={{ x, y }}
                                            transition={{ type: "spring" }}
                                        >
                                            <ArrowOutwardIcon className='text-sm' />
                                        </motion.div>
                                    </a>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='p-0 mt-2 text-slate-400'>
                                {project.introduction}
                            </CardContent>
                            <CardFooter className=' p-0 mt-2 flex flex-wrap'>
                                {project.techStack.map((tech, idx) => (
                                    <Badge key={idx} className=' p-2 rounded-3xl mr-1.5 mt-3 text-green bg-green-20'>
                                        {tech}
                                    </Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}

        </div>
    )
}

export default Project