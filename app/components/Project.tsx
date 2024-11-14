"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Badge } from "@/components/ui/badge"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image'

interface Project {
    imagePath: string,
    images: string[],
    accessLink: string,
    name: string,
    introduction: string,
    techStack: string[],
    activities: string[],
}

const projects: Project[] = [
    {
        imagePath: '/projects/mindary/mindary.png',
        images: ['/projects/mindary/mindary.png', '/projects/mindary/mindary_1.svg', '/projects/mindary/mindary_2.svg', '/projects/mindary/mindary_3.svg', '/projects/mindary/mindary_4.svg'],
        accessLink: '',
        name: 'Mindary',
        introduction: 'an innovative mental wellness app designed to support users in tracking their emotional well-being. Using AI-powered analysis, Mindary provides insights into mood trends, \
        identifies factors influencing mental health, and helps users reflect on positive memories.',
        techStack: ['Flutter', 'NodeJS', 'ExpressJS', 'LangChain', 'RAG', 'MongoDB'],
        activities: [
            'A mental health app that help users track and analyze their emotional health through diary entries, use\
            LLM to identify patterns, provide emotional support, and suggest mental health resources.',
            'Achieved Top 28 placement at Swin Hackathon 2024 out of 128 competing teams.',
            'Working on designing app workflow, API endpoints for user authentication, analyzing user entry.',
            'Responsible for coordinating team tasks, setting development milestones, and ensuring smooth communication among team members.',
            'Project remains under active development, with an aim of completing the main functions of the app and doing testing with.'
        ]
    },
    {
        imagePath: '/projects/greeli_forum/greeli.png',
        images: ['/projects/greeli_forum/greeli.png', '/projects/greeli_forum/greeli_forum_1.png', '/projects/greeli_forum/greeli_forum_2.png',
            '/projects/greeli_forum/greeli_forum_3.png', '/projects/greeli_forum/greeli_forum_4.png', '/projects/greeli_forum/greeli_forum_5.png'
        ],
        accessLink: 'https://group-project-cosc3060-2024a-ftech.onrender.com',
        name: 'Greeli Forum',
        introduction: 'Greeli Forum website, an interactive platform aimed at fostering community discussions and knowledge sharing around sustainability and green living. This forum enables users to create posts categorized by specific fields or topics, with posts subject\
        to admin verification before becoming publicly visible.',
        techStack: ['React', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS S3'],
        activities: [
            'A forum website that enables users to create posts categorized by specific fields or topics, with posts subject to admin verification before becoming publicly visible.',
            'Led a team of 5 members to develop the website using the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack.',
            'Designed and created functionality for users authentication, viewing others profiles, connect, and engage in real-time chat, enhancing community interaction and user engagement.',
            'Hosted teams regular meetings for feedback and updating tasks. Planned and managed team deadlines, ensuring timely completion of tasks and offering support to team members in overcoming obstacles.'
        ]
    },
    {
        imagePath: '/projects/fintech_web/fintech_club_website.png',
        images: ['/projects/fintech_web/fintech_club_website.png', '/projects/fintech_web/fintech_web_1.png',
            '/projects/fintech_web/fintech_web_2.png', '/projects/fintech_web/fintech_web_3.png'
        ],
        accessLink: 'https://www.rmitfintechclub.com',
        name: 'RMIT FinTech Club Website',
        introduction: 'The FinTech Club website project was designed to establish an online presence for our club, introducing and promoting it to a broader community. Our goal was to create a platform that was both informative and engaging, highlighting our club events, initiatives, and resources for prospective members and enthusiasts.',
        techStack: ['NextJS', 'TailwindCSS', 'MongoDB', 'AWS S3'],
        activities: [
            'Collaborated on the development of the FinTech Club website to introduce and promote the club within the community.',
            'Contributed to both front-end design and back-end CMS functionality to ensure a seamless user experience and efficient content management.',
            'Developed content management workflows for easy updates, enabling the club to maintain an active online presence.',
        ]
    }
]


const Project = () => {
    // const [onHover, setOnHover] = useState(false)
    // const [x, setX] = useState(0)
    // const [y, setY] = useState(0)
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-2 mb-4 font-bold'>
                <h1 className='text-3xl text-green'>02. </h1>
                <h1 className='text-3xl text-white'>Projects</h1>
            </div>
            {projects.map((project, idx) => (
                <Dialog key={idx}>
                    <DialogTrigger value={project.name}>
                        {/* <div className=' bg-transparent grid grid-cols-12 gap-4 my-4 p-4 rounded-lg hover:bg-lightest-slate-20 transition ease-out delay-80 hover:rounded-lg hover:border-slate-200'
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
                                <CardContent className='p-0 mt-2 text-slate-400 text-left'>
                                    {project.introduction}
                                </CardContent>
                                <CardFooter className=' p-0 mt-2 flex flex-wrap'>
                                    {project.techStack.map((tech, idx) => (
                                        <Badge key={idx} className=' p-2 rounded-3xl mr-1.5 mt-3 text-green bg-green-20'>
                                            {tech}
                                        </Badge>
                                    ))}
                                </CardFooter>
                            </Card> */}
                        <CardComponent imagePath={project.imagePath} images={project.images} accessLink={project.accessLink} name={project.name} introduction={project.introduction} techStack={project.techStack} activities={project.activities} />
                        {/* </div> */}
                    </DialogTrigger>
                    <DialogContent className='flex flex-col h-screen'>
                        <ScrollArea className='h-full w-full'>
                            <DialogHeader className='align-middle py-auto sm:text-center mb-2'>
                                <DialogTitle className=' text-navy-blue align-middle text-2xl'>{project.name}</DialogTitle>
                                {/* <DialogDescription>{project.name}</DialogDescription> */}
                            </DialogHeader>
                            <div className='flex flex-col justify-between items-center mb-4'>
                                <Carousel className="w-full max-w-xs">
                                    <CarouselContent>
                                        {project.images.map((image, idx) => (
                                            <CarouselItem key={idx}>
                                                <div className=''>
                                                    <Image
                                                        src={image}
                                                        alt='image gallery'
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{ width: '100%', height: 'auto' }} />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                                {/* <Image src={project.imagePath} alt={project.name} width={300} height={250} className='text-center align-middle' /> */}
                            </div>
                            <div>
                                <ul>
                                    {project.activities.map((activity, idx) => (
                                        <li key={idx}>
                                            <div className='flex flex-row gap-4'>
                                                <PlayArrowOutlinedIcon className='text-blue-600 text-sm mt-1' /> <span className='text-navy-blue'>{activity}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            )
            )}

        </div >
    )
}

const CardComponent = (project: Project) => {
    const [isHovered, setIsHovered] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <div
            className='bg-transparent grid grid-cols-12 gap-4 my-4 p-4 rounded-lg hover:bg-lightest-slate-20 transition ease-out delay-80 hover:rounded-lg hover:border-slate-200'
            onMouseOver={() => { setIsHovered(true); setX(5); setY(-5); }}
            onMouseLeave={() => { setIsHovered(false); setX(0); setY(0); }}
        >
            <div className='col-span-12 md:col-span-3'>
                <Image src={project.imagePath} alt={project.name} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className='rounded-sm border-slate-400 border-2' />
            </div>
            <Card className='col-span-12 md:col-span-9 border-none bg-transparent'>
                <CardHeader className='p-0'>
                    <CardTitle className={`text-lg ${isHovered ? "text-green" : "text-white"} flex flex-row`}>
                        <a href={project.accessLink} className='flex flex-row gap-1'> <span>{project.name}</span>
                            <motion.div className="" animate={{ x, y }} transition={{ type: "spring" }} >
                                <ArrowOutwardIcon className='text-sm' />
                            </motion.div>
                        </a>
                    </CardTitle>
                </CardHeader>
                <CardContent className='p-0 mt-2 text-slate-400 text-left'>
                    {project.introduction}
                </CardContent>
                <CardFooter className='p-0 mt-2 flex flex-wrap'>
                    {project.techStack.map((tech, idx) => (<Badge key={idx} className='p-2 rounded-3xl mr-1.5 mt-3 text-green bg-green-20'> {tech} </Badge>))}
                </CardFooter>
            </Card>
        </div>
    )
};

export default Project