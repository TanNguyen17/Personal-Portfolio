import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import Project from './Project'
import AboutMe from './AboutMe'
import Experience from './Experience'
import ContactInfo from './ContactInfo'


const RightSide = () => {
    return (
        <ScrollArea className='h-full w-full flex flex-col gap-6'>
            <AboutMe />
            <Project />
            <Experience />
            <ContactInfo />
        </ScrollArea>
    )
}

export default RightSide