'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { motion, AnimatePresence } from "framer-motion"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { motion } from "framer-motion"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material';

interface Experience {
    name: string,
    position: string,
    place: string,
    accessLink: string,
    activities: string[],
    time: string
}

const experiences: Experience[] = [
    {
        name: 'FinTech Club',
        position: 'Member of Tech Department',
        place: 'RMIT FinTech',
        accessLink: 'https://www.facebook.com/rmitfintechclub',
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
        name: 'WERO',
        position: 'Team Leader',
        place: 'S4VN Mentorship Program',
        accessLink: 'https://www.steamforvietnam.org/en',
        activities: [
            'Contributed documentation to improve ” STEAM For Vietnam: CS101 course - Introduction to computer science',
            'Created Wordle Game for Vietnam Geography which was used as example projects in CS101 course',
        ],
        time: '4 - 6/2022',
    },
    {
        name: 'Techno Guild',
        position: 'President',
        place: 'Techno Guild Club',
        accessLink: 'https://www.facebook.com/technoguildfpt',
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
            <div className='flex flex-row gap-2 mb-8 font-bold'>
                <h1 className='text-3xl text-green'>03. </h1>
                <h1 className='text-3xl text-white'>Experiences</h1>
            </div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
            >
                <Tabs defaultValue="FinTech Club" className="w-full flex flex-col gap-2 md:flex-row md:gap-4">
                    <div className='w-full md:w-3/12 flex flex-row md:flex-col gap-0 justify-center md:justify-start'>
                        {experiences.map((experience, idx) => (
                            <TabsList className='border-none bg-trasparent py-0 h-12' key={idx}>
                                <TabsTrigger value={experience.name} className='text-lg rounded-none text-slate-300 border-l-0 border-t-2 md:border-l-2 md:border-t-0 border-slate-600 bg-transparent data-[state=active]:border-green data-[state=active]:text-green data-[state=active]:bg-lightest-slate-20 w-full h-full'>{experience.name}</TabsTrigger>
                            </TabsList>
                        ))}
                    </div>
                    <div className='w-full md:w-5/6'>
                        {
                            experiences.map((experience, idx) => (
                                <TabsContent value={experience.name} className='' key={idx}>
                                    <Card className='border-none bg-transparent mt-0'>
                                        <CardHeader className='p-0'>
                                            <CardTitle className='flex flex-row'>
                                                <h3 className='text-xl text-white'>{experience.position} <span className='text-green'>@ <a href={experience.accessLink} target="_blank" className='underlined'>{experience.place}</a></span></h3>
                                            </CardTitle>
                                            <CardDescription className='text-slate-300 text-base'>
                                                {experience.time}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className='p-0 mt-1 md:mt-4'>
                                            <List className='list-none flex flex-col gap-2'>
                                                {
                                                    experience.activities.map((activity, idx) => (
                                                        <ListItem key={idx} className='text-lg px-0'>
                                                            <ListItemIcon className='flex flex-row gap-4'>
                                                                <PlayArrowOutlinedIcon className='text-green text-2xl mt-1' />
                                                            </ListItemIcon>
                                                            <ListItemText className='text-slate-300' primary={activity} />
                                                        </ListItem>
                                                    ))
                                                }
                                            </List>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))
                        }
                    </div>
                </Tabs>
            </motion.div>
        </div>
    )
}

export default Experience