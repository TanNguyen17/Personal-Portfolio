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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import { ScrollArea } from "@/components/ui/scroll-area"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Badge } from "@/components/ui/badge"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image'
import { ListItemText } from '@mui/material';

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
        introduction: 'An innovative mental wellness app designed to support users in tracking their emotional well-being. Using AI-powered analysis, Mindary provides insights into mood trends, \
        identifies factors influencing mental health, and helps users reflect on positive memories.',
        techStack: ['Flutter', 'NodeJS', 'ExpressJS', 'LangChain', 'RAG', 'MongoDB'],
        activities: [
            'A mental wellness app created to help users track and analyze their emotions through AI-powered journal entries, offering insights and personalized recommendations to support emotional well-being.',
            'Managing a team of 5 to develop the app built with Flutter (front-end) and ExpressJS (back-end), with LangchainJS for natural language processing\
            by LLM and MongoDB to store NOSQL and vector data storage.',
            'Architected app workflows and data flows to ensure a seamless user experience.',
            'Contributed to design and implement database entities, front-end UI, back-end logic and API endpoints for\
            essential app functionalities including user authentication, journal analysis, and personalized recommendations.',
            'Planned project milestones, setting clear goals, managing task delegation, and maintaining alignment on project objectives.',
            'Achieved Top 28 placement at Swin Hackathon 2024 out of 128 competing teams.\
            Currently in top 15 of RMIT AI for Sustainability Competition.',
            'Project remains under active development, with an aim of completing the main\
            functions of the app and doing testing with target customer.'
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
            'Led the development of a forum website where users can create posts categorized by specific fields or topics,\
            with an admin verification system to ensure content quality before publication.',
            'Designed and implemented full-stack functionalities for user authentication,\
            profile viewing, real-time chat, and user connections, fostering a dynamic and engaging community platform.',
            'Conducted regular team meetings for feedback and progress updates, effectively planning and managing deadlines to ensure timely task completion.\
            Provided guidance and support to overcome technical and project-related challenges.',
            'Archieved High Distinction score from the course and a 95% Lighthouse score for desktop devices.'
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
            <div className='flex flex-row gap-2 mb-8 font-bold'>
                <h1 className='text-3xl text-green'>02. </h1>
                <h1 className='text-3xl text-white'>Projects</h1>
            </div>
            {projects.map((project, idx) => (
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    key={idx}
                >
                    <Dialog>
                        <DialogTrigger value={project.name}>
                            <CardComponent imagePath={project.imagePath} images={project.images} accessLink={project.accessLink} name={project.name} introduction={project.introduction} techStack={project.techStack} activities={project.activities} />
                        </DialogTrigger>
                        <DialogContent className='flex flex-col h-screen'>
                            <ScrollArea className='h-full w-full'>
                                <DialogHeader className='align-middle py-auto sm:text-center mb-6'>
                                    <DialogTitle className=' text-navy-blue align-middle text-2xl'>{project.name}</DialogTitle>
                                </DialogHeader>
                                <div className='flex flex-col justify-between items-center mb-2 md:mb-4'>
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
                                    <List>
                                        {project.activities.map((activity, idx) => (
                                            <ListItem key={idx} className='px-0'>
                                                <ListItemIcon>
                                                    <PlayArrowOutlinedIcon className='text-blue-600 text-xl mt-1' />
                                                </ListItemIcon>
                                                <ListItemText primary={activity} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </motion.div>
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
                    <CardTitle className={`text-lg ${isHovered ? "text-green" : "text-white"} text-xl flex flex-row`}>
                        <a href={project.accessLink} className='flex flex-row gap-1'> <span>{project.name}</span>
                            <motion.div className="" animate={{ x, y }} transition={{ type: "spring" }} >
                                <ArrowOutwardIcon className='text-sm' />
                            </motion.div>
                        </a>
                    </CardTitle>
                </CardHeader>
                <CardContent className='p-0 mt-2 text-slate-300 text-left text-lg'>
                    {project.introduction}
                </CardContent>
                <CardFooter className='p-0 mt-2 flex flex-wrap'>
                    {project.techStack.map((tech, idx) => (<Badge key={idx} className='text-base p-2 rounded-sm mr-1.5 mt-3 text-green bg-green-20 hover:bg-green hover:text-black'> {tech} </Badge>))}
                </CardFooter>
            </Card>
        </div>
    )
};

export default Project