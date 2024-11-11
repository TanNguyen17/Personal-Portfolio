import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { motion, AnimatePresence } from "framer-motion"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';


interface Experience {
    name: string,
    position: string,
    accessLink: string,
    activities: string[],
    time: string
}

const experiences: Experience[] = [
    {
        name: 'RMIT FinTech',
        position: 'Member of Tech Department',
        accessLink: '',
        activities: [
            'Led a team to create an active-learning hub focused on Data Structures and Algorithms, encouraging a\
            collaborative and active learning environment where participants can enhance their technical skills through peer-led\
            discussions and presentations',
            'Participated in developing the webpage for club',
            'Hosted a programming competition for club members'
        ],
        time: '3/2024 - Present',
    },
    {
        name: 'Techno Guild',
        position: 'President',
        accessLink: '',
        activities: [
            'Organized Technology Experience Booths on STEM Day and Big Open Day at FPT Highschool with the\
            participation of more than 1000 highschool students in Can Tho city',
            'Trained programming language and coding skills for 30 members in tech department',
            'Hosted a programming competition for club members'
        ],
        time: '2021 - 2023',
    }
]

const Experience = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-2 mb-4 font-bold'>
                <h1 className='text-3xl text-green'>03. </h1>
                <h1 className='text-3xl text-white'>Experiences</h1>
            </div>
            <Tabs defaultValue="RMIT FinTech" className="w-full flex flex-row gap-4">
                <div className='w-3/12 flex flex-col gap-0'>
                    {experiences.map((experience, idx) => (

                        <TabsList className='border-none bg-trasparent py-0 h-12' key={idx}>
                            <TabsTrigger value={experience.name} className='rounded-none text-slate-400 border-l-2 border-slate-600 bg-transparent data-[state=active]:border-green data-[state=active]:text-green data-[state=active]:bg-lightest-slate-20 p-0 w-full h-full'>{experience.name}</TabsTrigger>
                        </TabsList>

                    ))}
                </div>
                <div className='w-5/6'>
                    {
                        experiences.map((experience, idx) => (
                            <TabsContent value={experience.name} className='' key={idx}>
                                <Card className='border-none bg-transparent mt-0'>
                                    <CardHeader className='p-0'>
                                        <CardTitle className='flex flex-row'>
                                            <h3 className='text-xl text-white'>{experience.position} <span className='text-green'>@ {experience.name}</span></h3>
                                        </CardTitle>
                                        <CardDescription className='text-slate-400'>
                                            {experience.time}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className='mt-5'>
                                        <ul className='list-none flex flex-col gap-2'>
                                            {
                                                experience.activities.map((activity, idx) => (
                                                    <li key={idx}>
                                                        <div className='flex flex-row gap-4'>
                                                            <PlayArrowOutlinedIcon className='text-green text-sm mt-0.5' /> <span className='text-slate-400'>{activity}</span>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                        ))
                    }
                </div>
            </Tabs>
        </div>
    )
}

export default Experience