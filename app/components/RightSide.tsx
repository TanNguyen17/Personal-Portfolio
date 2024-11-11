import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import Project from './Project'
import AboutMe from './AboutMe'
import Experience from './Experience'


const RightSide = () => {
    return (
        <ScrollArea className='h-full w-full flex flex-col'>
            <AboutMe />
            <Project />
            <Experience />
        </ScrollArea>
    )
}

export default RightSide