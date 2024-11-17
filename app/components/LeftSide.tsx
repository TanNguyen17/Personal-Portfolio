'use client'
import React from 'react'
import Header from './Header'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const LeftSide = () => {
    return (

        <div className='max-h-screen'>
            <Header />
            <motion.div
                className='flex flex-row text-slate-300 gap-4 mt-6 justify-center md:justify-start'
                variants={container(1)}
                initial="hidden"
                animate="visible"
            >
                <a href="" target='_blank'>
                    <Button variant="outline" className='text-green border-green bg-green-20 transition hover:bg-green hover:scale-125  duration-500 ease-in-out'>
                        View CV
                    </Button>
                </a>
                <a href='' target='_blank' className='hover:text-green transition-color ease-in-out duration-150 py-1'><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/manh-tan-nguyen-6373b3275/" target='_blank' className='hover:text-green transition-color ease-in-out duration-150 py-1'><LinkedInIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100013745418228" target='_blank' className='hover:text-green transition-color ease-in-out duration-150 py-1'><FacebookIcon /></a>
            </motion.div>
        </div>
    )
}

export default LeftSide