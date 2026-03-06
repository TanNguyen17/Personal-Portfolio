import React from 'react'
import Project from './Project'
import AboutMe from './AboutMe'
import Experience from './Experience'
import ContactInfo from './ContactInfo'
import { reader } from '@/lib/keystatic'

const RightSide = async () => {
    const projects = await reader.collections.projects.all();
    const experiences = await reader.collections.experiences.all();

    return (
        <div className='flex flex-col gap-4'>
            <AboutMe />
            <Project projects={projects.map(p => p.entry)} />
            <Experience experiences={experiences.map(e => e.entry)} />
            <ContactInfo />
        </div>
    )
}

export default RightSide